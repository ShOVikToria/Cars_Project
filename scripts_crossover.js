window.onload = function() {
    const originalColor = document.body.style.backgroundColor; 
    
    setTimeout(() => {
        document.body.style.backgroundColor = "lightblue";
        setTimeout(() => {
            document.body.style.backgroundColor = originalColor;
        }, 30000);
    }, 15000);
    
    setTimeout(() => {
        let tempWin = window.open("", "", "width=900,height=600");
        
        setTimeout(() => {
                // document.write 
            tempWin.document.write(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <style>
                            body {
                                background-color: lightyellow;
                                text-align: center;
                            }
                            .car-image {
                                display: block;
                                margin: 20px auto;
                                max-width: 90%;
                            }
                            .msg {
                                color: green;
                                font-size: 30px;
                                margin-top: 24px;
                                text-align: center;
                            }
                            .msg2 {
                                color: grey;
                                font-size: 20px;
                                margin-top: auto;
                                text-align: center;
                            }
                            #attention {
                                color: red;
                                font-size: 14px;
                                text-align: center;
                                margin: 4px;
                            }
                        </style>
                    </head>
                    <body>
                    <span id="attention">Увага</span>
                    </body>
                </html>
            `);

            if (tempWin.document && tempWin.document.body) {
                let attentionSpan = tempWin.document.getElementById("attention");
                let bellSpan, exclamationSpan, block, p1, p2, p3, img, text;
                // after
                setTimeout(() => {
                    exclamationSpan = tempWin.document.createElement("span");
                    exclamationSpan.textContent = "❗";
                    attentionSpan.after(exclamationSpan);
                }, 500);
                // before
                setTimeout(() => {
                    bellSpan = tempWin.document.createElement("span");
                    bellSpan.textContent = "🔔";
                    attentionSpan.before(bellSpan);
                }, 1000);     
                // append
                setTimeout(() => {
                    block = tempWin.document.createElement("div");
                    block.append(text=tempWin.document.createTextNode("Завантаження повідомлення..."));
                    tempWin.document.body.append(block);
                }, 2000);
                // replaceWith
                setTimeout(() => {
                    p2 = tempWin.document.createElement("p");
                    p2.className = "msg";
                    p2.append(tempWin.document.createTextNode("Тут Ви знайдете цікаву інформацію про цей тип автомобілів"));
                    text.replaceWith(p2);
                }, 3500);
                // prepend
                setTimeout(() => {
                    p1 = tempWin.document.createElement("p");
                    p1.className = "msg";
                    p1.append(tempWin.document.createTextNode("Ви відкрили сторінку про кросовери."));
                    block.prepend(p1);
                }, 4500);
                // append
                setTimeout(() => {
                    p3 = tempWin.document.createElement("p");
                    p3.className = "msg2";
                    p3.append(tempWin.document.createTextNode("Зараз тут з'явиться картинка"));
                    p1.after(p3);
                }, 6000);
                // replaceWith
                setTimeout(() => {
                    img = tempWin.document.createElement("img");
                    img.src = "./pictures/crossover.png";
                    img.alt = "Кросовер";
                    img.className = "car-image";
                    p3.replaceWith(img);
                }, 7000);
                // remove
                setTimeout(() => {
                    let spans = tempWin.document.querySelectorAll("span");
                    spans.forEach(span => span.remove());
                }, 8000);
                setTimeout(() => {
                    tempWin.close();
                }, 10000);
            }
        }, 1000);
    }, 1000);    
};