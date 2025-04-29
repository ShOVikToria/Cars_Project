function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакової довжини.");
    }
}

window.onload = function() {
    do{
        let choice = confirm("Бажаєте порівняти рядки за довжиною?")
        if(choice){
            let string1 = prompt("Введіть перший рядок");
            let string2 = prompt("Введіть другий рядок");
            compareStrings(string1, string2)
    }
    }while(!confirm("Бажаєте завершити?"))
    
    setTimeout(() => {
        if(confirm("Бажаєте перейти на сторінку про хетчбеки?")){
            // LOCATION
            location.href = "hatchback.html";
        }
    }, 5000);

}