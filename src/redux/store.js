import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../slicer/userSlicer"; // Adjust the path if needed
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Imports storage for persisting state

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer, // Use the correct name for your reducer
});

// Configure persist options
const persistConfig = {
  key: "root", // Key for storage
  version: 1, // Version of persisted storage
  storage, // Storage configuration using redux-persist's storage
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and export the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Pass persisted reducer to store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }),
});

// Export persistor for rehydration
export const persistor = persistStore(store);
