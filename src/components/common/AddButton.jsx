import React from "react";

const AddButton = ({ image, buttonname, handelModalChange }) => {
  return (
    <button className="add-button" onClick={handelModalChange}>
    {image ? <img src={image} alt="" /> : null}
    {buttonname}
  </button>
  );
};

export default AddButton;
