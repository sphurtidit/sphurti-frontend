import {create} from 'zustand';

const useInfoStore = create((set) => ({
    message: null,
    type: null,
    setInfo:(message, type) => set({message, type}),
    clearInfo: () => set({message: null, type: null})
}));

export default useInfoStore;