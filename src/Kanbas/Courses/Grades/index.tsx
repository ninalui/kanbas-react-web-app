
import { LiaFileImportSolid } from "react-icons/lia";
import { LiaFileExportSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { LuFilter } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import GradesTable from "./GradesTable";
import { assignments, enrollments } from "../../Database";
import { useParams } from "react-router";


export default function Grades() {
  const { cid } = useParams();
  return (
    <div>

      <div className="d-flex justify-content-end pb-3">
        <div className="p-1">
          <button className="btn btn-secondary">
            <LiaFileImportSolid className="fs-4" /> Import
          </button></div>
        <div className="dropdown p-1">
          <button className="btn  btn-secondary" type="button">
            <LiaFileExportSolid className="fs-4"/> Export <SlArrowDown className="fs-6 ms-1"/>
          </button>
        </div>
        <div className="p-1">
          <button className="btn btn-secondary">
            <FaGear />
          </button>
        </div>
      </div>

      <div className="row pb-3">
        <div className="col-md-6">
          <label id="wd-search-students" className="form-label"><b>Student Names</b></label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <CiSearch className="fs-3" />
            </span>
            <select className="form-select border-start-0">
              <option selected>Search Students</option>
              {enrollments
                .filter((enrollment: any) => enrollment.course === cid)
                .map((enrollment: any) => (
                  <option value={enrollment.user}>{enrollment.user}</option> )) } 
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <label id="wd-search-assignments" className="form-label"><b>Assignment Names</b></label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <CiSearch className="fs-3" />
            </span>
            <select className="form-select border-start-0">
              <option selected>Search Assignments</option>
              {assignments.filter((assignment: any) => assignment.course === cid) 
                .map((assignment: any) => ( <option value={assignment._id}>{assignment.title}</option> )) }
            </select>
          </div>
        </div>
      </div>

      <button className="btn btn-secondary"> <LuFilter /> Apply Filters </button>

      <GradesTable />
    </div>

  );
}
