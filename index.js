function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        var read_message;
        var message;

        if (this.read) {
            read_message = 'already read'
        } else {
            read_message = 'not read yet'
        }

        message = this.title + " by " + this.author + ", " + this.pages + " pages, " + read_message
        return message
    }
}

/**
 *
 * @param {array} library
 * @param {array} book
 */
function addBook(library, books) {
    books.forEach((book) =>
        library.push(book));
}

function createBook(book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';

    const bookTitle = document.createElement("span");
    bookTitle.className = 'bookTitle';
    bookTitle.innerText = book.title;
    const bookAuthor = document.createElement("span");
    bookAuthor.className = 'bookAuthor';
    bookAuthor.innerText = book.author;
    const bookPages = document.createElement("span");
    bookPages.className = 'bookPages';
    bookPages.innerText = book.pages;
    const bookReadStatus = document.createElement("span");
    bookReadStatus.className = 'bookReadStatus';
    bookReadStatus.innerText = book.read;

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookReadStatus);

    return bookDiv
}

function addBookToDisplay(library) {
    const bookDisplay = document.getElementById('book-display');
    library.forEach((book) => {
            bookDiv = createBook(book);
            bookDisplay.appendChild(bookDiv);
        }
    )
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
endymion = new Book("Endymion", "Dan Simmons", 100, false);
hyperion = new Book("Hyperion", "Dan Simmons", 200, false);
communtyRing = new Book("The community of the ring", "J.R.R. Tolkien", 50, false);
twoTowers = new Book("The two towers", "J.R.R. Tolkien", 125, false);
kingReturn = new Book("The return of the King", "J.R.R. Tolkien", 425, false);


library = [];
addBook(library, [theHobbit, endymion, hyperion, communtyRing, twoTowers, kingReturn]);
addBookToDisplay(library);

// modal
const dialog = document.getElementById("add-book-dialog");
const showButton = document.getElementById("show-book-dialog-button");
const closeButton = document.getElementById("close-book-dialog-button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    dialog.close();
});

// Handle the form
const form = document.getElementById('add-book-form');
form.addEventListener('submit', function (event) {
    let bookReadStatus = document.getElementById('book-read-status').checked;
    let book = new Book(form.elements["book-title"].value, form.elements["book-author"].value
            ,
            form.elements["book-pages"].value
            ,
            bookReadStatus
        )
    ;
    addBook(library, [book]);
    addBookToDisplay([book]);

    event.preventDefault(); // prevent form from submitting. This is to allow testing without a server

});
