import React from 'react';
import { connect } from 'react-redux';
import { getBooks, addBook, deleteBook, updateBook } from '../../../app/services/bookservices';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

function BooksCRUD(props: any) {
  React.useEffect(() => { props.get_Books(); }, []);

  const [formtodisplay, setformtodisplay] = React.useState('addform');
  const [bookid, setbookid] = React.useState<{ id: number | null }>({ id: null });

  const addform = useFormik({
    initialValues: { title: '', author: '' },
    onSubmit: (values, { resetForm }) => {
      console.log('addform onsubmit values::', values);  // Fix: was console.alert (invalid)
      props.add_Book(values);
      resetForm();
    }
  });

  const updateform = useFormik({
    initialValues: { title: '', author: '' },
    onSubmit: (values) => {
      props.update_Book({ ...values, id: bookid.id });
      setformtodisplay("addform");
      updateform.resetForm();
    }
  });

  function editBook(book: any) {
    setformtodisplay("editform");
    setbookid({ id: book.id });
    updateform.setValues({ title: book.title, author: book.author });
  }

  return (
    <div>
      <h1>Books CRUD</h1>
      <div className="d-flex flex-row">
        {formtodisplay === 'addform' && (
          <form className='border p-3 m-3' onSubmit={addform.handleSubmit}>
            <h5>Add Book</h5>
            <p>Title <input type='text' name="title" onChange={addform.handleChange} value={addform.values.title} /></p>
            <p>Author <input type='text' name="author" onChange={addform.handleChange} value={addform.values.author} /></p>
            <button type="submit" className="btn btn-primary">Add Book</button>
          </form>
        )}
        {formtodisplay === 'editform' && (
          <form className='border p-3 m-3' onSubmit={updateform.handleSubmit}>
            <h5>Edit Book</h5>
            <p>Title <input type='text' name="title" onChange={updateform.handleChange} value={updateform.values.title} /></p>
            <p>Author <input type='text' name="author" onChange={updateform.handleChange} value={updateform.values.author} /></p>
            <button type="submit" className="btn btn-warning">Save Changes</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={() => setformtodisplay("addform")}>Cancel</button>
          </form>
        )}
      </div>
      <div className="d-flex flex-row flex-wrap">
        {props.books && props.books.map((book: any) => (
          <div className="border border-success m-2 p-2" key={book.id}>
            <p><strong>{book.title}</strong></p>
            <p>Author: {book.author || "N/A"}</p>
            <p className="text-muted">ID: {book.id}</p>
            <button className="btn btn-danger btn-sm me-1" onClick={() => { props.delete_Book(book.id); }}>Delete</button>
            <button className="btn btn-warning btn-sm" onClick={() => { editBook(book); }}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(store: any) {
  return store.booksCRUD;
}
function mapDispatchToProps(dispatch: any) {
  return {
    get_Books: () => { dispatch(getBooks()); },
    add_Book: (v: any) => { dispatch(addBook(v)); },
    delete_Book: (v: any) => { dispatch(deleteBook(v)); },
    update_Book: (v: any) => { dispatch(updateBook(v)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksCRUD);
