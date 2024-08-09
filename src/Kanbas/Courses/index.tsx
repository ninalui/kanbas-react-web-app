import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import New from "./Assignments/New";
import Grades from "./Grades";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/table";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}  &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="/Assignments" element={<Assignments />} />
            <Route path="/Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="/Assignments/New" element={<New />} />
            <Route path="/Piazza" element={<h2>Piazza</h2>} />
            <Route path="/Zoom" element={<h2>Zoom</h2>} />
            <Route path="/Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="/Grades" element={<Grades />} />
            <Route path="/People" element={<PeopleTable />} />
            <Route path="/People/:uid" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
