import axios from "axios";
import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://k1g49.sse.codesandbox.io/products").then((res) => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h1>Products</h1>
        <Row>
          {products.map((product) => (
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={product.imgUrl}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>{product.description}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
