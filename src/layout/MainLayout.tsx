import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import './MainLayout.css';
import SidebarMenu from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useLogOutMutation } from '../api/authApi';
import { useDispatch } from 'react-redux';
import { clearUser } from '../app/authSlice';

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 // ── Logout: Firebase signOut (via RTK Query) + clear Redux ────────────────
  const [logOut] = useLogOutMutation();
 
  const handleLogout = async () => {
    try {
      await logOut();
    } finally {
      dispatch(clearUser());
      navigate('/login', { replace: true });
    }
  };

  return (
    <div className="main-layout">
      <div className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}>
        <SidebarMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed(prev => !prev)}
        >
          {collapsed ? '»' : '«'}
        </button>
      </div>

      <div className="content-container">
        <div className="app-header">
            <FontAwesomeIcon 
                icon={faArrowRightFromBracket} 
                className='logoutIcon'
                onClick={()=>{handleLogout()}}
            />
        </div>
        <Outlet /> {/* Dynamic routing content will render here */}
      </div>
    </div>
  );
}