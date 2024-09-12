function searchBooks() {
    contentRef = document.getElementById('mainContent');
    contentRef.innerHTML = ''; 
    for (let index = 0; index < books.length; index++) {
        likeOrNotLike(index);
        localStorageDataShow(index);
    }
}

function likeOrNotLike(index) {
    let likeId = "like" + index;
    let likeData = localStorage.getItem(likeId);
    if (isNull(likeData)) {
        isBookLiked(index, likeId);
    }else {
        isStorageBookLiked(index, likeId, likeData);
    }
}

function isBookLiked(index, likeId) {
    if (books[index].liked) {
        contentRef.innerHTML += templateHTML(index, 'heart-red.png');
        localStorage.setItem(likeId, true);
        localStorage.setItem(likeId + "Int", books[index].likes);
    }else {
        contentRef.innerHTML += templateHTML(index, 'heart.png');
        localStorage.setItem(likeId, false);
        localStorage.setItem(likeId + "Int", books[index].likes);
    }
} 

function isStorageBookLiked(index, likeId, likeData) {
    let likeDataInt = localStorage.getItem(likeId + "Int");
    if (likeData == "true") {
        contentRef.innerHTML += templateHTML(index, 'heart-red.png');
        document.getElementById(likeId).innerText = likeDataInt;
    }else {
        contentRef.innerHTML += templateHTML(index, 'heart.png');
        document.getElementById(likeId).innerText = likeDataInt;
    }
}

function isNull (value) {
    if (value == null) {
        return true;
    }
    else {
        return false;
    }
}

function localStorageDataShow(index) {
    let commentID = "comment" + index;
    let comments = document.getElementById(commentID);
    localStorageData = localStorage.getItem(commentID); 
    if (isNull(localStorageData)) {
        for (let i = 0; i < books[index].comments.length; i++) {
            comments.innerHTML += "<br>" +  books[index].comments[i].name + " : " + books[index].comments[i].comment + "<br>";
            localStorage.setItem(commentID, document.getElementById("comment0").innerHTML);
        }
       }else {
        comments.innerHTML += localStorageData;
    }
}

function likeBook(index) {
    let likeId = "like" + index;
    let localData = localStorage.getItem(likeId);
    let likes = document.getElementById(likeId);
    let pictures = "heart" + index;
    let pictureId = document.getElementById(pictures);
    isLocalDataTrue(localData, likes, pictureId, likeId);
}     

function isLocalDataTrue(localData, likes, pictureId, likeId) {
    if (!isNull(localData)) {
        if (localData == "true") {
            likeInt = parseInt(likes.innerText) - 1;
            likes.innerText = likeInt;
            pictureId.src = "./assets/icon/heart.png";
            localStorage.setItem(likeId, false);
            localStorage.setItem(likeId + "Int", likeInt);
        }else {
            likeInt = parseInt(likes.innerText) + 1;
            likes.innerText = likeInt;
            pictureId.src = "./assets/icon/heart-red.png"
            localStorage.setItem(likeId, true);
            localStorage.setItem(likeId + "Int", likeInt);
    
        }
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