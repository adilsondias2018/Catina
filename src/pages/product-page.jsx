import { useLocation } from "react-router-dom";

import { Col, Row } from "antd";
import React from "react";
import ProductButton from "../components/product-button";
const ProductPage = ({ products }) => {
  const location = useLocation();

  // const frutas = location.pathname === "/fruits";
  // const ofetas = location.pathname === "/ofertas";

  const productButtons = products.map((product) => (
    //Descubra qual é o valor da prop span
    //para exibir 4 produtos na mesma linha horizontal
    <Col span={6}>
      <ProductButton product={product} />
    </Col>
  ));

  return (
    <Row justify="space-between" gutter={24}>
      {productButtons}
    </Row>
  );
};
export default ProductPage;
