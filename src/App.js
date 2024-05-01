// import React, { Fragment } from 'react';

// import Header from './components/Header';
// import Container from './components/Container';
// import AddForm from './components/AddForm';
// import BookContainer from './components/Book/BookContainer';

// const App = () => {
//   return (
//     <Fragment>
//       <Header />
//       <Container>
//         <AddForm />
//         <BookContainer />
//       </Container>
//     </Fragment>
//   );
// };

// export default App;

// ///////////////////////////////////////////////////////

import React, { Fragment, useState } from "react";

import Header from "./components/Header";
import Container from "./components/Container";
import AddForm from "./components/AddForm";
import BookContainer from "./components/Book/BookContainer";

const App = () => {
  const [showBooks, setShowBooks] = useState(false);

  const toggleBooksVisibility = () => {
    setShowBooks(!showBooks);
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm />
      </Container>
      <div className="list-container">
        {showBooks && <BookContainer />}
        <button className="show-hide-btn " onClick={toggleBooksVisibility}>
          {showBooks ? "Hide Books" : "Show Books"}
        </button>
      </div>
    </Fragment>
  );
};

export default App;
