import React from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabStyle.css';
import './modal_window.css';

// import { Button } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';

import photo1Image from "../Images/photo1.jpg";
import photo2Image from "../Images/photo2.jpg";
import photo3Image from "../Images/photo3.jpg";
import photo4Image from "../Images/photo4.jpg";
import GithubOctocatImage from "../Images/GithubOctocat.svg";


const BsTabs = () => {
  return (
    <Container className="py-4 container-fluid">
      <Tabs justify variant="pills" defaultActiveKey="tab-1" >
        <Tab eventKey="tab-1" title="Design">
          <Row>
            <Col sm><a href="#modal-01"><img src={photo1Image} className="img-fluid" alt="" /></a></Col>

            <div class="modal-wrapper" id="modal-01">
              <a href="#!" class="modal-overlay"></a>
              <div class="modal-window">
                <div class="modal-content">
                  <h4>Modal window</h4>
                  <img src={photo1Image} className="img-fluid" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut cursus felis. Etiam hendrerit turpis at massa auctor semper.
                  </p>
                  <span>
                    <a class="btn btn-light fw-bold" href="https://github.com/M-Imai01/react-bootstrap-portfoliopage" role="button" target="_blank" rel="noopener noreferrer">
                      <img src={GithubOctocatImage} className="img-fluid works-img" alt="" />Go to Github
                    </a>
                    <a class="btn btn-info fw-bold" href="https://github.com/M-Imai01/react-bootstrap-portfoliopage" role="button" target="_blank" rel="noopener noreferrer">
                      Go to Website
                    </a>
                  </span>
                </div>
                <a href="#!" class="modal-close">×</a>
              </div>
            </div>

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