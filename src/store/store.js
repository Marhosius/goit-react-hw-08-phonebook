import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slice";
import { authorizationReducer } from "./Authorization/AuthorizationSlice";
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['access_token']
}

const persistedAuthorizationReducer = persistReducer(persistConfig, authorizationReducer)

const combinedReducer = {
    authorization: persistedAuthorizationReducer,
    contacts: contactsReducer
}

export const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)