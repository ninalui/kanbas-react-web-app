
import { LiaFileImportSolid } from "react-icons/lia";
import { LiaFileExportSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { FaGear } from "react-icons/fa6";
import { LuFilter } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import GradesTable from "./GradesTable";

export default function Grades() {
  return (
    <div>

      <div className="d-flex justify-content-end pb-3">
        <div className="p-1">
          <button className="btn btn-secondary">
            <LiaFileImportSolid className="fs-4" /> Import
          </button></div>
        <div className="dropdown p-1">
          <button className="btn btn-secondary" type="button">
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
              <option value="Student 1">Student 1</option>
              <option value="Student 2">Student 2</option>
              <option value="Student 3">Student 3</option>
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
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
            </select>
          </div>
        </div>
      </div>

      <button className="btn btn-secondary"> <LuFilter /> Apply Filters </button>

      <GradesTable />
    </div>

  );
}
