import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@config";
import type { IWindowStore } from "@types";

const useWindowStore = create<IWindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const appWindow = state.windows[windowKey];
        if (!appWindow) return;
        appWindow.isOpen = true;
        appWindow.zIndex = state.nextZIndex;
        appWindow.data = data ?? appWindow.data;
        state.nextZIndex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const appWindow = state.windows[windowKey];
        if (!appWindow) return;
        appWindow.isOpen = false;
        appWindow.zIndex = INITIAL_Z_INDEX;
        appWindow.data = null;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const appWindow = state.windows[windowKey];
        if (!appWindow) return;
        appWindow.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;
