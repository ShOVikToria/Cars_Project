// Діалог з користувачем
function userDialog() {
    if(confirm("Поспілкуємось?"))
    {
        do {
            //let cars = confirm("Хочете дізнатися про конкретний тип автомобілів?")
            if(confirm("Хочете дізнатися про конкретний тип автомобілів?")){
                let answer = prompt("Введіть тип автомобіля, який вас цікавить (Седан, Хетчбек, Кросовер):");
                if (answer) {
                    answer = answer.toLowerCase();
                    if (answer === "седан") {
                        alert("Седани ідеально підходять для міських поїздок!");
                    } else if (answer === "хетчбек") {
                        alert("Хетчбеки компактні та зручні для паркування.");
                    } else if (answer === "кросовер") {
                        alert("Кросовери поєднують зручність і потужність!");
                    } else {
                        alert("Ми ще не маємо інформації про цей тип авто або виникла помилка при введені назви типу.");
                    }
                } else {
                    alert("Ви нічого не ввели!");
                }
            }  
            else{alert("Як скажете)");} 
        } while (!confirm("Бажаєте завершити діалог?"));
    }
}




window.onload = function() {
    userDialog();
    setTimeout(() => {
        // Використання getElementById
    let heading = document.getElementById("вступ");
    heading.style.color = "red"; // змінюємо колір заголовка

// Використання querySelectorAll
    let allLinks = document.querySelectorAll(".inner-menu a");
    allLinks.forEach(link => {
    link.style.fontWeight = 800; 
    });
    }, 3000);
};