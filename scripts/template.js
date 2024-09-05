function renderBooks(booksArray) {
    return `<div style="padding-bottom: 24px;">
                <div class="d_flex_a_c flex_column templateContent">
                    <span style="font-size: 16px;">${booksArray.name}</span>
                    <div style="height: 4px; width: 28vh; background-color: darkred; padding: 1px; margin: 8px;"></div>
                        <div class="bookDiv"></div>
                        <div style="height: 4px; width: 28vh; background-color: darkred; padding: 1px; margin: 8px;"></div> 
                        <div class="d_flex_a_c" style="width: 100%; justify-content: space-between;">
                        <span class="price">${booksArray.price} €</span>
                        <div class="d_flex imgDiv" onclick="likeBook()" style="gap: 6px; margin: 12px;">
                            <img src="./assets/icon/heart.png" height=28px>
                            <span class="d_flex_a_c" style="font-size: 17px;">${booksArray.likes}</span>
                        </div>
                    </div> 
                    <div class="d_flex_a_c" style="gap: 6px; margin: 12px; flex-direction: column;">
                        <span>Author: ${booksArray.author}</span>
                        <span>Genre: ${booksArray.genre}</span>
                        <span>Erscheinungjahr: ${booksArray.year}</span>
                    </div>
                    <div style="height: 4px; width: 28vh; background-color: darkred; padding: 1px; margin: 8px;"></div> 
                    <div class="d_flex_a_c flex_column">
                        <span>Kommentare :</span>
                        <div class="d_flex_a_c">                    
                            <input placeholder="Schreibe dein Kommentar ..." style="border-radius: 18px; width: 208px; text-align: center;">
                            <button style="width: 30px; height: 20px; margin-left: 6px;border-radius: 8px;">
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
}