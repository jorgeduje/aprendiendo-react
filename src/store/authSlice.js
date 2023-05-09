

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   accessToken : "",
   user: {},
   isLogged: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state, action)=>{
            state.isLogged = true
            state.user = action.payload
        },
        register: (state, action)=>{} ,
        logout: (state, action)=>{} ,
    }
})

export const {login, register, logout}  = authSlice.actions

export default authSlice.reducer