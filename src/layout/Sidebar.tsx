import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type IconName, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MENUITEMS } from '../constants/Menu.constants';
import './SidebarMenu.css';
import { useMenuAccess } from '../hooks/useMenuAccess';

library.add(fas);

interface SidebarMenuProps {
  collapsed?: boolean;
  setCollapsed?: (st: boolean) => void;
}

export default function SidebarMenu({ collapsed = false, setCollapsed = () => {} }: SidebarMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const { filteredMenu } = useMenuAccess();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const handleToggle = (label: string) =>
    setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
  

  const isActiveRoute = (item: typeof MENUITEMS[0]): boolean => {
    if (item.route && location.pathname === item.route) return true;
    if (item.children) return item.children.some(c => isActiveRoute(c));
    return false;
  };

  useEffect(() => {
    const findItem = (items: typeof MENUITEMS, path: string): typeof MENUITEMS[0] | null => {
      for (const item of items) {
        if (item.route === path) return item;
        if (item.children) {
          const found = findItem(item.children, path);
          if (found) return found;
        }
      }
      return null;
    };

    const isDescendantOfRouteWithChildren = (items: typeof MENUITEMS, path: string) => {
      for (const item of items) {
        const hasBoth = !!item.route && !!item.children?.length;
        if (hasBoth) {
          const matched = findItem(item.children!, path);
          if (matched || item.route === path) return true;
        }
        if (item.children && isDescendantOfRouteWithChildren(item.children, path)) return true;
      }
      return false;
    };

    if (isDescendantOfRouteWithChildren(filteredMenu, location.pathname)) {
      setCollapsed(false);
    }
  }, [location.pathname, filteredMenu, setCollapsed]);

  const renderMenu = (item: typeof MENUITEMS[0], level = 0) => {
    const hasChildren = !!item.children?.length;
    const isOpen = openMenus[item.label];
    const isActive = !!item.route && location.pathname === item.route;
    const isParentActive = !item.route && isActiveRoute(item);

    const handleClick = () => {
      if (hasChildren && item.route) setCollapsed(false);
      if (hasChildren) handleToggle(item.label);
      if (item.route) navigate(item.route);
    };

    return (
      <div key={item.label}>
        <div
          className={`menu-item ${isActive ? 'active' : ''} ${isParentActive ? 'parent-active' : ''}`}
          style={{ paddingLeft: `${level * 20 + 15}px` }}
          onClick={handleClick}
          title={collapsed ? item.label : ''}
        >
          {item.icon && (
            <span className="menu-icon">
              <FontAwesomeIcon icon={['fas', item.icon as IconName]} />
            </span>
          )}
          {!collapsed && <span className="menu-text">{item.label}</span>}
          {!collapsed && hasChildren && (
            <span className="menu-expand">{isOpen ? '▾' : '▸'}</span>
          )}
        </div>
        {hasChildren && !collapsed && isOpen && (
          <div className="submenu">
            {item.children!.map(child => renderMenu(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const visibleMenu = useMemo(() => {
    const filterMenu:any = (items: typeof MENUITEMS) =>
      items
        .filter(i => i?.show !== false)
        .map(i => ({
          ...i,
          children: i.children ? filterMenu(i.children) : undefined,
        }));
    return filterMenu(filteredMenu);
  }, [filteredMenu]);

  return <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>{visibleMenu.map(renderMenu)}</div>;
}