

import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
  return (
    <div className="app-header">
      <div className="user-profile">
        <FaUserCircle className="user-icon" />
        <span className="user-name">mr.kenny</span>
      </div>
    </div>
  );
};

export default Header;