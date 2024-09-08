function searchBooks() {
    contentRef = document.getElementById('mainContent');
    contentRef.innerHTML = ''; 
    for (let index = 0; index < books.length; index++) {
        if (books[index].liked) {
            contentRef.innerHTML += templateHTML(index, 'heart-red.png');
        }else {
            contentRef.innerHTML += templateHTML(index, 'heart.png');
        }
        let commentID = "comment" + index;
        let comments = document.getElementById(commentID);
        localStorageData = localStorage.getItem(commentID); 
        if (localStorageData == null) {
            for (let i = 0; i < books[index].comments.length; i++) {
                comments.innerHTML += "<br>" +  books[index].comments[i].name + " : " + books[index].comments[i].comment + "<br>";
                localStorage.setItem(commentID, document.getElementById("comment0").innerHTML);
            }
        }else {
            comments.innerHTML += localStorageData;
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

function postComment(index) {
    let textInputID = "text" + index;
    let textInput = document.getElementById(textInputID);
    let commentID = "comment" + index;
    let comment = document.getElementById(commentID);
    comment.innerHTML += '<br>' + "Gast : " + textInput.value ;
    localStorage.setItem(commentID, comment.innerHTML);
    textInput.value = "";
}