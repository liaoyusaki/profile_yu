import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import ProfilePhoto from "../assets/ch_interlaken_para.JPG";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd';
const { Sider } = Layout;


const items = [
    {
        path: "/profile_yu",
        label: 'About me',
        key: 'abt',
        icon: <BiUserCircle />,
    },
    {
        path: "/resume",
        label: 'Resume',
        key: 'cv',
        icon: <FiBriefcase />,
    },
].map((item, index) => {
    return {
        key: index,
        label: <Link to={item.path}>{item.label}</Link>,
        icon: item.icon,
    };
});

const SideMenu = () => {
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <img style={{width: '200px', padding:'20px'}} src={ProfilePhoto} alt=""/>
            <div style={{textAlign: 'center', paddingBottom: '10px'}}>
                <b style={{ color: 'white' }}>Data Analytics Engineer</b>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
    )
};
export default SideMenu;