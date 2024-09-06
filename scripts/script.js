function searchBooks() {
    contentRef = document.getElementById('mainContent');
    contentRef.innerHTML = ''; 
    for (let index = 0; index < books.length; index++) {
        let booksArray = {
            "name" : books[index].name,
            "author" : books[index].author,
            "price" : books[index].price.toFixed(2),
            "likes" : books[index].likes,
            "genre" : books[index].genre,
            "year" : books[index].publishedYear,
            "liked" : books[index].liked
        }
        contentRef.innerHTML += renderBooks(booksArray);
    }
}

function likeBook() {
    // let picture = document.getElementById("");
    let likes = document.getElementsByClassName("likes");
    for (let index = 0; index < books.length; index++) {

    }
}