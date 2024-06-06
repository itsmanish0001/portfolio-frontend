import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, to_navigate}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={to_navigate} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt="wait" />
        </a>
      </div>
      <h4>{description}</h4>
    </Col>
  )
}
