/* global go */
import "./styles.css";

const diagram = new go.Diagram("myDiagramDiv");
diagram.model = new go.GraphLinksModel(
  [
    { key: "Hello" }, // two node data, in an Array
    { key: "World!" }
  ],
  [{ from: "Hello", to: "World!" }] // one link data, in an Array
);
