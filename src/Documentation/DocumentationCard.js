import React from "react";
import "./Documentation.css";
const DocumentationCard = (props) => {
  return (
    <div className="DocumentationCard">
      <h2 className="CallTitle">{props.callTitle}</h2>
      <table>
        <th>Endpoint</th>
        <th>Description</th>
        <tr>
          <td>{props.callPath}</td>
          <td>{props.callDescription}</td>
        </tr>
      </table>
      {/* <h3 className="CallPath">
        EndPoint: <strong>{props.callPath}</strong>
      </h3>
      <h3 className="CallDescription">{props.callDescription}</h3> */}
      <h3 className="SampleTitle">SampleResponse</h3>
      <div className="SampleResponse">
        <pre>{JSON.stringify(props.sampleResponse, null, 2)};</pre>
      </div>
    </div>
  );
};

export default DocumentationCard;
