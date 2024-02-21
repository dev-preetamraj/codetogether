import { createSlice } from "@reduxjs/toolkit";

export interface RoomNavSliceState {
  terminal: boolean;
  whiteBoard: boolean;
  activeUser: boolean;
  chat: boolean;
}

const initialState: RoomNavSliceState = {
  terminal: true,
  whiteBoard: false,
  activeUser: false,
  chat: false,
};

export const roomNavSlice = createSlice({
  name: "roomNav",
  initialState,
  reducers: {
    activateTerminal: (state) => {
      state.terminal = true;
    },
    deactivateTerminal: (state) => {
      state.terminal = false;
    },

    activateWhiteboard: (state) => {
      state.whiteBoard = true;
    },
    deactivateWhiteboard: (state) => {
      state.whiteBoard = false;
    },

    activateActiveUser: (state) => {
      state.activeUser = false;
    },
    deactivateActiveUser: (state) => {
      state.activeUser = true;
    },

    activateChat: (state) => {
      state.chat = true;
    },
    deactivateChat: (state) => {
      state.chat = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  activateTerminal,
  deactivateTerminal,
  activateWhiteboard,
  deactivateWhiteboard,
  activateActiveUser,
  deactivateActiveUser,
  activateChat,
  deactivateChat,
} = roomNavSlice.actions;

export default roomNavSlice.reducer;
