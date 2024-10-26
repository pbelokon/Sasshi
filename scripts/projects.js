const projectsContainer = document.querySelector(".projects");
console.log(projectsContainer) 
const cards = {"title": "Title", }
const card = `
            <div class="projects-content">
                <div class="card" style="background-image: url("/assets/img/card-1.jpg");">
                    <div class="card-content">
                        <h2 class="card-title">${cards.title}</h2>
                        <p class="card-body">
                            ${cards.title}
                        </p>
                        <a href="${cards.title}" class="button">View Project</a>
                    </div>
                </div>
            </div>
`

// projectsContainer.appendChild(card);

