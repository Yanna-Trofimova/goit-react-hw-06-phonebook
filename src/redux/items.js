import { createSlice, nanoid } from '@reduxjs/toolkit'

// const tasksInitialState = [
//   {id: '0', name:'Yana', number:'0990021282' },
//   { id: '1',name:'Ann', number:'0990021255' },
// ];


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        newContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    }
                }
            }
        },
        removeContact(state, action) {
          return  state.filter(contact => contact.id !== action.payload)
        }
    },
})


export const { newContact, removeContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;