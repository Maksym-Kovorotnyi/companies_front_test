import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const createCompany = createAsyncThunk(
  "companies/create",
  async (body, { rejectWithValue, getState }) => {
    const { accessToken } = getState().auth;
    try {
      const response = await axios.post("companies/create", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCompanies = createAsyncThunk(
  "companies",
  async (_, { rejectWithValue, getState }) => {
    const { accessToken } = getState().auth;
    try {
      const response = await axios.get("companies", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const companyDetail = createAsyncThunk(
  "companies/detail",
  async (id, { rejectWithValue, getState }) => {
    const { accessToken } = getState().auth;
    try {
      const response = await axios.get(`companies/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchByName = createAsyncThunk(
  "companies/",
  async (name, { rejectWithValue, getState }) => {
    const { accessToken } = getState().auth;
    try {
      const response = await axios.get(`companies/${name}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "companies/delete",
  async (id, { rejectWithValue, getState }) => {
    const { accessToken } = getState().auth;
    try {
      const response = await axios.delete(`companies/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
