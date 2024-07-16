import { RxCross2 } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form>
        <div className="form-group pb-3">
          <label htmlFor="wd-name" className="pb-1">Assignment Name</label>
          <input id="wd-name" className="form-control" type="text" value="A1" />
        </div>
        <div className="form-group pb-3">
          <div id="wd-description" className="form-control" contentEditable={true} role="textbox" aria-multiline={true}>
            <p>The assignment is <span className="text-danger">available online</span> </p>
            <p>Submit a link to the landing page of your Web application running on Netlify. </p>

            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section </li>
              <li> Links to each of the lab assignments </li>
              <li> Link to the Kanbas application </li>
              <li> Links to all relevant source code repositories </li>
            </ul>

            The Kanbas application should include a link to navigate back to the landing page
          </div>
        </div>

        <div className="form-group row pb-3">
          <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">Points</label>
          <div className="col-sm-9">
            <input id="wd-points" className="form-control" type="text" placeholder="100" />
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

                  <div className="input-group-prepend p-1 border border-end-0">
                    <button className="btn btn-secondary">Everyone <RxCross2 /></button>
                  </div>

                  <input id="wd-assign-to" className="form-control border-start-0" type="text" placeholder="" />
                </div>
              </div>

              <div className="pb-3">
                <label htmlFor="wd-due-date" className="form-check-label"><b>Due</b></label>
                <div className="input-group">
                  <input id="wd-due-date" className="form-control" type="text" defaultValue="May 13, 2024, 11:59 PM" />
                  <span className="input-group-text"><FaRegCalendarAlt /></span>
                </div>
              </div>

              <div className="row">
                <div className="col pb-3">
                  <label htmlFor="wd-available-from" className="form-check-label"><b>Available from</b></label>
                  <div className="input-group">
                    <input id="wd-available-from" className="form-control" type="text" defaultValue="May 6, 2024, 12:00 AM" />
                    <span className="input-group-text"><FaRegCalendarAlt /></span>
                  </div>
                </div>

                <div className="col pb-3">
                  <label htmlFor="wd-available-until" className="form-check-label"><b>Until</b></label>
                  <div className="input-group">
                    <input id="wd-available-until" className="form-control" type="text" defaultValue="May 13, 2024, 11:59 PM" />
                    <span className="input-group-text"><FaRegCalendarAlt /></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>



        <div className="float-end">
          <button id="wd-add-assignment" className="btn btn-lg btn-secondary me-1">
            Cancel
          </button>
          <button id="wd-save" className="btn btn-lg btn-danger me-1">
            Save
          </button>
        </div>

      </form>
    </div >
  );
}


