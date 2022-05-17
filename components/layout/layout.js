import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import { Container, Row, Col } from "react-bootstrap";

function Layout(props) {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <MainNavigation />
            <main>{props.children}</main>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Layout;
