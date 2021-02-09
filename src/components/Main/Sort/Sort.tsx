import React from "react";
import Other from "./Other/Other";
import Structure from "./Structure/Structure";

import "./Sort.scss";
import { connect } from "react-redux";

import { sortAction } from "../../../redux/home-reducer";

interface sortComponentTypes {
  isSortOpen: boolean;
  sortAction: Function;
}

const Sort = ({ isSortOpen, sortAction }: sortComponentTypes) => {
  return (
    <div className="sort">
      <Structure sortAction={sortAction} />
      <Other isSortOpen={isSortOpen} />
    </div>
  );
};

const mapStateToProps = (state: Storage) => ({
  isSortOpen: state.home.isSortOpen,
});

export default connect(mapStateToProps, { sortAction })(Sort);
