import { create } from "zustand";

interface State {
  counter: number;
}

interface Action {
  increaseCounter: () => void;
}

export const useCounter = create<State & Action>((set) => ({
  counter: 0,
  increaseCounter: () => {
    set((state) => ({
        counter: state.counter + 1,
    }));
  },
}));
