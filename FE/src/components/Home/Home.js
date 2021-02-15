import React from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const { Sider, Content, Footer } = Layout;
  const { Item } = Menu;
  const history = useHistory();

  const handleUpdateTasks = () => {
    // console.log(history);
    history.push('/updateTasks');
  };
  const handleTimings = () => {
    history.push('/timings');
  };

  return (
    <Layout>
      <Menu theme="dark">
        <Item onClick={handleUpdateTasks}>Update Today's Task</Item>
        <Item onClick={handleTimings}>My Timings</Item>
      </Menu>

      <Layout>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}
