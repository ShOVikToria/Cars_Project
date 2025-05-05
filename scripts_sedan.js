// function compareStrings(str1, str2) {
//     if (str1.length > str2.length) {
//         alert(`Більший рядок: ${str1}`);
//     } else if (str2.length > str1.length) {
//         alert(`Більший рядок: ${str2}`);
//     } else {
//         alert("Рядки однакової довжини.");
//     }
// }

// window.onload = function() {
//     do{
//         let choice = confirm("Бажаєте порівняти рядки за довжиною?")
//         if(choice){
//             let string1 = prompt("Введіть перший рядок");
//             let string2 = prompt("Введіть другий рядок");
//             compareStrings(string1, string2)
//     }
//     }while(!confirm("Бажаєте завершити?"))
    
//     setTimeout(() => {
//         if(confirm("Бажаєте перейти на сторінку про хетчбеки?")){
//             // LOCATION
//             location.href = "hatchback.html";
//         }
//     }, 5000);
// }

function showCarAlert() {
    alert('Це Speedwell Sedan, 1911 року');
  }


window.onload = function () {
    const adv = document.getElementById("advantages");
    const disadv = document.getElementById("disadvantages");

    let advShown = false;
    let disadvShown = false;

    adv.onclick = function () {
        if (!advShown) {
            adv.innerHTML = `
                <h2 id="advantages_title">Переваги седанів</h2>
                <ul>
                    <li>Комфортний салон.</li>
                    <li>Великий багажник.</li>
                    <li>Стабільність на дорозі.</li>
                </ul>
            `;
        } else {
            adv.innerHTML = `
                <h2 id="advantages_title">Переваги седанів</h2>
                <!-- <ul >
                    <li>Комфортний салон.</li>
                    <li>Великий багажник.</li>
                    <li>Стабільність на дорозі.</li>
                </ul> -->
            `;
        }
        advShown = !advShown;
    };

    disadv.onclick = function () {
        if (!disadvShown) {
            disadv.innerHTML = `
                <h2>Недоліки седанів</h2>
                <ul>
                    <li>Менша прохідність на поганих дорогах.</li>
                    <li>Більші габарити порівняно з хетчбеками.</li>
                </ul>
            `;
        } else {
            disadv.innerHTML = `
                <h2>Недоліки седанів</h2>                
            `;
        }
        disadvShown = !disadvShown;
    };

    const behaviors = {
        navigate: (element) => {
            const url = element.dataset.url; // бере значення атрибуту data-url
            if (url) {
                window.location.href = url;
            }
        },    };

    document.querySelector('.main-menu').addEventListener('click', function (event) {
        const button = event.target.closest('button[data-behavior]'); // перевірка чи клік був по кнопці
        if (!button) return;

        const behaviorName = button.dataset.behavior; // зчитування поведінки
        const behaviorFn = behaviors[behaviorName]; // перевірка існування опису поведінки

        if (behaviorFn) {
            behaviorFn(button); // описана в behaviors
        } else {
            console.warn('Невідома поведінка:', behaviorName);
        }
    });
};