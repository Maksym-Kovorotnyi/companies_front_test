import React from "react";
import { useDispatch } from "react-redux";
import { updateListener } from "../../redux/companies/companiesSlice";

function CompanyUpdateBtn() {
  const dispatch = useDispatch();
  const handleUpdateForm = () => {
    dispatch(updateListener(true));
  };
  return (
    <>
      <button type="button" onClick={handleUpdateForm}>
        Change company information
      </button>
    </>
  );
}

export default CompanyUpdateBtn;
