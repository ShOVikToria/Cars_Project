window.onload = function () {
    //Головне меню
    const behaviors = {
        navigate: (element) => {
            const url = element.dataset.url; 
            if (url) {
                window.location.href = url;
            }
        },    };

    document.querySelector('.main-menu').addEventListener('click', function (event) {
        const button = event.target.closest('button[data-behavior]'); 
        if (!button) return;

        const behaviorName = button.dataset.behavior;
        const behaviorFn = behaviors[behaviorName];

        if (behaviorFn) {
            behaviorFn(button);
        } else {
            console.warn('Невідома поведінка:', behaviorName);
        }
    });



//LAB-8
const carGroups = document.querySelectorAll(".group");
    carGroups.forEach(group => {
        group.addEventListener("mouseover", (event) => {
            const targetElement = event.target; // Використовуємо event.target для визначення елемента всередині групи
            if (targetElement !== group) { // Перевіряємо, чи не сам контейнер, а якийсь внутрішній елемент
                targetElement.style.transform = "scale(1.2)";
                targetElement.style.boxShadow = "10px 10px 15px rgba(184, 158, 135, 0.9)";
                targetElement.style.transition = "transform 0.3s ease, background-color 0.3s ease";
            }
        });

        group.addEventListener("mouseout", (event) => {
            const targetElement = event.target; // Знову використовуємо event.target для відновлення стилів
            if (targetElement !== group) { // Перевіряємо, чи не сам контейнер
                targetElement.style.transform = "";
                targetElement.style.boxShadow = "";
            }
        });
    });
};