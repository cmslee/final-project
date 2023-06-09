import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <nav>
      <Link to="/entries">SFX List</Link>
      &nbsp; | &nbsp;
      <Link to="/entries/new">Create New Entry</Link>
      &nbsp; | &nbsp; 
      <span>Welcome, {user.name}</span>{" "}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
