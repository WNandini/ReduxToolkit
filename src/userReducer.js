import { createSlice, current } from "@reduxjs/toolkit";
import { userData } from "./data";

const userSlice = createSlice({
    name: 'users',
    initialState: userData,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
            console.log('State',state)
        }, 
        deleteUser: (state, action) => {
            state.splice(state.findIndex(item => item.id === action.payload), 1)
        }
    }
})

export const {addUser} = userSlice.actions;
export const {deleteUser} = userSlice.actions;
export default userSlice.reducer;
 






















/* 
fetch('url')
.then((response) => response.json())
.then((data) => console.log('Data',data))



sendData = {
    method: 'POST',
    headers : { 'Content-Type': 'application/json'},
    body: json.stringify({
        'name': 'name'
    })
}
fetch('url')
.then((response) => response.json())
.then((data) => console.log('Data',data)




sendData = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json},
    body: json.stringify({
        ...item,
        'name': 'updateName'
    })
}
fetch('url')
.then((response) => response.json())
.then((data) => console.log('Data',data))




fetch('url',{
    method: 'DELETE
})
.then((response) => response.json())
.then((data) => console.log('Data',data))
*/




























