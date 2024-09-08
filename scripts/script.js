function searchBooks() {
    contentRef = document.getElementById('mainContent');
    contentRef.innerHTML = ''; 
    for (let index = 0; index < books.length; index++) {
        if (books[index].liked) {
            contentRef.innerHTML += renderBooks(index, 'heart-red.png');
        }else {
            contentRef.innerHTML += renderBooks(index, 'heart.png');
        }
        
    }
}

function likeBook(index) {
    let likeID = "like" + index;
    let likes = document.getElementById(likeID);
    let pictures = "heart" + index;
    let pictureID = document.getElementById(pictures);
    let bookLiked = books[index]; 
    if (!bookLiked.liked) {
        likeInt = parseInt(likes.innerHTML) + 1;
        likes.innerText = likeInt;
        pictureID.src = "./assets/icon/heart-red.png"
        bookLiked.liked = true;
    }else { 
        likeInt = parseInt(likes.innerHTML) - 1;
        likes.innerText = likeInt;
        pictureID.src = "./assets/icon/heart.png";
        bookLiked.liked = false;
    }
}