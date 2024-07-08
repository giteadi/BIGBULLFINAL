import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, itemId }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:6060/api/v1/auth/add-to-cart', {
        user_id: userId,
        item_id: itemId,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
