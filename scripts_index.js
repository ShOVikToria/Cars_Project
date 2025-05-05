// // Діалог з користувачем
// function userDialog() {
//     if(confirm("Поспілкуємось?"))
//     {
//         do {
//             if(confirm("Хочете дізнатися про конкретний тип автомобілів?")){
//                 let answer = prompt("Введіть тип автомобіля, який вас цікавить (Седан, Хетчбек, Кросовер):");
//                 if (answer) {
//                     answer = answer.toLowerCase();
//                     if (answer === "седан") {
//                         alert("Седани ідеально підходять для міських поїздок!");
//                     } else if (answer === "хетчбек") {
//                         alert("Хетчбеки компактні та зручні для паркування.");
//                     } else if (answer === "кросовер") {
//                         alert("Кросовери поєднують зручність і потужність!");
//                     } else {
//                         alert("Ми ще не маємо інформації про цей тип авто або виникла помилка при введені назви типу.");
//                     }
//                 } else {
//                     alert("Ви нічого не ввели!");
//                 }
//             }  
//             else{alert("Як скажете)");} 
//         } while (!confirm("Бажаєте завершити діалог?"));
//     }
// }

// window.onload = function() {
//     userDialog();
//     setTimeout(() => {
//         // Використання getElementById
//     let heading = document.getElementById("вступ");
//     heading.style.color = "red"; // змінюємо колір заголовка

// // Використання querySelectorAll
//     let allLinks = document.querySelectorAll(".inner-menu a");
//     allLinks.forEach(link => {
//     link.style.fontWeight = 800; 
//     });
//     }, 3000);
// };



window.onload = function () {
    const btnSedan = document.getElementById('moreInfoSedan');
    const btnHatchback = document.getElementById('moreInfoHatchback');
    const btnCrossover = document.getElementById('moreInfoCrossover');
  
// Функції-обробники
    function showSedanPrice() {
      alert('Седан коштує від $22,000');
    }
  
    function showSedanSpecs() {
      alert('Седан має автомат, 150 к.с., і витрати пального 6л/100км');
    }
  
    function showHatchbackPrice() {
      alert('Хетчбек коштує від $18,000');
    }
  
    function showHatchbackSpecs() {
      alert('Хетчбек зручний для міста, 120 к.с., 5л/100км');
    }
  
    function showCrossoverPrice() {
      alert('Кросовер коштує від $28,000');
    }
  
    function showCrossoverSpecs() {
      alert('Кросовер має повний привід, 180 к.с., кліренс 20 см');
    }
  
// Оголошення "об'єкту" // handleEvent
    const handlerObject = {
        handleEvent(event) {
          const confirmed = confirm("handleEvent: натиснуто на " + event.currentTarget.id);
          if (!confirmed) {
            event.currentTarget.removeEventListener('click', handlerObject); //removeEventListener
            alert("Обробник видалено. Повідомлення більше не з'явиться.");
          } 
        }
    };
  
// Використання addEventListener
    btnSedan.addEventListener('click', handlerObject); // призначення обробником об'єкт
    btnSedan.addEventListener('click', showSedanPrice); // призначення функції-обробника
    btnSedan.addEventListener('click', showSedanSpecs);
    
    btnHatchback.addEventListener('click', handlerObject);
    btnHatchback.addEventListener('click', showHatchbackPrice); 
    btnHatchback.addEventListener('click', showHatchbackSpecs); 
    
    btnCrossover.addEventListener('click', handlerObject);
    btnCrossover.addEventListener('click', showCrossoverPrice); 
    btnCrossover.addEventListener('click', showCrossoverSpecs); 



// Підсвічування елементів списку
    const carList = document.getElementById("list");

    carList.onclick = function (event) {
        const target = event.target;

        // Перевіряємо, чи клікнули по <dt> або <dd>
        if (target.tagName === "DT" || target.tagName === "DD" || target.tagName === "B") {
            // Знімаємо підсвічування з усіх елементів
            const allItems = carList.querySelectorAll("dt, dd, dt > b");
            allItems.forEach(el => el.classList.remove("highlight"));

            // Якщо клікнули по <b>, підсвічуємо його батьківський <dt>
            if (target.tagName === "B" && target.parentElement.tagName === "DT") {
            target.parentElement.classList.add("highlight");
            } else {
            target.classList.add("highlight");
            }
        }
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