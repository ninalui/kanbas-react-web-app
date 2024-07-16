import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentHeadingButtons from "./AssignmentHeadingButtons";

export default function AssignmentHeading() {
  return (
    <div>
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-0 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary ">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-4" />
            ASSIGNMENTS
            <AssignmentHeadingButtons />
          </div>
        </li>
      </ul>
    </div>


  );
}
