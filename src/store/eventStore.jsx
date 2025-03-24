import { create } from "zustand";
import axios from "axios";
import useInfoStore from "./infoStore";

const url = import.meta.env.VITE_BASE_URL;

const useEventStore = create((set, get) => ({
    events: [],

    fetchEvents: async () => {
        if (get().events.length > 0) return; // Don't refetch if already available
        console.log("Fetching events...");
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
            faculty: data.facultyMembers,
            accommodation: data.formData.accommodation,
            payAccommodation: false,
            city: data.formData.city // Added city variable
        };
        

        console.log("Request body", body);
        try {
            const response = await axios.post(path, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });

            console.log("Registration response:", response);
            return response.status === 201;
        } catch (error) {
            console.error("Error registering:", error);
            setInfo(`Error registering: ${error.response?.data?.message}`, "error");
            return false;
        }
    },

    updateTeam: async (id, data) => {
        const setInfo = useInfoStore.getState().setInfo;
        console.log("Updating Team:", data);

        const path = `${url}/api/registration/${id}`;

        const body = {
            clgMail: data.formData.clg_mail,
            nameSO: data.formData.name_so,
            nameVC: data.formData.name_vc,
            amount: data.categoryData.registrationFees,
            payStatus: data.formData.payStatus,
            teamName: data.formData.team_name,
            alternateNo: data.formData.alternate_phone,
            member: data.members,
            captainName: data.formData.captain_name,
            phoneNo: data.formData.phone,
            eventId: data.categoryData.eventId,
            catId: data.categoryData._id,
            faculty: data.facultyMembers,
            accommodation: data.formData.accommodation,
            payAccommodation: data.formData.payAccommodation
        };

        console.log("Request body", body);
        try {
            const response = await axios.put(path, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });

            console.log("Update response:", response);
            return response.status === 200;
        } catch (error) {
            console.error("Error updating:", error);
            setInfo(`Error updating: ${error.response?.data?.message}`, "error");
            return false;
        }
    },

    getRegisteredEvent: async (id) => {
        const setInfo = useInfoStore.getState().setInfo;
        console.log("Fetching registered event for ID:", id);
        try {
            const response = await axios.get(`${url}/api/registration/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });
            console.log("Registered event response:", response);
            return response.status === 200 ? response.data : null;
        } catch (error) {
            console.error("Error fetching registered event:", error);
            setInfo("Error fetching registered event", "error");
            return null;
        }
    },

    getEventCategoryData: async (id) => {
        const setInfo = useInfoStore.getState().setInfo;
        try {
            const response = await axios.get(`${url}/api/eventcategory/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });
            return response.status === 200 ? response.data : null;
        } catch (error) {
            console.error("Error fetching event category data:", error);
            setInfo("Error fetching event category data", "error");
            return null;
        }
    }
}));

export default useEventStore;
