// Seleccionamos el modal y el botón de cierre
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close");
const modalBody = document.getElementById("modal-body");

// Función para mostrar el modal con contenido dinámico
function showModal(content) {
  modalBody.innerHTML = content; // Establece el contenido dinámicamente
  modal.style.display = "block"; // Muestra el modal
}

// Cerrar el modal cuando el usuario hace clic en la "x"
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

// Cerrar el modal si el usuario hace clic fuera del contenido
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Añadir el evento click a las tarjetas
const cards = document.querySelectorAll(".tecnologias_card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Definir el contenido del modal dependiendo de la tarjeta seleccionada
    let content = "";

    switch (index) {
      case 0:
        content = `
        <div class="tecnologias_card">
        <i class="fa-solid fa-diagram-project"></i>
        <h3>Bonita</h3>
        </div>
        <div class="tecnologias_card">
        <i class="fa-solid fa-user-tie"></i>
        <h3>Bizagi</h3>
        </div>    
        <div class="tecnologias_card">
        <i class="fa-brands fa-trello"></i>
        <h3>Trello</h3>
        </div>  
        <div class="tecnologias_card">
        <i class="fa-brands fa-jira"></i>
        <h3>Jira</h3>
        </div>     
        <div class="tecnologias_card">
        <i class="fa-brands fa-windows"></i>
        <h3>Microsoft Project</h3>
        </div>           
        
          `;
        break;
      case 1:
        content = `
        <div class="tecnologias_card">
        <i class="fa-brands fa-python"></i>
        <h3>Python</h3>
         </div> 

         <div class="tecnologias_card">
         <i class="fa-solid fa-database"></i>
         <h3>SQL </h3>
         </div> 
         <div class="tecnologias_card">
         <i class="fa-brands fa-r-project"></i>
         <h3>R </h3>
         </div> 
         <div class="tecnologias_card">
         <i class="fa-brands fa-windows"></i>
         <h3>Power BI </h3>
         </div> 
                    `;
        break;
      case 2:
        content = `
        <div class="tecnologias_card">
        <i class="fa-brands fa-figma"></i>
        <h3>Figma</h3>
        </div> 
        <div class="tecnologias_card">
        <i class="fa-brands fa-html5"></i>
        <h3>HTML</h3>
        </div>
        <div class="tecnologias_card">
        <i class="fa-brands fa-css3"></i>
        <h3>CSS3 </h3>
        </div> 
        <div class="tecnologias_card">
        <i class="fa-brands fa-js"></i>
        <h3>JavaScript </h3>
        </div>  
        `;
        break;
      case 3:
        content = `
        <div class="tecnologias_card">
        <i class="fa-brands fa-node-js"></i>                        
        <h3>NodeJS</h3>
        </div>
        <div class="tecnologias_card">
        <i class="fa-brands fa-python"></i>
        <h3>Python <br> FastApi</h3>
        </div>
        <div class="tecnologias_card">
        <i class="fa-solid fa-database"></i>
        <h3>SQL Server <br> Oracle <br> Postgres <br> MySql</h3>
        </div>
                    
                    `;
        break;
      case 4:
        content = `
        <div class="tecnologias_card">
        <i class="fa-brands fa-flutter"></i>
        <h3>Flutter</h3>
        </div>
        <div class="tecnologias_card">
        <i class="fa-brands fa-python"></i>
        <h3>Python <br>Reflex</h3>
        </div>    
        <div class="tecnologias_card">
        <i class="fa-brands fa-html5"></i>
        <h3>HTML</h3>
        </div>
        <div class="tecnologias_card">
        <i class="fa-brands fa-css3"></i>
        <h3>CSS3 </h3>
        </div> 
        <div class="tecnologias_card">
        <i class="fa-brands fa-js"></i>
        <h3>JavaScript </h3>
        </div>                
                    `;
        break;
      default:
        content = `<p>No content available</p>`;
        break;
    }

    // Muestra el modal con el contenido seleccionado
    showModal(content);
  });
});

/* ================ EFECTO CURSOR TRAIL - PARTÍCULAS QUE SIGUEN AL MOUSE ================ */
// Flag para activar/desactivar el efecto del cursor (false = desactivado)
const ENABLE_CURSOR_TRAIL = false;

(function() {
  if (!ENABLE_CURSOR_TRAIL) {
    console.log('Efecto de cursor desactivado (ENABLE_CURSOR_TRAIL=false)');
    return;
  }
  // Variables de control
  let mouseX = 0;
  let mouseY = 0;
  let particles = [];
  
  // Crear cursor personalizado
  const customCursor = document.createElement('div');
  customCursor.className = 'custom-cursor';
  document.body.appendChild(customCursor);
  
  // Clase para las partículas
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.targetX = mouseX;
      this.targetY = mouseY;
      this.size = Math.random() * 8 + 4; // Tamaño entre 4 y 12
      this.life = 1;
      this.decay = Math.random() * 0.02 + 0.015; // Velocidad de desvanecimiento
      this.velocity = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      };
      
      // Crear elemento DOM
      this.element = document.createElement('div');
      this.element.className = 'cursor-particle';
      this.element.style.width = this.size + 'px';
      this.element.style.height = this.size + 'px';
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
      document.body.appendChild(this.element);
    }
    
    update() {
      // Dirección hacia el cursor
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Atracción suave hacia el cursor (efecto de gravedad)
      if (distance > 1) {
        const angle = Math.atan2(dy, dx);
        this.velocity.x += Math.cos(angle) * 0.15;
        this.velocity.y += Math.sin(angle) * 0.15;
      }
      
      // Aplicar velocidad
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      
      // Fricción
      this.velocity.x *= 0.92;
      this.velocity.y *= 0.92;
      
      // Desvanecerse
      this.life -= this.decay;
      this.life = Math.max(0, this.life);
      
      // Actualizar posición en el DOM
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
      this.element.style.opacity = this.life;
    }
    
    isDead() {
      return this.life <= 0;
    }
    
    remove() {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
  }
  
  // Seguir el movimiento del mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Actualizar cursor personalizado
    customCursor.style.left = mouseX + 'px';
    customCursor.style.top = mouseY + 'px';
    
    // Crear nuevas partículas cada vez que se mueve el mouse
    if (Math.random() > 0.3) { // No crear en cada movimiento, solo ocasionalmente
      particles.push(new Particle(mouseX, mouseY));
    }
  });
  
  // Ocultar cursor personalizado cuando sale del viewport
  document.addEventListener('mouseleave', () => {
    customCursor.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    customCursor.style.opacity = '1';
  });
  
  // Loop de animación
  function animate() {
    // Actualizar y limpiar partículas muertas
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      
      if (particles[i].isDead()) {
        particles[i].remove();
        particles.splice(i, 1);
      }
    }
    
    requestAnimationFrame(animate);
  }
  
  // Iniciar animación
  animate();
})();
