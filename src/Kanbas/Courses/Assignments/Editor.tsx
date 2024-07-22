import { RxCross2 } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const { aid } = useParams();
  const assignments = db.assignments

  return (
    <div id="wd-assignments-editor">
      
        {assignments
        .filter((assignment: any) => assignment._id === aid)
        .map((assignment: any) => (
          <form>
          
          <div className="form-group pb-3">
            <label htmlFor="wd-name" className="pb-1">Assignment Name</label>
            <input id="wd-name" className="form-control" type="text" value={assignment.title} />
          </div><div className="form-group pb-3">
              <div id="wd-description" className="form-control" contentEditable={true} role="textbox" aria-multiline={true}>
                {assignment.description}
              </div>
            </div>
        
        <div className="form-group row pb-3">
          <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">Points</label>
          <div className="col-sm-9">
            <input id="wd-points" className="form-control" type="text" placeholder={assignment.points} />
          </div>
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">Assignment Group</label>
          <div className="col-sm-9">
            <select id="wd-group" className="form-select">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </div>
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label text-end">Display Grade as</label>
          <div className="col-sm-9">
            <select id="wd-display-grade-as" className="form-select">
              <option selected value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </select>
          </div>
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label text-end">Submission Type</label>

          <div className="col-sm-9">
            <div className="border p-3">
              <div>
                <select id="wd-submission-type" className="form-select mw-100">
                  <option selected value="Online">Online</option>
                  <option value="On Paper">On Paper</option>
                </select>
              </div>
              <p className="pt-3"><b>Online Entry Options</b></p>
              <div className="form-check">
                <div className="pb-3">
                  <input id="wd-text-entry" className="form-check-input" type="checkbox" name="text-entry" value="Text Entry" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="pb-3">
                  <input id="wd-website-url" className="form-check-input" type="checkbox" name="text-entry" value="Text Entry" />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>
                <div className="pb-3">
                  <input id="wd-media-recordings" className="form-check-input" type="checkbox" name="text-entry" value="Text Entry" />
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="pb-3">
                  <input id="wd-student-annotation" className="form-check-input" type="checkbox" name="text-entry" value="Text Entry" />
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="pb-3">
                  <input id="wd-file-upload" className="form-check-input" type="checkbox" name="text-entry" value="Text Entry" />
                  <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label text-end">Assign</label>
          <div className="col-sm-9">
            <div className="border p-3">
              <div className="pb-3">
                <label htmlFor="wd-assign-to" className="form-check-label"><b>Assign to</b></label>
                <div className="input-group">
                  <input id="wd-assign-to" className="form-control border-start-0" type="text" placeholder="" />
                </div>
              </div>

              <div className="pb-3">
                <label htmlFor="wd-due-date" className="form-check-label"><b>Due</b></label>
                <div className="input-group">
                  <input id="wd-due-date" className="form-control" type="text" defaultValue={`${assignment.dueDate}, ${assignment.dueTime}`} />
                  <span className="input-group-text"><FaRegCalendarAlt /></span>
                </div>
              </div>

              <div className="row">
                <div className="col pb-3">
                  <label htmlFor="wd-available-from" className="form-check-label"><b>Available from</b></label>
                  <div className="input-group">
                    <input id="wd-available-from" className="form-control" type="text" defaultValue={`${assignment.availableFromDate}, ${assignment.availableFromTime}`} />
                    <span className="input-group-text"><FaRegCalendarAlt /></span>
                  </div>
                </div>

                <div className="col pb-3">
                  <label htmlFor="wd-available-until" className="form-check-label"><b>Until</b></label>
                  <div className="input-group">
                    <input id="wd-available-until" className="form-control" type="text" />
                    <span className="input-group-text"><FaRegCalendarAlt /></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div> 
         </form> ))} 
     
      <div className="float-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-1">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger me-1">Save</Link>
      </div>

    </div >
  );
}


