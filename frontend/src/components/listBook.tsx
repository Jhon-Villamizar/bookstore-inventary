const ListBooks = ({books, onDelete, onUpdate}: any) => {
  return (
    <div className="list">
        <div className="header">
          <h4>Title</h4>
          <h4>Author</h4>
          <h4>Price</h4>
          <h4>Stock Quantity</h4>
          <h4>Actions</h4>
        </div>
        {
          books.map((book: any) => (
            <div className="info" key={book.id}>
              <p className="item">{book.title}</p>
              <p className="item">{book.author}</p>
              <p className="item">{book.price}</p>
              <p className="item">{book.stockQuantity}</p>
              <div className="item">
                <button onClick={() => onUpdate(book)}>Update</button>
                <button onClick={()=> onDelete(book.id)}>Delete</button>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default ListBooks;