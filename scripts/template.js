function renderBooks(index, heartID) {
    return `<div style="padding-bottom: 24px;">
                <div class="d_flex_a_c flex_column templateContent">
                    <span style="font-size: 16px;">${books[index].name}</span>
                    <div style="height: 4px; width: 28vh; background-color: darkred; padding: 1px; margin: 8px;"></div>
                        <div class="bookDiv"></div>
                        <div style="height: 4px; width: 28vh; background-color: darkred; padding: 1px; margin: 8px;"></div> 
                        <div class="d_flex_a_c" style="width: 100%; justify-content: space-between;">
                        <span class="price">${books[index].price.toFixed(2)} €</span>
                        <div class="d_flex imgDiv" onclick="likeBook(${index})" style="gap: 6px; margin: 12px;">
                            <img id ='heart${index}' src="./assets/icon/${heartID}" height=28px>
                            <span id='like${index}' class="d_flex_a_c likes" onclick="likeBook()" style="font-size: 17px;">${books[index].likes}</span>
                        </div>
                    </div> 
                    <div class="d_flex_a_c" style="gap: 6px; margin: 12px; flex-direction: column;">
                        <span>Author: ${books[index].author}</span>
                        <span>Genre: ${books[index].genre}</span>
                        <span>Erscheinungjahr: ${books[index].publishedYear}</span>
                    </div>
                    <div style="height: 4px; width: 28vh; background-color: darkred; padding: 1px; margin: 8px;"></div> 
                    <div class="d_flex_a_c flex_column">
                        <span>Kommentare :</span>
                        <div style="height: 170px;"></div>
                        <div class="d_flex_a_c">                    
                            <input placeholder="Schreibe dein Kommentar ..." style="border-radius: 18px; width: 208px; text-align: center;">
                            <button style="width: 30px; height: 20px; margin-left: 6px;border-radius: 8px;">
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
}