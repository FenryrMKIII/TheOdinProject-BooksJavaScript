function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.libraryPosition = undefined;

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
    books.forEach((book) => {
            library.push(book);
            book.libraryPosition = library.indexOf(book);
        }
    );


}

function createBook(book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.dataset.libraryPosition = book.libraryPosition;

    const bookTitle = document.createElement("span");
    bookTitle.className = 'bookTitle';
    bookTitle.innerText = book.title;
    const bookAuthor = document.createElement("span");
    bookAuthor.className = 'bookAuthor';
    bookAuthor.innerText = book.author;
    const bookPages = document.createElement("span");
    bookPages.className = 'bookPages';
    bookPages.innerText = book.pages;

    const bookReadStatusSpan = document.createElement("span");
    bookReadStatusSpan.className = 'bookReadStatusSpan';
    const bookReadStatus = document.createElement("input");
    bookReadStatus.className = 'bookReadStatus';
    bookReadStatus.type = 'checkbox';
    bookReadStatus.id = 'bookReadStatus' + book.libraryPosition;
    bookReadStatus.checked = book.read;

    const bookReadStatusLabel = document.createElement("label");
    bookReadStatusLabel.forHtml = 'bookReadStatus' + book.libraryPosition;
    bookReadStatusLabel.innerText = "Read?";
    bookReadStatusSpan.appendChild(bookReadStatus);
    bookReadStatusSpan.appendChild(bookReadStatusLabel)

    const delBookButton = document.createElement("button");
    delBookButton.classList.add('delBookButton');
    delBookButton.innerText = 'Delete';

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookReadStatusSpan);
    bookDiv.appendChild(delBookButton);

    return bookDiv
}

function addBookToDisplay(bookList) {
    const bookDisplay = document.getElementById('book-display');
    bookList.forEach((book) => {
            let bookDiv = createBook(book);
            bookDisplay.appendChild(bookDiv);
        }
    )
}

function removeBookFromDisplay(bookDiv) {
    const libraryPosition = `[data-library-position="${bookDiv.dataset.libraryPosition}"]`;
    const bookToDelete = document.querySelector(libraryPosition);
    bookToDelete.remove()
}


function changeReadStatus(checkbox, bookDiv) {
    const libraryPosition = bookDiv.dataset.libraryPosition
    const book = library[libraryPosition];
    book.read = checkbox.checked;
    console.log(book.read)
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
endymion = new Book("Endymion", "Dan Simmons", 100, true);
hyperion = new Book("Hyperion", "Dan Simmons", 200, true);
communtyRing = new Book("The community of the ring", "J.R.R. Tolkien", 50, false);
twoTowers = new Book("The two towers", "J.R.R. Tolkien", 125, false);
kingReturn = new Book("The return of the King", "J.R.R. Tolkien", 425, true);


library = [];
addBook(library, [theHobbit, endymion, hyperion, communtyRing, twoTowers, kingReturn]);
addBookToDisplay(library);

document.querySelectorAll('.delBookButton').forEach((item, index) => {
    item.addEventListener('click', function (event) {
        let libraryPosition = event.target.parentElement.dataset.libraryPosition
        library.splice(libraryPosition,1)
        removeBookFromDisplay(event.target.parentElement)

    })});

document.querySelectorAll('.bookReadStatus').forEach((item, index) => {
    item.addEventListener('click', function (event) {
        changeReadStatus(item, event.target.parentElement.parentElement)
    })});


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
