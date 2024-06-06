export default function Navbar() {
  return (
    <div className="page row">
      <nav className="navbar col-1">
        <ul>
          <li>
            <a href="#">
              <i className="fa-solid fa-graduation-cap"></i>
              <p>Yo Mama's University</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-circle-user"></i>
              <p>Profile</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-book-bookmark"></i>
              <p>Courses</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-regular fa-calendar-days"></i>
              <p>Schedule</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-circle-dollar-to-slot"></i>
              <p>Tuition</p>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-circle-question"></i>
              <p>Help</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
