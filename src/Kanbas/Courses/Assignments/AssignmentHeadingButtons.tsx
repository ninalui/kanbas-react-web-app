import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import "./styles.css"

export default function AssignmentHeadingButtons() {
  return (
    <div className="float-end">
      <span className="p-2 fs-6 border border-secondary custom-corners">40% of Total</span>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
