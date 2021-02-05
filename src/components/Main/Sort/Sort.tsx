import React from "react";
import Other from "./Other/Other";
import Structure from "./Structure/Structure";

import "./Sort.scss";
import { connect } from "react-redux";

interface sortComponentTypes {
  isSortOpen: boolean;
}

const Sort = ({ isSortOpen }: sortComponentTypes) => {
  return (
    <div className="sort">
      <Structure />
      <Other isSortOpen={isSortOpen} />
    </div>
  );
};

const mapStateToProps = (state: Storage) => ({
  isSortOpen: state.home.isSortOpen,
});

export default connect(mapStateToProps, {})(Sort);
