
import exclamation from "../assets/exclamation.png";

const DeleteExpenseModal = ({ closeDeleteModal, handleConfirmDelete } ) => {


  return (
    <>
      <div className="opacity" onClick={closeDeleteModal}></div>
      <div className="delete-modal-container">
        <div className="delete-modal-img-container">
          <img src={exclamation} alt="" />
        </div>
        <div className="delete-modal-content">
          <h2>Are you Sure?</h2>
          <p>You wont be able to revert this!</p>
          <div className="delete-modal-button">
            <button
              className="submit-button"
              onClick={() => handleConfirmDelete()}
            >
              Delete
            </button>
            <button
              className="submit-button"
              style={{ backgroundColor: "#ff2146" }}
              onClick={closeDeleteModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default DeleteExpenseModal;
