export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height="150px"/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/oop.jpg" width="100%" height="150px" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS1000 OOP
                  </h5>
                  <p className="card-text">
                  Object-Oriented Programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/algorithms.jpg" width="100%" height="150px" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS2000 Algos
                  </h5>
                  <p className="card-text">
                  Data Structures and Algorithms
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/databases.jpg" width="100%" height="150px" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS3000 DBMS
                  </h5>
                  <p className="card-text">
                  Database Management Systems
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/networks.jpg" width="100%" height="150px" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS4000 Networks
                  </h5>
                  <p className="card-text">
                  Computer Networks
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>
          
          
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/security.jpg" width="100%" height="150px" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS5000 Cyber Security
                  </h5>
                  <p className="card-text">
                  Cyber Security
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/ai.jpg" width="100%" height="150px" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS6000 AI
                  </h5>
                  <p className="card-text">
                  Artificial Intelligence
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Home">
                <img src="/images/hci.jpg" width="100%" height="150px" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                  CS7000 HCI
                  </h5>
                  <p className="card-text">
                  Human-Computer Interaction
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
