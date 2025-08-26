// assets
import DollarOutlined from '@ant-design/icons/DollarOutlined';
import LoginOutlined from '@ant-design/icons/LoginOutlined';
import PhoneOutlined from '@ant-design/icons/PhoneOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import Dashboard from '@ant-design/icons/DashboardOutlined';
import Study from '@ant-design/icons/BookOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { DollarOutlined, LoginOutlined, PhoneOutlined, RocketOutlined, Dashboard, Study };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages: NavItemType = {
  id: 'group-pages',
  title: 'pages',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.Dashboard,
    },
    {
      id: 'estudiosSuelo',
      title: 'Estudios de Suelo',
      type: 'item',
      url: '/study',
      icon: icons.Study,
    }
  ]
};

export default pages;
