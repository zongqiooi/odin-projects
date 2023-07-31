let myLibrary = []; 

function Book(title, author, pages, read) {
    this.title = title, 
    this.author = author, 
    this.pages = pages,
    this.read = read 
}

function addBookToLibrary() {
    let book = new Book("Harry Potter", "zongqiooi", "1000", true);
    let bookOne = new Book("Wassup", "zongqiooi", "1000", true);
    let bookTwo = new Book("Yoyoyo", "zongqiooi", "1000", true);

    myLibrary.push(book);
    myLibrary.push(bookOne);
    myLibrary.push(bookTwo);
}

let booksContainer = document.querySelector(".books-grid"); 

function loadBooksFromLibrary() {
    myLibrary.forEach((book) => {
        let bookTag = document.createElement("div"); 
        bookTag.className = "book-card"; 

        let bookTitle = document.createElement("div"); 
        let bookAuthor = document.createElement("div"); 
        let bookPages = document.createElement("div"); 
        let bookRead = document.createElement("div"); 
        
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
        
        bookTag.appendChild(bookTitle);
        bookTag.appendChild(bookAuthor);
        bookTag.appendChild(bookPages);
        bookTag.appendChild(bookRead);

        booksContainer.appendChild(bookTag); 
    }); 
}

addBookToLibrary(); 
loadBooksFromLibrary(); 