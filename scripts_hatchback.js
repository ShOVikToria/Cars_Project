window.onload = function() {
    setTimeout(() => {
        // 1. innerHTML
    let headings = document.querySelectorAll("h2");
    headings.forEach(heading => {
        heading.innerHTML += " 🚗";
    });
    }, 3000);
    
    setTimeout(() => {
        // 2. outerHTML
        pictures = document.getElementById("pic");
        console.log(pictures.outerHTML);
        pictures.outerHTML = `
        <table class="pictures" id="pic">
            <tr>
                <td>
                    <a href="./pictures/1938_Citroen_hatchback.jpg" target="_blank">
                        <img src="./pictures/1938_Citroen_hatchback.jpg" alt="Citroën Traction Avant" class="car-picture">
                    </a>
                </td>
                <td>
                    <a href="./pictures/1951_Kaiser-Frazer_Vagabond_hatchback.jpg" target="_blank">
                        <img src="./pictures/1951_Kaiser-Frazer_Vagabond_hatchback.jpg" alt="Kaiser-Frazer" class="car-picture">
                    </a>
                </td>
                <td>
                    <a href="./pictures/Austin_A40_Farina_Countryman.jpg" target="_blank">
                        <img src="./pictures/Austin_A40_Farina_Countryman.jpg" alt="Austin A40 Farina" class="car-picture">
                    </a>
                </td>
                <td>
                    <a href="./pictures/JaguarE-Type.jpg" target="_blank">
                        <img src="./pictures/JaguarE-Type.jpg" alt="Jaguar E-Type" class="car-picture">
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    <h3>1938 Citroën Traction Avant Commerciale - 1952 показана форма</h3>
                </td>
                <td>
                    <h3>1951 Kaiser-Frazer Vagabond</h3>
                </td>
                <td>
                    <h3>1959 Austin A40 Farina Countryman</h3>
                </td>
                <td>
                    <h3>1966 Jaguar E-Type з дверцятами, що відкриваються в бік</h3>
                </td>
            </tr> 
        </table>`;
    }, 6000);    

    let heading = document.querySelector("h2");
    setTimeout(() => {
        // 3. nodeValue
        alert(heading.firstChild.nodeValue);
    }, 10000);
    
    setTimeout(() => {
        // 4. textContent
        heading.firstChild.textContent = "Інформація про хетчбеки";
    }, 15000);

    setTimeout(() => {
        if(confirm("Цікаво дізнатися про розробника сайту?")){
            developerInfo("Шевчук", "Вікторія")
        }
    }, 17000);
}

// Функція виводу інформації про розробника
function developerInfo(lastName, firstName, position = "Студентка КПІ") {
    alert(`Розробник сайту: ${lastName} ${firstName}, Посада: ${position}`);
}
