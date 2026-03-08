
    // HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});


// PROJECTS USING DOM

const projects = [

{
title:"Export Business Website",
desc:"Responsive business website created during internship.",
live:"#",
github:"#"
},

{
title:"Counter App",
desc:"JavaScript counter using DOM manipulation.",
live:"#",
github:"#"
},

{
title:"To Do List",
desc:"Dynamic task manager built using JavaScript.",
live:"#",
github:"#"
}



];

const container = document.getElementById("projectContainer");

projects.forEach(project => {

const card = document.createElement("div");

card.classList.add("project-card");

card.innerHTML = `
<h3>${project.title}</h3>
<p>${project.desc}</p>
<a href="${project.live}" target="_blank">Live Project</a>
<a href="${project.github}" target="_blank">GitHub</a>
`;

container.appendChild(card);

});
