import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66e73f2b17055714e58bd502.mockapi.io/';

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchContacts',
//     async (_, {rejectWithValue }) => {
//         try {
//             const response = await axios.get('/contacts');
//             return response.data;

//         }catch (error ) {
//             return rejectWithValue( error.message);
//         }
//     }
// );


// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async ({ name, phone }, { rejectWithValue }) => {
//       try {
//         const response = await axios.post('/contacts', { name, phone });
//         return response.data;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );
  
//   export const deleteContact = createAsyncThunk(
//     'contacts/deleteContact',
//     async (contactId, { rejectWithValue }) => {
//       try {
//         const response = await axios.delete(`/contacts/${contactId}`);
//         return response.data;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue}) => {
    try {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
 async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);