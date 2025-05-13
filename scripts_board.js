window.onload = function () {    
    // Головне меню
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

    
    
    const images = document.querySelectorAll('.dragElement');

    //Початкове розташування
    let startX = 50;
    let startY = 200;
    let step = 450;

    images.forEach((img, index) => {
        img.style.left = (startX + (index % 4) * step) + 'px';
        img.style.top = (startY + Math.floor(index / 4) * step) + 'px';
    });

    //Перетягування
    images.forEach(img => {
        img.addEventListener('mousedown', function (event) {
            event.preventDefault(); // вимикаємо стандартне перетягування браузером

            //фіксація зміщення відносно лівого верхнього кута картинки (щоб картинка не стрибала)
            const shiftX = event.clientX - img.getBoundingClientRect().left;
            const shiftY = event.clientY - img.getBoundingClientRect().top;

            img.style.zIndex = 1000;

            // Фіксуємо позицію: absolute
            img.style.position = 'absolute';
            document.body.append(img);
           
            //ставить зображення під курсор
            moveAt(event.pageX, event.pageY);

            function moveAt(pageX, pageY) {
                img.style.left = pageX - shiftX + 'px';
                img.style.top = pageY - shiftY + 'px';
            }

            //коли курсор рухається - поостійно оновлюємо розташування картинки
            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            img.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove); //зупиняє перетягування
                img.onmouseup = null;
            };
        });
    });
};
