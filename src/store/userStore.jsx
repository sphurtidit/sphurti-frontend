import { create } from 'zustand'
import axios from 'axios'
import useInfoStore from './infoStore';
const url = import.meta.env.VITE_BASE_URL;

const useUserStore = create((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => {
    localStorage.removeItem("authToken");
    set({ user: null });
  },

  fetchUser: async () => {
    const token = localStorage.getItem("authToken");
    const user = get().user;
    const setInfo = useInfoStore.getState().setInfo;

    if (!token || user) return;

    try {
      const response = await axios.get(`${url}/api/user/verify-user`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
      })
      if (response.status !== 200) {
        throw new Error("Error fetching user details");
      }
      set({ user: response.data.data.currentUser });
    } catch (err) {
      console.error("Error fetching user data:", err);
      set({ user: null });
      setInfo("Error fetching user data", "error");
    }
  }
}))


export default useUserStore;