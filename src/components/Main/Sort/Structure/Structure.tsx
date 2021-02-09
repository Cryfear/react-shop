import React from "react";

interface StructureTypes {
  sortAction: Function;
}

const Structure = ({ sortAction }: StructureTypes) => {
  return (
    <ul className="structure__list">
      <li
        onClick={() => {
          sortAction("");
        }}
        className="structure__item"
      >
        All
      </li>
      <li
        onClick={() => {
          return sortAction("meat");
        }}
        className="structure__item"
      >
        Meat
      </li>
      <li
        onClick={() => {
          return sortAction("vegan");
        }}
        className="structure__item"
      >
        Vegan
      </li>
      <li
        onClick={() => {
          return sortAction("grilled");
        }}
        className="structure__item"
      >
        Grilled
      </li>
      <li
        onClick={() => {
          return sortAction("spicy");
        }}
        className="structure__item"
      >
        Spicy
      </li>
      <li
        onClick={() => {
          return sortAction("closed");
        }}
        className="structure__item"
      >
        Closed
      </li>
    </ul>
  );
};

export default Structure;
