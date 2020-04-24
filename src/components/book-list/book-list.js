import React, { Component } from 'react';
import BookListItem from '../book-list-item/';

import { connect } from 'react-redux';
import withBookstoreService from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        //receive data
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        //dispatch action to store
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ books }) => {
    return { books };
};

//for details see https://www.udemy.com/course/pro-react-redux/learn/lecture/13258262#questions
const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);