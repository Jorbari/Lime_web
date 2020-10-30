import React from "react";
import styled from "styled-components";
import { Accordion, Button, Card, Form, Col, Row } from "react-bootstrap";

import './NewProject.css'

const NewProject = () => {
  return (
    <div style={{position: 'relative'}}>


      <form className="w-full max-w-lg new-project-form">
        {/* <div> */}
          <div className="top-save-btn-div pr-4">
          <button
                  className="form-btn btn top-save-btn"
                  type='submit'
                  onClick={e => e.preventDefault()}
                >
                  Save
                </button>
        </div>
        {/* </div> */}

        <Accordion defaultActiveKey="0"  style={{ marginTop: '60px'}} className="accordion-form">
  <Card>
    <Card.Header>
      <p className="title">Key Information</p>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        <i className="fas fa-chevron-up text-secondary" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <div className="form-content">
        
      <Form.Group as={Col} controlId="formBasicEmail" className="form-input px-0" style={{marginBottom: '27px'}}>
          <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Project Title:</Form.Label>
          <Form.Control
            type="text"
            className="login-input-styles"
            placeholder="Name of Project"
            onChange={e => e.preventDefault()}
            required
            value=""
            style={{height: '36px', fontSize: '15px'}}
          />
        </Form.Group>

        <Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input px-0"
               style={{marginBottom: '27px'}}
            >
              <Row>
                <Col sm={12} md={6} className="name-col">
                  <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Project Manager:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={e => e.preventDefault()}
                    required
                    value=""
            placeholder="Name of Manger"
            style={{height: '36px', fontSize: '15px'}}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={e => e.preventDefault()}
                    required
                    value=""
            placeholder="Email Address of Manager"
            style={{height: '36px', fontSize: '15px'}}
                  />
                </Col>
              </Row>
            </Form.Group>

<Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input px-0"
               style={{marginBottom: '27px'}}
            >
              <Row>
                <Col sm={12} md={6} className="name-col">
                  <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Executive Sponsor:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={e => e.preventDefault()}
                    required
                    value=""
            placeholder="Name of Sponsor"
            style={{height: '36px', fontSize: '15px'}}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={e => e.preventDefault()}
                    required
                    value=""
            placeholder="Email Address of Sponsor"
            style={{height: '36px', fontSize: '15px'}}
                  />
                </Col>
              </Row>
            </Form.Group>

<Form.Group as={Col} controlId="formBasicEmail" className="form-input px-0" style={{marginBottom: '27px'}}>
          <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Description:</Form.Label>
          <Form.Control as="textarea" rows={3} 
            className="login-input-styles"
            style={{fontSize: '15px'}} />
        </Form.Group>
<Form.Group
              as={Col}
              controlId="formBasicEmail"
              className="form-input px-0"
               style={{marginBottom: '27px'}}
            >
              <Row>
                <Col sm={12} md={6} className="name-col">
                  <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Project Start Date:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={e => e.preventDefault()}
                    required
                    value=""
            placeholder="Name of Sponsor"
            style={{height: '36px', fontSize: '15px'}}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Project End Date:</Form.Label>
                  <Form.Control
                    type="text"
                    className="grid-input-style login-input-styles"
                    onChange={e => e.preventDefault()}
                    required
                    value=""
            placeholder="Email Address of Sponsor"
            style={{height: '36px', fontSize: '15px'}}
                  />
                </Col>
              </Row>
            </Form.Group>

<Form.Group as={Col} controlId="formBasicEmail" className="form-input px-0" style={{marginBottom: '27px'}}>
          <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Category:</Form.Label>
          <Form.Control as="select" rows={3} 
            className="login-input-styles"
            style={{height: '36px', fontSize: '15px'}} >
              <option>Agriculture</option>
      <option>Mining</option>
      <option>Construction</option>
      <option>Manufacturing &amp; Production</option>
      <option>Transportation</option>
      <option>Wholesale</option>
      <option>Retail &amp; Trading</option>
      <option>Finance</option>
      <option>Public Administration</option>
      <option>Information Techonology</option>
      <option>Services</option>
      <option>Communications</option>
            </Form.Control>
        </Form.Group>
      </div>
    
      </Card.Body>
    
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <p className="title">Project Goals and Objectives</p>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        <i className="fas fa-chevron-up text-secondary" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <div className="form-content">
        
      <Form.Group as={Col} controlId="formBasicEmail" className="form-input px-0" style={{marginBottom: '27px'}}>
          <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Project Goals:</Form.Label>
          <Form.Control as="textarea" rows={3} 
            className="login-input-styles"
            style={{fontSize: '15px'}} />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicEmail" className="form-input px-0" style={{marginBottom: '27px'}}>
          <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Project Objectives:</Form.Label>
          <Form.Control as="textarea" rows={3} 
            className="login-input-styles"
            style={{hfontSize: '15px'}} />
        </Form.Group>
      </div>
    
      </Card.Body>
    
    </Accordion.Collapse>
  </Card>

<Card>
    <Card.Header>
      <p className="title">Project Scope</p>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        <i className="fas fa-chevron-up text-secondary" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
        <div className="form-content">
        
      <Form.Group as={Col} controlId="formBasicEmail" className="form-input px-0" style={{marginBottom: '27px'}}>
          <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>In Scope:</Form.Label>
          <Form.Control as="textarea" rows={3} 
            className="login-input-styles"
            style={{fontSize: '15px'}} />
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicEmail" className="form-input px-0" style={{marginBottom: '27px'}}>
          <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Out of Scope:</Form.Label>
          <Form.Control as="textarea" rows={3} 
            className="login-input-styles"
            style={{fontSize: '15px'}} />
        </Form.Group>
      </div>
    
      </Card.Body>
    
    </Accordion.Collapse>
  </Card>

<Card>
    <Card.Header>
      <p className="title">Project Requirements</p>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        <i className="fas fa-chevron-up text-secondary" />
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
        <div className="form-content">
        
      <Form.Group as={Col} controlId="formBasicEmail" className="form-input px-0" style={{marginBottom: '27px'}}>
          <Form.Label className="form-label" style={{marginBottom: '7.5px'}}>Requirements:</Form.Label>
          <Form.Control as="textarea" rows={6} 
            className="login-input-styles"
            style={{ fontSize: '15px'}} />
        </Form.Group>
      </div>
    
      </Card.Body>
    
    </Accordion.Collapse>
  </Card>


</Accordion>
      
      <div className="d-flex justify-content-end bottom-btn-div">
         <button
                  className="form-btn btn bottom-cancel-btn"
                  type='submit'
                  onClick={e => e.preventDefault()}
                >
                  Cancel
                </button>
                <button
                  className="form-btn btn bottom-save-btn"
                  type='submit'
                  onClick={e => e.preventDefault()}
                >
                  Save
                </button>
      </div>
    </form>
  
    </div>
  );
};

export default NewProject;
