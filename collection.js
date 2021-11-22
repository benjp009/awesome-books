const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const addBook = document.querySelector('#add-book')

let protoObjet = {
  title: "",
  author: ""
}

const listBooks = [];

const displayBooks = (books) => {
  if (books.length == 0) {
    console.log("I work");
    document.getElementById('book-list').innerHTML += `
      <div class="book">
        <p class="no-book">No books</p>
        <hr>
      </div>
    `
  } else {
    let bookString = "";
    for (let i = 0; i < books.length; i += 1) {
      bookString += `
        <div class="book">
          <p>${books[i].title}</p>
          <p>${books[i].author}</p>
          <button type="button" name="remove-book">Remove</button>
          <hr>
        </div>
      `
    }
    document.getElementById('book-list').innerHTML = bookString;
  }
}

// if (listBooks[{0}].length === 0) {
displayBooks(listBooks);

const addBooky = () => {
  addBook.addEventListener('click', () => {
    let newBook = Object.create(protoObjet, {})
    const bookTitle = document.querySelector('.book-title');
    const bookAuthor = document.querySelector('.book-author');
    newBook.title = bookTitle.value;
    newBook.author = bookAuthor.value;

    // console.log(newBook)
    listBooks.push(newBook);
    displayBooks(listBooks);
    console.log(listBooks);
  })
}



window.onload = () => {
  addBooky()
}

// const addBook = {
//   title: "some book Title",
//   author: "Some Author"
// };

// const newCollection = Object.assign(listBooks, addBook);

// console.log(listBooks);
// console.log(addBook)

// const employee = Object.create(listBooks,
//   {
//     title: { value: bookTitle },
//     author: { value: bookAuthor }
//   });

// console.log(employee);



















































// const storageAvailable = (type) => {
//   let storage;
//   try {
//     storage = window[type];
//     const x = '__storage_test__';
//     storage.setItem(x, x);
//     storage.removeItem(x);
//     return true;
//   } catch (e) {
//     return (
//       e instanceof DOMException
//       && (e.code === 22
//         || e.code === 1014
//         || e.name === 'QuotaExceededError'
//         || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
//       && storage
//       && storage.length !== 0
//     );
//   }
// };

// if (storageAvailable('localStorage') && localStorage.getItem('bookLocalStorage')) {
//   const bookLocalStorage = JSON.parse(localStorage.getItem('bookLocalStorage'));
//   bookTitle.value = bookLocalStorage.title;
//   bookAuthor.value = bookLocalStorage.author;
// }

// const populateStorage = () => {
//   if (storageAvailable('localStorage')) {
//     const bookLocalStorage = {
//       title: bookTitle.value,
//       author: bookAuthor.value,
//     };
//     const bookLocalStorageStr = JSON.stringify(bookLocalStorage);
//     localStorage.setItem('bookLocalStorage', bookLocalStorageStr);
//   }
// };
// title.onchange = populateStorage;
// author.onchange = populateStorage;
