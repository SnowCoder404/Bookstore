function searchBooks() {
    contentRef = document.getElementById('mainContent');
    contentRef.innerHTML = ''; 
    for (let index = 0; index < books.length; index++) {
        likeOrNotLike(index);
        localStorageDataShow(index);
    }
}

function likeOrNotLike(index) {
    let likeID = "like" + index;
    let likeData = localStorage.getItem(likeID);
    let likeDataInt = localStorage.getItem(likeID + "Int");
    if (isNull(likeData)) {
        if (books[index].liked) {
            contentRef.innerHTML += templateHTML(index, 'heart-red.png');
            localStorage.setItem(likeID, true);
            localStorage.setItem(likeID + "Int", document.getElementById(likeID).innerHTML);
        }else {
            contentRef.innerHTML += templateHTML(index, 'heart.png');
            localStorage.setItem(likeID, false);
            localStorage.setItem(likeID + "Int", document.getElementById(likeID).innerHTML);
        }
    }else {
        if (likeData == true) {
            contentRef.innerHTML += templateHTML(index, 'heart-red.png');
            document.getElementById(likeID).innerText = likeDataInt;
        }else {
            contentRef.innerHTML += templateHTML(index, 'heart.png');
            document.getElementById(likeID).innerText = likeDataInt;
        }
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

// function likeBook(index) {
//     let likeID = "like" + index;
//     let likes = document.getElementById(likeID);
//     let pictures = "heart" + index;
//     let pictureID = document.getElementById(pictures);
//     if (pictureID.src == "./assets/icon/heart-red.png") {
//         likeInt = parseInt(likes.innerHTML) - 1;
//         likes.innerText = likeInt;
//         pictureID.src = "./assets/icon/heart.png";
//     }else {
//         likeInt = parseInt(likes.innerHTML) + 1;
//         likes.innerText = likeInt;
//         pictureID.src = "./assets/icon/heart-red.png"
//         }
// }     

function postComment(index) {
    let textInputID = "text" + index;
    let textInput = document.getElementById(textInputID);
    let commentID = "comment" + index;
    let comment = document.getElementById(commentID);
    comment.innerHTML += '<br>' + "Gast : " + textInput.value ;
    localStorage.setItem(commentID, comment.innerHTML);
    textInput.value = "";
}