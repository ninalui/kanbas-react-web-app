import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function AssignmentControlButtons(
  { assignmentId, deleteAssignment }:
    {
      assignmentId: string; deleteAssignment: (assignmentId: string) => void;
    }
) {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((assignment: any) => assignment._id === assignmentId);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteAssignment(assignmentId);
    setShowModal(false);
  };

  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaTrash
        className="text-danger ms-4 fs-5"
        onClick={() => {
          setShowModal(true);
        }} />
      <IoEllipsisVertical className="ms-3 fs-4" />

      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Delete</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete {assignment.title}?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
