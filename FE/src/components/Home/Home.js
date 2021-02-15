import React from 'react';
import { Layout, Menu, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import classes from './Home.module.css';

export default function Home() {
  const { Sider, Content, Footer } = Layout;
  const { Item, ItemGroup } = Menu;
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
      <Menu theme="dark" mode="horizontal">
        <span
          className={classes.company}
          style={{ marginRight: '65%', marginLeft: '3%' }}
        >
          Humaps
        </span>

        <Item onClick={handleUpdateTasks}>Update Today's Task</Item>
        <Item onClick={handleTimings}>My Timings</Item>
      </Menu>

      <Layout>
        <Content>main content</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}
