class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const book = {
      title: this.title,
      author: this.author,
    };

    const listBooks = JSON.parse(localStorage.getItem('BookList') || '[]');
    listBooks.push(book);
    localStorage.setItem('BookList', JSON.stringify(listBooks));
  }

  removeBook(id) {
    let listBooks = JSON.parse(localStorage.getItem('BookList') || '[]');
    listBooks = listBooks.filter((book, index) => index !== parseInt(id, 10));
    localStorage.setItem('BookList', JSON.stringify(listBooks));
  }
}

const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const addBook = document.querySelector('#add-book');

const displayBooks = () => {
  const listBooks = JSON.parse(localStorage.getItem('BookList') || '[]');
  if (listBooks.length === 0) {
    document.getElementById('book-list').innerHTML = `
      <div class="book">
        <p class="no-book">No books</p>
        <hr>
      </div>
    `;
  } else {
    let bookString = '';
    for (let i = 0; i < listBooks.length; i += 1) {
      bookString += `
        <div class="book">
          <p>${listBooks[i].title}</p>
          <p>${listBooks[i].author}</p>
          <button id="remove-book" type="button" data-atr="${i}">Remove</button>
          <hr>
        </div>
      `;
    }
    document.getElementById('book-list').innerHTML = bookString;
    if (listBooks.length > 0) {
      const removeButtons = document.querySelectorAll('#remove-book');
      removeButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', () => {
          const book = new Book('', '');
          book.removeBook(removeButton.getAttribute('data-atr'));
          displayBooks();
        });
      });
    }
  }
};

addBook.addEventListener('click', () => {
  const book = new Book(bookTitle.value, bookAuthor.value);
  book.addBook();
  displayBooks();
});

window.onload = () => {
  displayBooks();
};
