import {create} from 'zustand';
import axios from 'axios';
import useInfoStore from './infoStore';
const url = import.meta.env.VITE_BASE_URL;

const useEventStore = create((set, get) => ({
    events: [],
    fetchEvents: async () => {
        if(get().events.length > 0) return;
        const setInfo = useInfoStore.getState().setInfo;
        try{
            const response = await axios.get(`${url}/api/events`);
            if(response.status === 200){
                set({events: response.data});
            } else {
                console.error("Error fetching data");
                throw new Error("Error fetching events data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setInfo("Error fetching events data", "error");
        }
    },
}));

export default useEventStore;