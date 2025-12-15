import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "@config";
import type { ILocationStore } from "@types";

const useLocationStore = create<ILocationStore>()(
  immer((set) => ({
    activeLocation: locations.work,
    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = locations.work;
      }),
  }))
);

export default useLocationStore;
