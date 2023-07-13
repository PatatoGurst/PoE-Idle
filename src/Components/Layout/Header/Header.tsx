import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import './Header.css';

interface HeaderInterface {
  sideBarIsOpened: boolean;
  toggleSideBar: () => void;
}

function Header({ sideBarIsOpened, toggleSideBar }: HeaderInterface) {
  return (
    <div className='header'>
      <div className='icon' onClick={() => toggleSideBar()}>
        {sideBarIsOpened ? <ChevronLeftIcon /> : <MenuIcon />}
      </div>
      <div className='header-title'>
        <h3>Path of Ex-Idle</h3>
        <h4>An idle game based on Path of Exile</h4>
      </div>
    </div>
  );
}

export default Header;
