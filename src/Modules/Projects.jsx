import React, { Fragment } from "react";
import CustomNav from "../Components/NavBar";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { projectsList } from "../utils/helperList";

const Projects = () => {
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        {/* <h2 className="color-customBlue">Weekend / hobby projects</h2> */}
        {projectsList.map((proj) => (
          <Fragment key={proj.label}>
            <Row className="my-5 px-md-5" xs={1} md={2}>
              <Col>
                <a href={proj.src} target="_blank" rel="noopener noreferrer">
                  <img
                    className="img-fluid proj-image shadow"
                    src={proj.imgSrc}
                    alt={proj.label}
                  />
                </a>
              </Col>
              <Col className="pt-2">
                <h3 className="font-weight-bold color-customBlue mb-0">
                  {proj.label}
                </h3>
                <br />
                {proj.description && (
                  <>
                    <span>{proj.description}</span>
                    <br />
                  </>
                )}

                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => window.open(proj.src, "_blank")}
                  className="projectBtn"
                >
                  {" "}
                  {proj.live}
                </Button>

                
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => window.open(proj.githubSrc, "_blank")}
                      className="projectBtn"
                      style={{ marginLeft: "8px" }}
                    >
                      Source code
                    </Button>
                   
                <Button
                style={{marginLeft:"2%"}}
                  variant="outline-primary"
                  size="sm"
                  onClick={() => window.open(proj.blog, "_blank")}
                  className="projectBtn"
                >
                  {" "}
                  {proj.blog1}
                </Button>
                <div className="badgeDiv">
                  {proj.stack?.map((el) => (
                    <Badge pill className="badge">
                      {el}
                    </Badge>
                  ))}
                </div>
              </Col>
            </Row>
          </Fragment>
        ))}
      </Container>
    </>
  );
};

export default Projects;
