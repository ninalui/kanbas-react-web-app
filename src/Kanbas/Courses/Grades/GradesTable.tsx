import "./styles.css";


export default function Grades() {

  const data = [
    { name: "Jane Adams", a1: "100%", a2: "96.67%", a3: "92.18%", a4: "66.22%" },
    { name: "Christina Allen", a1: "100%", a2: "100%", a3: "100%", a4: "100%" },
    { name: "Samreen Ansari", a1: "100%", a2: "100%", a3: "100%", a4: "100%" },
    { name: "Han Bao", a1: "100%", a2: "100%", a3: "88.03%", a4: "98.99%" },
    { name: "Mahi Sai Srinivas Bobbili", a1: "100%", a2: "96.67%", a3: "100%", a4: "100%" },
    { name: "Siran Cao", a1: "100%", a2: "100%", a3: "100%", a4: "100%" },
  ]

  return (
    <div className="table-responsive pt-3">
      <table className="table table-striped table-bordered text-center textwrap-none">
        <thead className="table-secondary">
          <tr>
            <th className="table-align-left">Student Name</th>
            <td>A1 SETUP <br /> Out of 100</td>
            <td>A2 HTML <br /> Out of 100</td>
            <td>A3 CSS <br /> Out of 100</td>
            <td>A4 BOOTSTRAP <br /> Out of 100</td>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {data.map((student, index) => (
            <tr key={index}>
              <td className="table-align-left text-danger col-4">{student.name}</td>
              <td className="col-2">{student.a1}</td>
              <td className="col-2">{student.a2}</td>
              <td className="col-2"><input type="text" className="form-control border-0 bg-transparent text-center" defaultValue={student.a3} /></td>
              <td className="col-2">{student.a4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}