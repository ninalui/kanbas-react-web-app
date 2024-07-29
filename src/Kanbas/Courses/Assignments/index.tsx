import "./index.css";
import { BsGripVertical } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeading from "./AssignmentHeading";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { addAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div id="wd-assignments pt-4">

      <AssignmentControls addAssignment={() => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/New`);
      }}/>

      <AssignmentHeading />

      <ul id="wd-assignment-list" className="list-group rounded-0 border-left-green">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center">
              <div className="d-flex align-items-center justify-content-start me-3">
                <BsGripVertical className="me-3 fs-3" />
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                <FaRegPenToSquare className="text-success me-3 fs-3" /> </Link>
              </div>

              <div className="flex-grow-1 me-3">
                <div>

                  <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                    {assignment.title} </Link>
                </div>
                <div>
                  <span className="text-danger">Multiple Modules</span> |
                  <b> Not available until</b> {assignment.availableFrom} |
                  <b> Due</b> {assignment.dueDate} | {assignment.points} pts
                </div>
              </div>

              <div className="col-2 d-flex justify-content-end">
                <AssignmentControlButtons
                  assignmentId={assignment._id}
                  deleteAssignment={(assignmentId) => {
                    dispatch(deleteAssignment(assignmentId));
                  }} />
              </div>
            </li>
          ))}
      </ul>

    </div>
  );
}