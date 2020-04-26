
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
}; 

const bookError = (error) => {
  return {
    type: 'BOOK_ERROR',
    payload: error
  };
}

export {
  booksLoaded,
  booksRequested,
  bookError
};
