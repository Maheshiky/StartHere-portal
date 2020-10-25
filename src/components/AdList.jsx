import React from "react";
import adData from "../data/adData.json";
import Advertisement from "./Advertisement";
import { Col } from "arwes";

// import { Project, Words } from 'arwes';

const datalist = adData.map((data) => {
  return (
    <Col s={12} m={4}>
      <Advertisement
        key={data.id}
        header={data.header}
        content={data.content}
      />
    </Col>
  );
});

class AdList extends React.Component {
  render() {
    return [<>{datalist}</>];
  }
}

export default AdList;
