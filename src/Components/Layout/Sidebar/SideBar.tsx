import { Link } from 'react-router-dom';
import './SideBar.css';

interface SideBarInterface {
  isOpened: boolean;
}

function SideBar({ isOpened }: SideBarInterface) {
  return (
    <aside className={`${isOpened ? 'opened' : 'closed'} drawer`}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page1'>Page 1</Link>
          </li>
          <li>
            <Link to='/page2'>Page 2</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
