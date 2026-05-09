import React from "react";
import ArrowComponent from "./ArrowComponent";
import { billGeneration, sortItems } from "../../../app/slices/billGenerationSlice"; // Fix: corrected import path
import { connect } from "react-redux";

function BillGeneration(props: any) {
  let amount = 0, billstatus = "";
  return (
    <div className='container bg-light h-100 w-100'>
      <h1 className='text-warning'>MenuItems</h1>
      <div className='d-flex flex-row justify-content-start flex-wrap w-100 gap-2'>
        {props.menuCard.map((menuitem: any, index: number) => (
          <button
            className='btn btn-success shadow'
            key={index}
            onClick={() => { props.bill_Generation(menuitem.name); }}
            name={menuitem.name}
          >
            {menuitem.name}
          </button>
        ))}
      </div>

      <h1 className='text-danger'>Food Cart</h1>
      <div className="table-responsive">
        <table className="table table-warning table-striped table-bordered w-100 align-middle text-center">
          <thead className="w-100">
            <tr className="w-100">
              <ArrowComponent header="Title" />
              <ArrowComponent header="Price" />
              <ArrowComponent header="quantity" />
              <ArrowComponent header="Status" />
            </tr>
          </thead>
          <tbody className="table-light">
            {props.bill_items.map((item: any, index: number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Bill Amount</td>
              <td>
                {amount = props.bill_items.reduce(
                  (total: number, value: any) => total + (value.price * value.quantity), 0
                )}
              </td>
              <td colSpan={2}>
                {billstatus = props.bill_items.every(
                  (value: any) => value.status === "available"
                ) ? "All Available" : "Some Not Available"}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BillGeneration);
