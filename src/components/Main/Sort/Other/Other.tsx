import React from "react";

interface otherCompopentTypes {
  isSortOpen: boolean;
  sortedByOtherAction: Function;
  sortOpenAction: Function;
  reverseSortAction: Function;
  sortedByOther: string;
}

const reverseStyles: {
  color: string;
} = {
  color: "blue",
};

const Other = ({
  isSortOpen,
  sortedByOther,
  sortOpenAction,
  reverseSortAction,
  sortedByOtherAction,
}: otherCompopentTypes) => {
  return (
    <div className="other">
      <div onClick={() => sortOpenAction()}>
        Sorted by: <span className="other__sort">{sortedByOther ? sortedByOther : "popularity"} </span>
        <span onClick={() => reverseSortAction()} style={reverseStyles}>
          reverse
        </span>
      </div>

      {isSortOpen ? (
        <ul className="other__types">
          <li onClick={() => sortedByOtherAction("popularity")}>popularity</li>
          <li onClick={() => sortedByOtherAction("price")}>price</li>
          <li onClick={() => sortedByOtherAction("name")}>name</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Other;
