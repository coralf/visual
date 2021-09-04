import { observer } from 'mobx-react-lite';
import {
  AiOutlineAppstore,
  AiOutlineDatabase,
  AiOutlineLayout,
  AiOutlineSetting,
} from 'react-icons/ai';
import { useState } from 'react';
import './index.less';
import { Menu } from './types';
import OperateMenus from './OperateMenus';
import ComponentsPanel from './ComponentsPanel';

interface Props {}

const menus: Menu[] = [
  {
    key: 'components',
    icon: AiOutlineAppstore,
    component: <ComponentsPanel />,
  },
  {
    key: 'template',
    icon: AiOutlineLayout,
  },
  {
    key: 'dataSource',
    icon: AiOutlineDatabase,
  },
  {
    key: 'setting',
    icon: AiOutlineSetting,
  },
];
const Operator = (props: Props) => {
  const [activeMenu, setActiveMenu] = useState<Menu>();
  const handleMenuActive = (menu: Menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="operator">
      <div className="operator-layout">
        <OperateMenus
          defaultActiveKey={menus[0].key}
          menus={menus}
          onActive={handleMenuActive}
        />
        {activeMenu ? activeMenu.component : null}
      </div>
    </div>
  );
};
export default observer(Operator);
