import React from "react";
import "./Documentation.css";
import DocumentationCard from "./DocumentationCard";
import Data from "../Data.json";

const Documentation = () => {
  return (
    <div className="DocumentationContainer">
      <DocumentationCard
        callTitle={Data.data[0].Name}
        callDescription={Data.data[0].Description}
        callPath={Data.data[0].Path}
        sampleResponse={Data.data[0].SampleResponse}
      ></DocumentationCard>
      <DocumentationCard
        callTitle={Data.data[1].Name}
        callDescription={Data.data[1].Description}
        callPath={Data.data[1].Path}
        sampleResponse={Data.data[1].SampleResponse}
      ></DocumentationCard>
      <DocumentationCard
        callTitle={Data.data[2].Name}
        callDescription={Data.data[2].Description}
        callPath={Data.data[2].Path}
        sampleResponse={Data.data[2].SampleResponse}
      ></DocumentationCard>
      <DocumentationCard
        callTitle={Data.data[3].Name}
        callDescription={Data.data[3].Description}
        callPath={Data.data[3].Path}
        sampleResponse={Data.data[3].SampleResponse}
      ></DocumentationCard>
      <DocumentationCard
        callTitle={Data.data[4].Name}
        callDescription={Data.data[4].Description}
        callPath={Data.data[4].Path}
        sampleResponse={Data.data[4].SampleResponse}
      ></DocumentationCard>
    </div>
  );
};

export default Documentation;
