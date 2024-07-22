import { useLocation, useParams } from "react-router";
import "./index.css";
import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 me-5">
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Courses/${cid}/${link}`} className={`list-group-item border border-0 ${link === pathname.split("/")[4] ? 'active' : 'text-danger'}`}>
          {link} 
        </Link>
      ))}
    </div>
  );
}
