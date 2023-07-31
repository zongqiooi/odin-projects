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
    let bookThr = new Book("Yoyoyo", "zongqiooi", "1000", true);

    myLibrary.push(book);
    myLibrary.push(bookOne);
    myLibrary.push(bookTwo);
    myLibrary.push(bookThr);
}

let booksContainer = document.querySelector(".books-grid"); 

function loadBooksFromLibrary() {
    myLibrary.forEach((book) => {
        let bookTag = document.createElement("div"); 
        bookTag.className = "book-card"; 

        let bookTitle = document.createElement("div"); 
        let bookAuthor = document.createElement("div"); 
        let bookPages = document.createElement("div"); 
        let buttonDiv = document.createElement("div"); 
        let bookRead = document.createElement("button"); 
        let bookRemove = document.createElement("button"); 
        
        buttonDiv.className = "card-buttons-group";
        bookTitle.textContent = '"' + book.title + '"';
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages + " pages";
        bookRead.textContent = book.read ? "Read":"Not Read";
        bookRead.style.backgroundColor = book.read ? "#9fff9c":"#ff9c9c";
        bookRead.className = "read-button"; 
        bookRemove.textContent = "Remove";
        
        bookTag.appendChild(bookTitle);
        bookTag.appendChild(bookAuthor);
        bookTag.appendChild(bookPages);
        buttonDiv.appendChild(bookRead);
        buttonDiv.appendChild(bookRemove);
        bookTag.appendChild(buttonDiv); 

        booksContainer.appendChild(bookTag); 
    }); 
}

addBookToLibrary(); 
loadBooksFromLibrary(); 

let buttonGroups = document.querySelectorAll(".card-buttons-group");

buttonGroups.forEach((buttonGroup) => {
    let readButton = buttonGroup.firstChild; 
    readButton.addEventListener("click", () => {
        let buttonColor = readButton.style.backgroundColor; 
        let buttonText = readButton.textContent; 
        readButton.style.backgroundColor = (buttonColor === "rgb(159, 255, 156)") ? "#ff9c9c":"rgb(159, 255, 156)"; 
        readButton.textContent = (buttonText === "Read") ? "Not Read":"Read"; 
        
    });

    let removeButton = buttonGroup.lastChild; 
    removeButton.addEventListener("click", (event) => {
        console.log("this is my event!!!"); 
        console.log(event); 
    })
}); 
