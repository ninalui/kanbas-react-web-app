import "./index.css";
import { BsGripVertical } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeading from "./AssignmentHeading";
import AssignmentControlButtons from "./AssignmentControlButtons";



export default function Assignments() {
  return (
    <div id="wd-assignments pt-4">

      <AssignmentControls />
      <AssignmentHeading />

      <ul id="wd-assignment-list" className="list-group rounded-0 border-left-green">
        <li className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-start me-3">
            <BsGripVertical className="me-3 fs-3" />
            <FaRegPenToSquare className="text-success me-3 fs-3" />
          </div>

          <div className="flex-grow-1 me-3">
            <div>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"> A1 </a>
            </div>
            <div>
              <span className="text-danger">Multiple Modules</span> |
              <b> Not available until</b> May 10 at 12:00am |
              <b> Due</b> May 15 at 11:59pm | 100 pts
            </div>
          </div>

          <div className="col-2 d-flex justify-content-end">
            <AssignmentControlButtons />
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-start me-3">
            <BsGripVertical className="me-3 fs-3" />
            <FaRegPenToSquare className="text-success me-3 fs-3" />
          </div>

          <div className="flex-grow-1 me-3">
            <div>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"> A2 </a>
            </div>
            <div>
              <span className="text-danger">Multiple Modules</span> |
              <b> Not available until</b> May 15 at 12:00am |
              <b> Due</b> May 20 at 11:59pm | 100 pts
            </div>
          </div>

          <div className="col-2 d-flex justify-content-end">
            <AssignmentControlButtons />
          </div>

        </li>

        <li className="wd-assignment-list-item list-group-item d-flex align-items-center p-3">
          <div className="d-flex align-items-center justify-content-start me-3">
            <BsGripVertical className="me-3 fs-3" />
            <FaRegPenToSquare className="text-success me-3 fs-3" />
          </div>

          <div className="flex-grow-1 me-3">
            <div>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"> A3 </a>
            </div>
            <div>
              <span className="text-danger">Multiple Modules</span> |
              <b> Not available until</b> May 20 at 12:00am |
              <b> Due</b> May 25 at 11:59pm | 100 pts
            </div>
          </div>

          <div className="col-2 d-flex justify-content-end">
            <AssignmentControlButtons />
          </div>
        </li>
      </ul>

    </div>
  );
}