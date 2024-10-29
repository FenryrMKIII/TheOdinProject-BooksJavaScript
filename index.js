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

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());
