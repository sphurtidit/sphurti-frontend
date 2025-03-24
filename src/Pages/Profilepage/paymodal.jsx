import React, { useState } from "react";
import "./paymodal.css";
import eventImages from "../../utils/eventImages"
import useUserStore from "../../store/userStore";
import useInfoStore from "../../store/infoStore";

const apiKey = import.meta.env.TEST_KEY;

const PayModal = ({ show, onClose, data, contact, email }) => {
  const [total, setTotal] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});
  const [loading, setLoading] = useState(false);
  const { createOrder, paymentVerify } = useUserStore();
  const { setInfo } = useInfoStore();

  const filteredData = [];

  data.forEach((item) => {
    if (!item.payStatus) {
      filteredData.push({
        type: "Reg",
        regId: item._id,
        amount: item.amount,
        teamName: item.teamName,
        eventName: item.eventName,
        categoryName: item.categoryName,
      });
    }
    if (item.accommodation && !item.payAccommodation) {
      filteredData.push({
        type: "Acc",
        regId: item._id,
        amount: (item.member.length + item.faculty.length) * 1000,
        memberCount: item.member.length + item.faculty.length,
        teamName: item.teamName,
        eventName: item.eventName,
        categoryName: item.categoryName,
      });
    }
  });

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error("Failed to load payment SDK."));
      document.body.appendChild(script);
    });

  const displayRazorpay = async () => {
    if (loading || total === 0) {
      setInfo("Please select at least one sport before proceeding.", "error");
      return;
    }

    setLoading(true);
    try {
      await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      const orderId = await createOrder(total);
      if (!orderId) throw new Error("Error creating order");

      const selectedItems = Object.entries(checkedItems)
        .filter(([_, isChecked]) => isChecked)
        .map(([key]) => filteredData[key]);

      if (!selectedItems.length) throw new Error("No selections made");

      const options = {
        key: apiKey,
        amount: total * 100,
        currency: "INR",
        name: "Sphurti 2025",
        description: "Event Registration Fees",
        order_id: orderId,
        handler: async (response) => {
          const paymentData = {
            orderCreationId: orderId,
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            amount: total,
            details: selectedItems
          };

          const paymentSuccess = await paymentVerify({ data: paymentData });

          if (paymentSuccess) {
            onClose(); // Close the modal
            window.location.reload(); // Reload the page after successful payment
          }
        },
        prefill: { name: "Sphurti 2025", email: email || "", contact: contact || "" },
      };

      new window.Razorpay(options).open();
    } catch (error) {
      setInfo(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (index, amount) => {
    setCheckedItems((prev) => {
      const updatedChecked = { ...prev, [index]: !prev[index] };

      // Calculate new total based on filteredData
      const newTotal = Object.entries(updatedChecked)
        .filter(([_, isChecked]) => isChecked)
        .reduce((sum, [key]) => sum + filteredData[key].amount, 0);

      setTotal(newTotal);
      return updatedChecked;
    });
  };

  if (!show) return null;

  return (
    <div className="pay-modal-overlay">
      <div className="pay-modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Select for Payment</h2>
        {filteredData.map((sport, index) => (
          <div className="container1" key={`${sport.regId}-${sport.type}`}>
            <div className="container2">
              <div className="sports-images">
                <img src={eventImages[sport.eventName?.toLowerCase()] || ""} alt={sport.name} />
              </div>
              <div className="text-of-sports">
                {sport.teamName} - <span>{sport.type === "Reg" ? "Registration Due" : "Accommodation Due"}</span>
              </div>
            </div>
            <div className="prize">
              {sport.amount}/-
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index, sport.amount)}
              />
            </div>
          </div>
        ))}
        <hr />
        <div className="total">
          <div className="total2">Total:</div>
          <div>{total}/-</div>
        </div>
        <div className="modal-buttons">
          <button className="proceedpay" onClick={displayRazorpay} disabled={loading}>
            {loading ? "Processing..." : "Proceed to Pay"}
          </button>
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayModal;
