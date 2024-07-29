import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { addAssignment } from "./reducer";

export default function AssignmentControls(
  { addAssignment }:
    { addAssignment: () => void }
) {
  return (
    <div className="text-nowrap d-flex justify-content-start align-items-center pb-1 mb-3">
      <div className="input-group me-5">
        <span className="input-group-text bg-white border-end-0">
          <CiSearch className="me-2 fs-3" />
        </span>
        <input
          className="form-control border-start-0"
          id="wd-assignment-search"
          type="text"
          placeholder="Search..." />
      </div>

      <button id="wd-add-assignment-group" className="btn btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      
      <button id="wd-add-assignment" className="btn btn-danger me-1 float-end" onClick={(addAssignment)}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

    </div>

  );
}