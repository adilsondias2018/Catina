import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import React from "react";
import styled from "styled-components";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import ProductPage from "./pages/product-page";
import { fruits } from "./data/fruits";
import { ofertas } from "./data/ofertas";
const { Sider } = Layout;

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const handleClickFruits = () => {
    history.push("/fruits");
    console.log(location);
  };

  const handleClickOfertas = () => {
    history.push("/ofertas");
  };
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
          <Menu.Item key="1" onClick={handleClickFruits}>
            Fruits
          </Menu.Item>

          <Menu.Item key="2" onClick={handleClickOfertas}>
            Ofertas
          </Menu.Item>
          <Menu.Item key="3">Categoria 3</Menu.Item>
        </Menu>
      </Sider>
      <ContentContainer />

      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/fruits">
          <ProductPage products={fruits} />
        </Route>
        <Route exact path="/ofertas">
          <ProductPage products={ofertas} />
        </Route>
      </Switch>
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
