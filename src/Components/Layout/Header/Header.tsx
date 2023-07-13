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
        <a href='/'>Home</a> | <a href='page1'>Page 1</a> | <a href='page2'>Page 2</a>
      </div>
    </div>
  );
}

export default Header;
