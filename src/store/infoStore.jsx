import { create } from 'zustand';
import { toast } from 'react-toastify';

const useInfoStore = create((set) => ({
  message: null,
  type: null,
  
  setInfo: (message, type) => {
    set({ message, type });

    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else {
      toast.info(message);
    }
  },

  clearInfo: () => set({ message: null, type: null })
}));

export default useInfoStore;
