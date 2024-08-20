import { Link } from "react-router-dom";

// TODO quizzes main page
// - only made to handle showing 1 quiz hardcoded for now

export default function Quizzes() {

  return (
    <div id="wd-quizzes">
      <h1>Quiz Questions</h1>
      <Link to = {`/Kanbas/Courses/66bae0b740fdc4f5ab6c4f74/Quizzes/66c462b06e14be90f2211e07`}> Q101 </Link>
    </div>
  );
}