import { useEffect, useState } from 'react';
import { Menu } from '../types';

interface OperateMenusProps {
  menus: Menu[];
  defaultActiveKey: string;
  onActive: (menu: Menu) => void;
}

interface InternalMenu extends Menu {
  active?: boolean;
}

const ACTIVE_COLOR = '#1890ff';
const OperateMenus = ({
  defaultActiveKey,
  menus,
  onActive,
}: OperateMenusProps) => {
  const [internalMenus, setInternalMenus] = useState<InternalMenu[]>([]);
  const [activeMenu, setActiveMenu] = useState<InternalMenu>();
  const handleClick = (item: InternalMenu) => {
    selectItem(menus, item);
  };

  const selectItem = (menus: InternalMenu[], item: InternalMenu) => {
    const newInternalMenus = [...menus];
    const idx = newInternalMenus?.findIndex((menu) => menu.key === item.key);
    if (activeMenu) {
      const lastActiveIdx = newInternalMenus?.findIndex(
        (menu) => menu.key === activeMenu.key
      );
      newInternalMenus.splice(lastActiveIdx, 1, {
        ...activeMenu,
        active: false,
      });
    }
    const newActiveMenu = { ...item, active: true };
    newInternalMenus.splice(idx, 1, newActiveMenu);
    setActiveMenu(newActiveMenu);
    setInternalMenus(newInternalMenus);
    onActive?.(item);
  };

  const initState = (mens: InternalMenu[]) => {
    const idx = menus.findIndex((item) => item.key === defaultActiveKey);
    if (idx === -1) {
      setInternalMenus(mens);
    } else {
      selectItem(mens, mens[idx]);
    }
  };

  useEffect(() => {
    initState(menus);
  }, []);

  return (
    <div className="operate-menus">
      {internalMenus.map((item) => (
        <div
          className="menu-item"
          key={item.key}
          onClick={() => handleClick(item)}
        >
          {<item.icon size={24} color={item.active ? ACTIVE_COLOR : ''} />}
        </div>
      ))}
    </div>
  );
};

export default OperateMenus;
