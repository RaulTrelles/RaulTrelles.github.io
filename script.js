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
        
                    `;
        break;
      case 2:
        content = `
        <div class="tecnologias_card">
        <i class="fa-brands fa-figma"></i>
        <h3>Figma</h3>
        </div>  `;
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
