document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href");
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                let offset = navbarCollapse.offsetHeight; // Ajuste de altura si la navbar es fija
                let elementPosition = targetElement.offsetTop - offset; // Posición ajustada

                window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth" // Desplazamiento suave
                });

                navbarCollapse.classList.remove("show"); // Cierra el menú en móviles
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    // Simulación de programación (reemplaza con tus datos reales)
    const schedule = [
        {
            name: "Noticias al Día",
            description: "Mantente informado con las noticias más relevantes de Sincelejo y la región.",
            start: "12:00",
            end: "15:00"
        },
        {
            name: "Voces de Mi Tierra",
            description: "Un espacio dedicado a la cultura, la música y las historias de nuestra gente.",
            start: "16:00",
            end: "19:00"
        },
        {
            name: "Zona Deportiva",
            description: "Análisis, entrevistas y todo sobre el deporte local y nacional.",
            start: "19:00",
            end: "20:00"
        },
    ];

    // Obtener hora actual
    const now = new Date();
    const currentTime = now.getHours() * 100 + now.getMinutes(); // Formato HHMM

    // Función para convertir hora string a número (HH:MM → HHMM)
    function timeToNumber(timeStr) {
        const parts = timeStr.split(':');
        return parseInt(parts[0]) * 100 + parseInt(parts[1]);
    }

    // Encontrar programa actual
    let currentProgram = null;
    for (const program of schedule) {
        const startTime = timeToNumber(program.start);
        const endTime = timeToNumber(program.end);

        if (currentTime >= startTime && currentTime < endTime) {
            currentProgram = program;
            break;
        }
    }

    // Mostrar programa actual
    if (currentProgram) {
        document.getElementById('program-name').textContent = currentProgram.name;
        document.getElementById('program-description').textContent = currentProgram.description;
        document.getElementById('program-time').textContent = `${currentProgram.start} - ${currentProgram.end}`;
    } else {
        document.getElementById('program-name').textContent = "Programación Regular";
        document.getElementById('program-description').textContent = "Transmisión de contenido variado según nuestra programación.";
        document.getElementById('program-time').textContent = "Consulta nuestra programación completa";
    }

    // Generar lista de programación
    const scheduleList = document.getElementById('schedule-list');
    schedule.forEach(program => {
        const li = document.createElement('li');
        li.className = 'schedule-item';

        // Marcar programa actual
        const startTime = timeToNumber(program.start);
        const endTime = timeToNumber(program.end);
        if (currentTime >= startTime && currentTime < endTime) {
            li.classList.add('current');
        }

        li.innerHTML = `
                    <span>${program.name}</span>
                    <span class="schedule-time">${program.start} - ${program.end}</span>
                `;
        scheduleList.appendChild(li);
    });

    // Actualizar cada minuto
    setInterval(() => {
        location.reload();
    }, 60000); // 60,000 ms = 1 minuto
});


document.querySelectorAll('a[href^="index.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1];
        window.location.href = 'index.html';
        // Espera a que cargue el index antes de desplazar
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    });
});



// Script para animaciones cuando los elementos son visibles
document.addEventListener('DOMContentLoaded', function() {
    // Animación para elementos cuando entran en el viewport
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };
    
    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Tu código existente para la programación...
});