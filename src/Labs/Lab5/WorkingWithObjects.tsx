import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: 1, name: "NodeJS Module",
    description: "Learn how to create a NodeJS server with ExpressJS",
    course: "WD100",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-module" className="btn btn-primary"
        href={`${MODULE_API_URL}`}>
        Get Module
      </a><hr />

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-3"
        href={`${ASSIGNMENT_API_URL}/title`}>
        Get Assignment Title
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a><hr />

      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Assignment Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })} />
      <hr />
      <a id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <input className="form-control w-75" id="wd-module-name"
        value={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })} />
      <hr />

      <a id="wd-update-assignment-score" className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a>
      <input className="form-control w-75" id="wd-assignment-score"
        value={assignment.score} type="number" onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })} />
      <hr />

      <div className="d-flex align-items-center">
        <div className="form-check">
          <input className="form-check-input" id="wd-assignment-completed"
            type="checkbox" checked={assignment.completed} 
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
          <label htmlFor="wd-assignment-completed" className="form-check-label"> Completed </label>
        </div>
        <a id="wd-update-assignment-completed" className="btn btn-primary ms-auto "
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Assignment Completed
        </a>

      </div>
      <hr />

      <div className="d-flex align-items-start">
        <textarea className="form-control me-3" id="wd-module-description"
          rows={3}
          value={module.description} onChange={(e) =>
            setModule({ ...module, description: e.target.value })} />

        <a id="wd-update-module-description" className="btn btn-primary float-end ms-2"
          href={`${MODULE_API_URL}/description/${module.description}`}>
          Update Module Description
        </a>
      </div>
      <hr />
    </div>
  );
}
