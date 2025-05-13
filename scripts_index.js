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
// Головне меню
  const behaviors = {
    navigate: (element) => {
      const url = element.dataset.url; // бере значення атрибуту data-url
        if (url) {
          window.location.href = url;
        }
    },    
  };
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