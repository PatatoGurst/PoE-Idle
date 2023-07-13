import './SideBar.css';

interface SideBarInterface {
  isOpened: boolean;
}

function SideBar({ isOpened }: SideBarInterface) {
  return <aside className={`${isOpened ? 'opened' : 'closed'} drawer`}>Drawer</aside>;
}

export default SideBar;
