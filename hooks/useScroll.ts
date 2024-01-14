import { create } from "zustand";

interface ScrollStoreState {
  scrollToTop: () => void;
}

const useScrollStore = create<ScrollStoreState>((set) => ({
  scrollToTop: () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
}));

export default useScrollStore;
