import { Menu } from 'antd';
import { DesktopOutlined, FormOutlined } from '@ant-design/icons';

const Sidebar = () => {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<DesktopOutlined />}>
                Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined />}>
                Forms
            </Menu.Item>
        </Menu>
    );
};

export default Sidebar;