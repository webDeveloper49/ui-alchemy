import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllInfo } from '../../../app/services/services'; // Fix: corrected import path

function InfoAsyncActivity(props: any) {
  const books = props.info;

  useEffect(() => {
    props.get_info();
  }, []);

  return (
    <div>
      <h1>Info Async Activity</h1>
      <div>
        <ul>
          {books && books.map((book: any, index: number) => (
            <li key={index}>
              {Object.entries(book).map(([key, value], i) => (
                <p key={i}><strong>{key}:</strong> {String(value)}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function mapStateToProps(store: any) {
  return store.infoAsyncActivity;
}
function mapDispatchToProps(dispatch: any) {
  return {
    get_info: () => { dispatch(getAllInfo()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoAsyncActivity);
