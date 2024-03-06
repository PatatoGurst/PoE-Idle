import { Link } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  return (
    <div id='side'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/map'>Map</Link>
          </li>
          <li>
            <Link to='/page1'>Page 1</Link>
          </li>
          <li>
            <Link to='/inventory'>Inventory</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
