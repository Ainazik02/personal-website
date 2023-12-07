const books = [
  {
    id: 1,
    title: "Book Title 1",
    author: "Author 1",
    imageUrl: "images/book1.jpg",
    price: 10.99,
  },
  {
    id: 2,
    title: "Book Title 2",
    author: "Author 2",
    imageUrl: "images/book2.jpg",
    price: 12.99,
  },
  {
    id: 3,
    title: "Book Title 3",
    author: "Author 3",
    imageUrl: "images/book3.jpg",
    price: 12.99,
  },
  {
    id: 3,
    title: "Book Title 4",
    author: "Author 4",
    imageUrl: "images/book4.jpg",
    price: 12.99,
  },
  {
    id: 3,
    title: "Book Title 5",
    author: "Author 5",
    imageUrl: "images/book5.jpg",
    price: 12.99,
  },
  {
    id: 3,
    title: "Book Title 6",
    author: "Author 6",
    imageUrl: "images/book6.jpg",
    price: 12.99,
  },
  {
    id: 3,
    title: "Book Title 7",
    author: "Author 7",
    imageUrl: "images/book7.jpg",
    price: 12.99,
  },
  {
    id: 3,
    title: "Book Title 8",
    author: "Author 8",
    imageUrl: "images/book8.jpg",
    price: 12.99,
  },
];

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const bookInfo = `
      <img src="${book.imageUrl}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Price: $${book.price}</p>
      <button onclick="rentBook(${book.id})">Rent Now</button>`;
    bookDiv.innerHTML = bookInfo;
    bookList.appendChild(bookDiv);
  });
}
function rentBook(bookId) {
  const rentedBook = books.find((book) => book.id === bookId);
  if (rentedBook) {
    window.location.href = "payment.html";
  }
}
window.onload = displayBooks;

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    scrollToSection(sectionId);
  });
});
