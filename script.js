
 
    // HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});


// PROJECTS USING DOM

const projects = [
{
title:"School Management Software (Website)",
desc:"Responsive  Management Software (Website) created during internship.",
live:"https://aawasbuilding.com/demo/montera/index",
},

 {
title:"Kamdhanucity Website",
desc:"Responsive  Marine Services Website created during internship.",
live:"https://kamdhenucityhome.com/",
github:"",
},
 
{
title:"Marine Services Website",
desc:"Responsive  Marine Services Website created during internship.",
live:"https://aawasbuilding.com/demo/ship-management/index",
 github:"",
},

{
title:"Import Export Website",
desc:"Responsive business website created during internship.",
live:"https://swarajnutrispice.com/",
github:"",
},

{
title:"Ship Management website",
desc:"Responsive business website created during internship.",
live:"https://bbsmopc.com/",
 github:"",
},
    
{
title:"Real estate Construction website",
desc:"Responsive business website created during internship.",
live:"https://priyacon.co.in/",
 github:"",
},

];

document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("projectContainer");

projects.forEach(project => {

const card = document.createElement("div");

card.classList.add("project-card");

card.innerHTML = `
<h3>${project.title}</h3>
<p>${project.desc}</p>
<a href="${project.live}" target="_blank">Live Project</a>
<a href="${project.github || '#'}" target="_blank">GitHub</a>
`;

container.appendChild(card);

});

});

