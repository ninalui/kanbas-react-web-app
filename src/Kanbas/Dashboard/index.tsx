export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
  
        <div className="wd-dashboard-course">
          <img src="/images/oop.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1000/Home">
              CS1000 OOP
            </a>
            <p className="wd-dashboard-course-title">
              Object-Oriented Programming
            </p>
            <a href="#/Kanbas/Courses/1000/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/algorithms.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/2000/Home">
              CS2000 Algos
            </a>
            <p className="wd-dashboard-course-title">
              Data Structures and Algorithms
            </p>
            <a href="#/Kanbas/Courses/2000/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/databases.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/3000/Home">
              CS3000 DBMS
            </a>
            <p className="wd-dashboard-course-title">
              Database Management Systems
            </p>
            <a href="#/Kanbas/Courses/3000/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/networks.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/4000/Home">
              Cs4000 Computer Networks
            </a>
            <p className="wd-dashboard-course-title">
              Computer Networks
            </p>
            <a href="#/Kanbas/Courses/4000/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/security.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5000/Home">
              CS5000 Cyber Security
            </a>
            <p className="wd-dashboard-course-title">
              Cyber Security
            </p>
            <a href="#/Kanbas/Courses/5000/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/ai.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/6000/Home">
              CS6000 AI
            </a>
            <p className="wd-dashboard-course-title">
              Artificial Intelligence
            </p>
            <a href="#/Kanbas/Courses/6000/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/hci.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/7000/Home">
              CS7000 HCI
            </a>
            <p className="wd-dashboard-course-title">
              Human-Computer Interaction
            </p>
            <a href="#/Kanbas/Courses/7000/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
);}
