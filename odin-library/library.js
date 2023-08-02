let myLibrary = []; 

function Book(title, author, pages, read, id) {
    this.title = title, 
    this.author = author, 
    this.pages = pages,
    this.read = read, 
    this.id = id
}

function addBookToLibrary() {
    let book = new Book("Harry Potter", "zongqiooi", "1000", true, 1);
    let bookOne = new Book("Wassup", "zongqiooi", "1000", true, 2);
    let bookTwo = new Book("Yoyoyo", "zongqiooi", "1000", true, 3);
    let bookThr = new Book("hehehe", "zongqiooi", "1000", true, 4);
    let bookFour = new Book("hahaha", "zongqiooi", "1000", true, 5);
    let bookFive = new Book("hohoho", "zongqiooi", "1000", true, 6);
    let bookSix = new Book("huhuhu", "zongqiooi", "1000", true, 7);

    myLibrary.push(book);
    myLibrary.push(bookOne);
    myLibrary.push(bookTwo);
    myLibrary.push(bookThr);
    myLibrary.push(bookFour);
    myLibrary.push(bookFive);
    myLibrary.push(bookSix);
}

function loadBooksFromLibrary() {
    let booksCards = document.querySelectorAll(".book-card"); 
    let booksContainer = document.querySelector(".books-grid"); 

    booksCards.forEach((bookCard) => {
        bookCard.remove(); 
    }); 

    myLibrary.forEach((book) => {
        let bookTag = document.createElement("div"); 
        bookTag.classList.add("book-card"); 
        bookTag.setAttribute("id", `${book.id}`); 

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
        bookRemove.className = "remove-button"
        bookRemove.textContent = "Remove";
        
        bookTag.appendChild(bookTitle);
        bookTag.appendChild(bookAuthor);
        bookTag.appendChild(bookPages);
        buttonDiv.appendChild(bookRead);
        buttonDiv.appendChild(bookRemove);
        bookTag.appendChild(buttonDiv); 

        booksContainer.appendChild(bookTag); 
    }); 

    let buttonGroups = document.querySelectorAll(".card-buttons-group");

    buttonGroups.forEach((buttonGroup) => {
        let readButton = buttonGroup.firstChild; 
        readButton.addEventListener("click", () => {
            let buttonColor = readButton.style.backgroundColor; 
            let buttonText = readButton.textContent; 
            readButton.style.backgroundColor = (buttonColor === "rgb(159, 255, 156)") ? "#ff9c9c":"rgb(159, 255, 156)"; 
            readButton.textContent = (buttonText === "Read") ? "Not Read":"Read"; 
            
        });
    }); 

    let cross = document.querySelector(".cross-button"); 
    let modal = document.querySelector(".modal"); 
    let overlay = document.querySelector(".overlay"); 
    let newBookButton = document.querySelector(".add-book-button"); 

    newBookButton.addEventListener("click", () => {
        modal.classList.add("modal-active");
        modal.classList.remove("hide");
        overlay.classList.add("overlay-active"); 
        overlay.classList.remove("hide"); 
        cross.classList.add("cross-active"); 
        cross.classList.remove("hide"); 
    }); 

    cross.addEventListener("click", () => {
        modal.classList.add("hide"); 
        overlay.classList.add("hide"); 
        cross.classList.add("hide"); 
    });

    let booksCardss = document.querySelectorAll(".book-card"); 

    booksCardss.forEach((booksCard) => {
        let removeButton = booksCard.querySelector(".remove-button"); 

        removeButton.addEventListener("click", () => {
            myLibrary = myLibrary.filter((book) => {
                return booksCard.id != book.id; 
            })
            loadBooksFromLibrary();
        }); 
    });

    let addBookForm = document.querySelector("#add-book-form"); 

    addBookForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        let title = document.querySelector("#title").value; 
        let author = document.querySelector("#author").value; 
        let pages = document.querySelector("#pages").value; 
        let checkbox = document.querySelector("#checkbox").checked; 
        let id = myLibrary.length() + 1; 
        let book = new Book(title, author, pages, checkbox, id);
        
        console.log(title);
        console.log(author);
        console.log(pages);
        console.log(checkbox);
        console.log(id);
        myLibrary.push(book);
        loadBooksFromLibrary(); 
    }); 
}

addBookToLibrary(); 
loadBooksFromLibrary(); 

