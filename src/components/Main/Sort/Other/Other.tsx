import React from "react";

interface otherCompopentTypes {
  isSortOpen: boolean;
}

const Other = ({ isSortOpen }: otherCompopentTypes) => {
  return (
    <div className="other">
      <div>
        Sort by: <span className="other__sort">popularity</span>
      </div>

      {isSortOpen ? (
        <ul className="other__types">
          <li>popularity</li>
          <li>price</li>
          <li>name</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Other;
