// eslint-disable-next-line no-unused-vars
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const addBook = document.querySelector('#add-book');

const protoObjet = {
  title: '',
  author: '',
};

const removeBook = () => {
  let listBooks = JSON.parse(localStorage.getItem('BookList') || '[]');
  if (listBooks.length > 0) {
    const removeButtons = document.querySelectorAll('#remove-book');
    removeButtons.forEach((removeButton) => {
      removeButton.addEventListener('click', () => {
        listBooks = listBooks.filter((book, index) => index !== parseInt(removeButton.getAttribute('data-atr'), 10));
        localStorage.setItem('BookList', JSON.stringify(listBooks));
        displayBooks();
      });
    });
  }
};

const displayBooks = () => {
  const listBooks = JSON.parse(localStorage.getItem('BookList') || "[]" );
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
    removeBook();
  }
};

displayBooks();

const addBooky = () => {
  addBook.addEventListener('click', () => {
    const newBook = Object.create(protoObjet, {});
    const bookTitle = document.querySelector('.book-title');
    const bookAuthor = document.querySelector('.book-author');
    newBook.title = bookTitle.value;
    newBook.author = bookAuthor.value;
    const listBooks = JSON.parse(localStorage.getItem('BookList') || '[]');
    listBooks.push(newBook);
    localStorage.setItem('BookList', JSON.stringify(listBooks));
    displayBooks();
  });
};

window.onload = () => {
  addBooky();
};
