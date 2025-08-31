import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const { id, message, type = "info", duration = 5000 } = action.payload;
      state.notifications.push({
        id,
        message,
        type,
        duration,
        timestamp: Date.now(),
      });
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, clearAllNotifications } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
