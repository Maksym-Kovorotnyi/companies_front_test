import { createSlice } from "@reduxjs/toolkit";
import {
  companyDetail,
  deleteCompany,
  getCompanies,
  searchByName,
} from "./companiesOperations";

const companiesInitialState = {
  companies: null,
  companyDetail: null,
  isModal: false,
  isLoading: false,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState: companiesInitialState,
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompanies.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCompanies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.companies = payload;
    });

    builder.addCase(companyDetail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.companyDetail = payload;
    });
    builder.addCase(companyDetail.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(companyDetail.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(searchByName.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.companies = payload;
    });
    builder.addCase(searchByName.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(searchByName.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteCompany.fulfilled, (state) => {
      state.isLoading = false;
      state.companyDetail = null;
    });
    builder.addCase(deleteCompany.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteCompany.pending, (state) => {
      state.isLoading = true;
    });
  },
  reducers: {
    toggleModal: (state) => {
      state.isModal = !state.isModal;
    },
    toggleCompanyDetail: (state) => {
      state.companyDetail = null;
    },
  },
});

export const { toggleModal, toggleCompanyDetail } = companiesSlice.actions;
export const companiesReducer = companiesSlice.reducer;
