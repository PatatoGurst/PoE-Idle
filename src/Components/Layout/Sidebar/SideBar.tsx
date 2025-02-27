import { Link } from 'react-router-dom';
import './SideBar.css';
import { ROUTES } from '../../Constants/Routes';

function SideBar() {
  return (
    <div id="side">
      <nav>
        <ul>
          <li className="link-menu">
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li className="link-menu">
            <Link to={ROUTES.map}>Map</Link>
          </li>
          <li className="link-menu">
            <Link to={ROUTES.page1}>Page 1</Link>
          </li>
          <li className="link-menu">
            <Link to={ROUTES.inventory}>Inventory</Link>
          </li>
          <li className="link-menu">
            <Link to={ROUTES.options}>Options</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
