import { RxCross2 } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addAssignment } from "./reducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";

export default function New() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createAssignment = async (assignment: any) => {
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  };

  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    course: cid,
    points: "",
    dueDate: "",
    availableUntil: "",
    availableFrom: "",
    description: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  }

  const handleCreate = () => {
    createAssignment(assignment);
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-create">
      <form>

        <div className="form-group pb-3">
          <label htmlFor="wd-name" className="pb-1">Assignment Name</label>
          <input id="wd-name" className="form-control" name="title" type="text" placeholder="New Assignment Title" onChange={handleChange} />
        </div>
        <div className="form-group pb-3">
          <textarea id="wd-description" className="form-control" name="description" rows={5} placeholder="New Assignment Description" onChange={handleChange} />
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">Points</label>
          <div className="col-sm-9">
            <input id="wd-points" className="form-control" name="points" type="number" placeholder="100" onChange={handleChange} />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label text-end">Assign</label>
          <div className="col-sm-9">
            <div className="border p-3">
              <div className="pb-3">
                <label htmlFor="wd-due-date" className="form-check-label"><b>Due</b></label>
                <div className="input-group">
                  <input id="wd-due-date" className="form-control" name="dueDate" type="datetime-local" onChange={handleChange} />
                </div>
              </div>

              <div className="row">
                <div className="col pb-3">
                  <label htmlFor="wd-available-from" className="form-check-label"><b>Available from</b></label>
                  <div className="input-group">
                    <input id="wd-available-from" className="form-control" name="availableFrom" type="datetime-local" onChange={handleChange} />
                  </div>
                </div>

                <div className="col pb-3">
                  <label htmlFor="wd-available-until" className="form-check-label"><b>Until</b></label>
                  <div className="input-group">
                    <input id="wd-available-until" className="form-control" name="availableUntil" type="datetime-local" onChange={handleChange} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </form>

      <div className="float-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-1">Cancel</Link>
        <button className="btn btn-danger me-1"
          onClick={() => { handleCreate() }}>
          Save
        </button>
      </div>

    </div >
  );
}