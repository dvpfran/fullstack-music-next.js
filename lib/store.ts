import { createStore, action } from "easy-peasy";

export const store = createStore({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state: any, payload) => {
    console.log("changeActiveSongs", payload);
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: any, payload) => {
    console.log("changeActiveSong", payload);
    state.activeSong = payload;
  }),
});
