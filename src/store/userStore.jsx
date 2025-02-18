import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import useInfoStore from "./infoStore";

const url = import.meta.env.VITE_BASE_URL;

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      
      setUser: (user) => set({ user }),

      logout: () => {
        const setInfo = useInfoStore.getState().setInfo;
        localStorage.removeItem("authToken");
        setInfo("Logged out successfully", "success");
        set({ user: null });
      },

      fetchUser: async () => {
        const token = localStorage.getItem("authToken");
        const user = get().user;
        const setInfo = useInfoStore.getState().setInfo;

        if (!token || user) return;

        try {
          const response = await axios.get(`${url}/api/user/verify-user`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.status !== 200) {
            throw new Error("Error fetching user details");
          }

          set({ user: response.data.data.currentUser });
        } catch (err) {
          console.error("Error fetching user data:", err);
          set({ user: null });
          setInfo("Error fetching user data", "error");
        }
      },

      loginUser: async (email, password) => {
        const setInfo = useInfoStore.getState().setInfo;
        try {
          const response = await axios.post(`${url}/api/user/login`, {
            email,
            password,
          });
          console.log(response);
          const { token, user } = response.data.data;
          localStorage.setItem("authToken", token);
          setTimeout(() => {
            setInfo("Login successful", "success");
          }, 1500);
          set({ user });
          return true;
        } catch (err) {
          console.error("Login failed:", err);
          setInfo(err.response?.data?.message || "Something went wrong", "error");
          return false;
        }
      },

      signupUser: async (signupInfo) => {
        const setInfo = useInfoStore.getState().setInfo;
        try {
          const response = await axios.post(`${url}/api/user/signup`, signupInfo);
          const { token, user } = response.data.data;

          localStorage.setItem("authToken", token);
          set({ user });
          setInfo("Signup successful", "success");
          return true;
        } catch (err) {
          console.error("Signup failed:", err.response?.data?.message);
          setInfo(err.response?.data?.message || "Signup failed", "error");
          return false;
        }
      },

      verifyEmail: async (email) => {
        const setInfo = useInfoStore.getState().setInfo;
        if (!email) {
          setInfo("Please enter your email to verify", "error");
          return false;
        }
        try {
          const response = await axios.post(`${url}/api/user/verify-email`, {
            email,
          });

          if (response.status !== 200) {
            throw new Error("Failed to send OTP");
          }
          setInfo("OTP sent to your email", "success");
          return true;
        } catch (err) {
          console.error("Error sending OTP:", err);
          setInfo("Failed to send OTP", "error");
          return false;
        }
      },

      verifyOtp: async (email, otp) => {
        const setInfo = useInfoStore.getState().setInfo;
        try {
          const response = await axios.post(`${url}/api/user/verify-otp`, {
            email,
            otp,
          });

          if (response.status !== 200) {
            throw new Error("Invalid OTP");
          }
          setInfo("OTP verified successfully", "success");
          return true;
        } catch (err) {
          console.error("Error verifying OTP:", err);
          setInfo("Invalid OTP", "error");
          return false;
        }
      },
    }),
    {
      name: "user-storage", // Key under which user data is stored in localStorage
      getStorage: () => localStorage, // Persist to localStorage
    }
  )
);

export default useUserStore;
