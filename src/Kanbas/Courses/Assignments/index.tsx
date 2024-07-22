import "./index.css";
import { BsGripVertical } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeading from "./AssignmentHeading";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments =  db.assignments
  return (
    <div id="wd-assignments pt-4">

      <AssignmentControls />
      <AssignmentHeading />

      <ul id="wd-assignment-list" className="list-group rounded-0 border-left-green">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
          <li className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-start me-3">
              <BsGripVertical className="me-3 fs-3" />
              <FaRegPenToSquare className="text-success me-3 fs-3" />
            </div>

            <div className="flex-grow-1 me-3">
              <div>
                
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                {assignment.title} </Link>
              </div>
              <div>
                <span className="text-danger">Multiple Modules</span> |
                <b> Not available until</b> {assignment.availableFromDate} at {assignment.availableFromTime} |
                <b> Due</b> {assignment.dueDate} at {assignment.dueTime} | {assignment.points} pts
              </div>
            </div>

            <div className="col-2 d-flex justify-content-end">
              <AssignmentControlButtons />
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}