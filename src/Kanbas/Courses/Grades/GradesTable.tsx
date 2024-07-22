import "./styles.css";
import * as db from "../../Database/index";
import { useParams } from "react-router";


export default function Grades() {

  const { cid } = useParams();
  const enrollments = db.enrollments;
  const users = db.users;
  const grades = db.grades;
  const assignments = db.assignments;

  return (
    <div className="table-responsive pt-3">
      <table className="table table-striped table-bordered text-center textwrap-none">
        <thead className="table-secondary">
          <tr>
            <th className="table-align-left">Student Name</th>
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <td key={assignment.title}>{assignment.title} <br /> Out of {assignment.points} </td>
              ))}
          </tr>
        </thead>
        <tbody>
          {enrollments
            .filter((enrollment: any) => enrollment.course === cid)
            .map((enrollment: any) => (
              <tr key={enrollment._id}>
                {users 
                  .filter((user: any) => user._id === enrollment.user)
                  .map((user: any) => ( 
                    <td key={user._id} className="table-align-left text-danger">{user.firstName} {user.lastName}</td> 
                  ))}
                  
            {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <td key={assignment._id}>  
                      {grades
                        .filter((grade: any) => grade.assignment === assignment._id)
                        .filter((grade: any) => grade.student === enrollment.user)
                        .map((grade: any) => (
                          <div key={grade._id}>
                            <span>{grade.grade}</span>
                          </div>
                        ))}
                    </td>
                  ))}
              </tr>
            ))}

          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
