import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIng: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async() => {
    try {
      const res = await axiosInstance.get("/auth/check")

      set({authUser:res.data})
    } catch (error) {
      console.log("Error in checkAuth:", error)
      set({authUser:null})
    } finally {
      set({isCheckingAuth:false})
    }
  },

  signup: async(data) => {
    set({ isSigningUp: true })
    try {
      const res = await axiosInstance.post("/auth/signup", data)
      set({ authUser: res.data })
      toast.success("Account created successfully")
    } catch (error) {
      if (error && typeof error === "object" && "response" in error && error.response && typeof error.response === "object" && "data" in error.response && error.response.data && typeof error.response.data === "object" && "message" in error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during logout");
      }
    } finally {
      set({ isSigningUp: false})
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout")
      set({ authUser: null})
      toast.success("Logged out successfully")
    } catch (error) {
      toast.error((error)?.response?.data?.message || "An error occurred during logout");
    }
  }
}))