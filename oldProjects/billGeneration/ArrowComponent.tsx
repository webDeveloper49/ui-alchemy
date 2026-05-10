import React from "react";
import { billGeneration, sortItems } from "../../../app/slices/billGenerationSlice"; // Fix: corrected import path
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function ArrowComponent(props: any) {
  return (
    <th className="w-25">
      <p className="w-100">{props.header}</p>
      <div className="d-flex flex-row justify-content-center align-items-center gap-1 w-100">
        <button
          id={props.header + "01"}
          className="w-25 btn btn-success p-0 m-0"
          onClick={() => { props.sort_Items(props.header + "01"); }}
        >
          <FontAwesomeIcon icon={faAngleUp} className="fa-sm fa-fw w-75" />
        </button>
        <button
          id={props.header + "02"}
          className="w-25 btn btn-danger p-0 m-0"
          onClick={() => { props.sort_Items(props.header + "02"); }}
        >
          <FontAwesomeIcon icon={faAngleDown} className="fa-sm fa-fw w-75" />
        </button>
      </div>
    </th>
  );
}

function mapStateToProps(store: any) {
  return store.billGeneration;
}
function mapDispatchToProps(dispatch: any) {
  return {
    bill_Generation: (v: any) => { dispatch(billGeneration(v)); },
    sort_Items: (v: any) => { dispatch(sortItems(v)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArrowComponent);
