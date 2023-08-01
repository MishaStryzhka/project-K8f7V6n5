import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-be7v6c5s.onrender.com/';
// const setAuthHeader = token => {
//   axios.defaults.headers.common['Authorization'] = `${token}`;
// };

export const fetchPets = createAsyncThunk(
  'pets/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/pets/');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPetDel = createAsyncThunk(
  'pets/deletePet',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`api/pets/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPet = createAsyncThunk('api/pets/', async (pet, thunkAPI) => {
  console.log('pet', pet);
  try {
    const response = await axios.post(`api/pets/`, pet);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
