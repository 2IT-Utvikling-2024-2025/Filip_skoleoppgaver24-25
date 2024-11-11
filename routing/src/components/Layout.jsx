import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link
              className="nav-link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/about"
            >
              About
            </Link>
            <Link
              className="nav-link"
              to="/ClassList"
            >
              Class List
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
