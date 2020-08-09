import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import React from "react";
import styled from "styled-components";

const { Sider } = Layout;

const App = () => {
  return (
    <OuterContainer>
      <Sider
        width={200}
        style={{ height: "100%" }}
        className="site-layout-background"
      >
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1">Categoria 1</Menu.Item>
          <Menu.Item key="2">Categoria 2</Menu.Item>
        </Menu>
      </Sider>
      <ContentContainer />
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const ContentContainer = styled.div`
  max-height: 100vh;
  padding: 48px;
`;

export default App;
