import React from 'react';
import { connect } from 'react-redux';
import { incage, decage, resetage } from '../../../app/slices/studentInfoSlice';

function StudentInfo(props: any) {
  return (
    <div>
      <h1>Student Info: Age — {props.age}</h1>
      <button onClick={() => { props.inc_age(); }}>Increment</button>
      <button onClick={() => { props.dec_age(); }}>Decrement</button>
      <button onClick={() => { props.reset_age(); }}>Reset</button>
    </div>
  );
}

function mapStateToProps(store: any) {
  return store.studentInfo; // Fix: was store.StudentInfo (wrong case — store key is studentInfo)
}
function mapDispatchToProps(dispatch: any) {
  return {
    inc_age: () => { dispatch(incage()); },
    dec_age: () => { dispatch(decage()); },  // Fix: decage now exists (was deccage typo in slice)
    reset_age: () => { dispatch(resetage()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);
