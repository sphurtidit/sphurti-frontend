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

      const selectedSports = data.filter((_, index) => checkedItems[index]);
      if (!selectedSports.length) throw new Error("No sports selected");

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
            cat_id: selectedSports.map((sport) => sport.catId),
            reg_id: selectedSports.map((sport) => sport._id),
          };

          if (await paymentVerify({ data: paymentData })) onClose();
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
      const newTotal = Object.entries(updatedChecked)
        .filter(([_, isChecked]) => isChecked)
        .reduce((sum, [key]) => sum + data[key].amount, 0);

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
        {data.map((sport, index) => (
          <div className="container1" key={sport._id}>
            <div className="container2">
              <div className="sports-images">
                <img src={eventImages[sport.eventName.toLowerCase()] || ""} alt={sport.name} />
              </div>
              <div className="text-of-sports">{sport.teamName}</div>
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
