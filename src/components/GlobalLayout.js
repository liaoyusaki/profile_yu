import { Layout, theme } from 'antd';
import SideMenu from "./SideMenu";
import TimelinePro from "./TimelinePro";
import {Route, Routes} from "react-router-dom";
import AboutMe from "./AboutMe";
import Clock from 'react-live-clock';
import EmailIcon from '@mui/icons-material/Email';
const { Header, Content, Footer } = Layout;

const GlobalLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout hasSider>
            <SideMenu></SideMenu>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Header
                    style={{
                        width: '100%',
                        padding: 0,
                        background: '#f5f5f5',
                    }}
                >
                    <div style={{textAlign: 'right', paddingRight: '20px'}}>
                        <Clock
                            style={{fontSize: '1em', fontWeight: 'bold', paddingLeft:'20px'}}
                            format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
                            ticking={true}
                        />
                    </div>
                    <p></p>
                </Header>
                <Content>
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<AboutMe />}></Route>
                            <Route path="/resume" element={<TimelinePro />}></Route>
                        </Routes>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'right',
                        paddingRight: '20px'
                    }}
                >
                    Updated on: 2023-01-08
                </Footer>
            </Layout>
        </Layout>
    )
}

export default GlobalLayout;