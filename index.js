function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        var read_message;
        var message;

        if (this.read) {
            read_message = 'already read'
        }
        else {
            read_message = 'not read yet'
        }

        message = this.title + " by " + this.author +", " + this.pages + " pages, " + read_message
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
    bookPages.innerText = book.Pages;
    const bookReadStatus = document.createElement("span");
    bookReadStatus.className = 'bookReadStatus';
    bookReadStatus.innerText = book.read;

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookReadStatus);

    return bookDiv
}

function createBooksDisplay(library){
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



createBooksDisplay(library);

console.log(theHobbit.info());
console.log(library);
