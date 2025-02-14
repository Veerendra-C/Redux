import { create } from "zustand";

const useStore = create((set,get) => ({
  Username: "",
  setUsername: (e) => set({ Username: e.target.value }),
  Password: "",
  setPassword: (e) => set({ Password: e.target.value }),
  ToggleBtn: false,
  setToggleBtn: () => {
    const { Username, Password } = get();
    if (!Username || !Password) {
      get().seterrormsg(alert("Fill all the fields"));
      set({ Username: "", Password: "" });
    } else {
      set((state) => ({ ToggleBtn: !state.ToggleBtn }));
    }
  },
}));

export default useStore;
