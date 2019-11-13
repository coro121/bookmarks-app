import React from 'react'

//this is an instance to store the bookmarks. We're creating the shape fo all the methods we'll intend to implement.

const BookmarksContext = React.createContext({
    bookmarks: [],
    addBookmark: () => {},
    deleteBookmark: () => {},
})

export default BookmarksContext