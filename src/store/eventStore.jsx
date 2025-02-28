import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import useInfoStore from "./infoStore";

const url = import.meta.env.VITE_BASE_URL;

const useEventStore = create(
    persist(
        (set, get) => ({
            events: [],

            fetchEvents: async () => {
                if (get().events.length > 0) return; // Don't refetch if already available

                const setInfo = useInfoStore.getState().setInfo;
                try {
                    const response = await axios.get(`${url}/api/events`);
                    if (response.status === 200) {
                        set({ events: response.data });
                    } else {
                        console.error("Error fetching data");
                        throw new Error("Error fetching events data");
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setInfo("Error fetching events data", "error");
                }
            },

            registerTeam: async (data) => {
                const setInfo = useInfoStore.getState().setInfo;
                console.log("Registering Team:", data);

                const path = `${url}/api/registration`;
                console.log("members", data.members);

                const body = {
                    clgMail: data.formData.clg_mail,
                    nameSO: data.formData.name_so,
                    nameVC: data.formData.name_vc,
                    amount: data.categoryData.registrationFees,
                    payStatus: false,
                    teamName: data.formData.team_name,
                    alternateNo: data.formData.alternate_phone,
                    member: data.members,
                    captainName: data.formData.captain_name,
                    phoneNo: data.formData.phone,
                    eventId: data.categoryData.eventId,
                    catId: data.categoryData._id,
                };

                console.log("Request body", body);
                try {
                    const response = await axios.post(path, body, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                        },
                    });

                    console.log("regs", response);
                    if (response.status === 201) {
                        return true;
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setInfo(`Error registering in game: ${error.response?.data?.message}`, "error");
                    return false;
                }
                return false;
            },
        }),
        {
            name: "event-storage", // LocalStorage key
            partialize: (state) => ({ events: state.events }), // Only persist `events`
        }
    )
);

export default useEventStore;
