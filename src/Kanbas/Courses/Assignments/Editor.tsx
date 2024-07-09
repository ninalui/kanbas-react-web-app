export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={40} rows={10}>
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify.

        The landing page should include the following:

        Your full name and section
        Links to each of the lab assignments
        Link to the Kanbas application
        Links to all relevant source code repositories

        The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" rowSpan={2}>
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <tr>
            <td>
              <select id="wd-submission-type">
                <option selected value="Online">Online</option>
                <option value="On Paper">On Paper</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              Online Entry Options <br />
              <input type="checkbox" id="wd-text-entry" name="text-entry" value="Text Entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />
              <input type="checkbox" id="wd-website-url" name="website-url" value="Website URL" />
              <label htmlFor="wd-website-url">Website URL</label><br />
              <input type="checkbox" id="wd-media-recordings" name="media-recordings" value="Media Recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              <input type="checkbox" id="wd-student-annotation" name="student-annotation" value="Student Annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              <input type="checkbox" id="wd-file-upload" name="file-upload" value="File Upload" />
              <label htmlFor="wd-file-upload">File Uploads</label><br />
            </td>
          </tr>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" rowSpan={7}>
            Assign
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
        </tr>
        <tr>
          <td> 
            <input id="wd-assign-to" value="Everyone" /> 
          </td>
        </tr>
        <br />
        <tr>
          <td> 
            <label htmlFor="wd-due-date">Due</label> 
          </td>
        </tr>
        <tr>
          <td>
            <input type="date"
              id="wd-due-date"
              value="2024-05-13" />
          </td>
        </tr>
        <br />
        <tr>
          <td> 
            <table>
            <tr>
              <td>
                <label htmlFor="wd-available-from">Available From</label>
              </td>
              <td>
                <label htmlFor="wd-available-until">Until</label>
              </td>
            </tr>
            <tr>
              <td>
                <input type="date"
                  id="wd-available-from"
                  value="2024-05-06" />
              </td>
              <td>
                <input type="date"
                  id="wd-available-until"
                  value="2024-05-20" />
              </td>
            </tr>
          </table> </td>
        </tr>
        <tr>
          <td colSpan={3}> <hr /> </td>
        </tr>
        <tr>
          <td colSpan={3} align="right">
            <button id="wd-cancel">Cancel</button>
            <button id="wd-save">Save</button>
          </td>
        </tr>
      </table>
    </div >
  );
}


