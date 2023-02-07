import React from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabStyle.css';

import Col from 'react-bootstrap/Col';

import photo1Image from "../Images/photo1.jpg";
import photo2Image from "../Images/photo2.jpg";
import photo3Image from "../Images/photo3.jpg";
import photo4Image from "../Images/photo4.jpg";

const BsTabs = () => {
  return (
    <Container className="py-4 container-fluid">
      <Tabs justify variant="pills" defaultActiveKey="tab-1" >
        <Tab eventKey="tab-1" title="Design">
          <Row>
            <Col sm><img src={photo1Image} className="img-fluid" alt="" /></Col>
            <Col sm><img src={photo2Image} className="img-fluid" alt="" /></Col>
            <Col sm><img src={photo3Image} className="img-fluid" alt="" /></Col>
          </Row>
          <Row>
            <Col sm><img src={photo4Image} className="img-fluid" alt="" /></Col>
          </Row>
        </Tab>
        <Tab eventKey="tab-2" title="Dev">
          <Row>
            <Col sm><img src={photo1Image} className="img-fluid" alt="" /></Col>
            <Col sm><img src={photo2Image} className="img-fluid" alt="" /></Col>
            <Col sm><img src={photo3Image} className="img-fluid" alt="" /></Col>
          </Row>
          <Row>
            <Col sm><img src={photo4Image} className="img-fluid" alt="" /></Col>
          </Row>
        </Tab>
        <Tab eventKey="tab-3" title="other">
          Tab 3 content..
        </Tab>
      </Tabs>
    </Container>
  );
};

export default BsTabs