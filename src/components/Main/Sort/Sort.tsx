import React from "react";
import Other from "./Other/Other";
import Structure from "./Structure/Structure";

import "./Sort.scss";
import { connect } from "react-redux";

import {
  sortAction,
  sortedByOtherAction,
  sortOpenAction,
  reverseSortAction,
} from "../../../redux/home-reducer";

interface sortComponentTypes {
  isSortOpen: boolean;
  sortAction: Function;
  sortedByOtherAction: Function;
  sortOpenAction: Function;
  reverseSortAction: Function;
  sortedByOther: string;
}

const Sort = ({
  isSortOpen,
  sortAction,
  sortedByOtherAction,
  sortOpenAction,
  reverseSortAction,
  sortedByOther,
}: sortComponentTypes) => {
  return (
    <div className="sort">
      <Structure sortAction={sortAction} />
      <Other
        sortedByOther={sortedByOther}
        reverseSortAction={reverseSortAction}
        sortOpenAction={sortOpenAction}
        sortedByOtherAction={sortedByOtherAction}
        isSortOpen={isSortOpen}
      />
    </div>
  );
};

const mapStateToProps = (state: Storage) => ({
  isSortOpen: state.home.isSortOpen,
  sortedByOther: state.home.sortedByOther,
});

export default connect(mapStateToProps, {
  sortAction,
  sortedByOtherAction,
  sortOpenAction,
  reverseSortAction,
})(Sort);
