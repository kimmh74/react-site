import { Link, Outlet } from "react-router-dom";
import Day03_0811 from "./Day3_0811";
import Comment from "./Comment";

function Layout() {
  return (
    <div className="b">
      <h2>과제 목록</h2>
      {/* <Comment/> */}
{/* <Day03_0811/> */}

      <nav className="c">
        <ul>
      
          <li>
            <Link to="/react-site/0811">day3_0811과제</Link>
           
          </li>
          {/* <li>
            <Link to="/react-site/login">Login</Link>
          </li>
          <li>
            <Link to="/react-site/logout">Loout</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
export default Layout;