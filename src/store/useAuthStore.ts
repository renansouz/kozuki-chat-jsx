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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signup: async(data: any) => {
    set({ isSigningUp: true })
    try {
      const res = await axiosInstance.post("/auth/signup", data)
      set({ authUser: res.data })
      toast.success("Account created successfully")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message)
    } finally {
      set({ isSigningUp: false})
    }
  }
}))