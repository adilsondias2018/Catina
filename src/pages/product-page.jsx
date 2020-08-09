import { Col, Row } from "antd";
import React from "react";

import ProductButton from "../components/product-button";

const ProductPage = ({ products }) => {
  const productButtons = products.map((product) => (
    //Descubra qual é o valor da prop span
    //para exibir 4 produtos na mesma linha horizontal
    <Col span={x}>
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
