// import React, { Fragment, useEffect, useState, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBooks } from '../../store/BookSlice';
// import BookInfo from './BookInfo';
// import BooksList from './BooksList';

// import './book.css';

// const BookContainer = () => {
//   const [selectedData, setSelectedData] = useState(null);
//   const dispatch = useDispatch();

//   const { loading, books, error } = useSelector((state) => state.books);
//   const { loggedIn } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   const getBookHandler = useCallback((data) => {
//     if (data) {
//       setSelectedData(data);
//     }
//   }, []);

//   return (
//     <Fragment>
//       <hr className='my-5' />
//       <div className='row'>
//         <div className='col'>
//           <BooksList
//             loading={loading}
//             books={books}
//             error={error}
//             dispatch={dispatch}
//             getBook={getBookHandler}
//             isloggedIn={loggedIn}
//           />
//         </div>
//         <div className='col side-line'>
//           <BookInfo data={selectedData} />
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default BookContainer;

// import React, { Fragment, useEffect, useState, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBooks } from '../../store/BookSlice';
// import BooksList from './BooksList';
// import Modal from './Modal'; // Import your modal component

// import './book.css';

// const BookContainer = () => {
//   const [selectedData, setSelectedData] = useState(null);
//   const [showModal, setShowModal] = useState(false); // State to manage modal visibility
//   const dispatch = useDispatch();

//   const { loading, books, error } = useSelector((state) => state.books);
//   const { loggedIn } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   const getBookHandler = useCallback((data) => {
//     if (data) {
//       setSelectedData(data);
//       setShowModal(true); // Show modal when a book is selected
//     }
//   }, []);

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <Fragment>
//       <hr className='my-5' />
//       <div className='row'>
//         <div className='col'>
//           <BooksList
//             loading={loading}
//             books={books}
//             error={error}
//             dispatch={dispatch}
//             getBook={getBookHandler}
//             isloggedIn={loggedIn}
//           />
//         </div>
//       </div>
//       {/* Modal */}
//       {showModal && (
//         <Modal closeModal={closeModal}>
//           <h2>Book Details</h2>
//           {selectedData ? (
//             <div>
//               <p className='fw-bold'>Title: {selectedData.title}</p>
//               <p className='fst-italic'>Price: {selectedData.price}</p>
//               <p className='fst-italic'>Author: {selectedData.author}</p>
//               <p className='fw-light'>Description: {selectedData.description}</p>
//             </div>
//           ) : (
//             <div className='alert alert-secondary' role='alert'>
//               There is no book selected yet. Please select!
//             </div>
//           )}
//         </Modal>
//       )}
//     </Fragment>
//   );
// };

// export default BookContainer;

import React, { Fragment, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/BookSlice";
import BooksList from "./BooksList";
import Modal from "./Modal"; // Import your modal component

import "./book.css";

const BookContainer = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const dispatch = useDispatch();

  const { loading, books, error } = useSelector((state) => state.books);
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const getBookHandler = useCallback((data) => {
    if (data) {
      setSelectedData(data);
      setShowModal(true); 
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            loading={loading}
            books={books}
            error={error}
            dispatch={dispatch}
            getBook={getBookHandler}
            isloggedIn={loggedIn}
          />
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <Modal closeModal={closeModal}>
          <h2>Book Details</h2>
          {selectedData ? (
            <div className="book-details">
              <p className="titles">
                Title: <span className="infos"> {selectedData.title}</span>
              </p>
              <p className="titles">
                Price: <span className="infos"> {selectedData.price}</span>
              </p>
              <p className="titles">
                Description:{" "}
                <span className="infos"> {selectedData.description}</span>
              </p>
              {selectedData.author && (
                <p className="titles">
                  Author: <span className="infos">{selectedData.author}</span>
                </p>
              )}
            </div>
          ) : (
            <div className="alert alert-secondary" role="alert">
              There is no book selected yet. Please select!
            </div>
          )}
        </Modal>
      )}
    </Fragment>
  );
};

export default BookContainer;
