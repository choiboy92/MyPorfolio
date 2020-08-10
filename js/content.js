// HTML CONTENT JS FILE

/* HTML CONTENT TO BE ADDED*/

/* ABOUT */
var aboutHeader = document.createElement('h1');
$(aboutHeader).text("ABOUT");
document.getElementById('aboutD').appendChild(aboutHeader);
var elemP1 = document.createElement('p');
var elemP2 = document.createElement('p');
var elemP3 = document.createElement('p');
//elemP.style.textAlign = "center";
$(elemP1).text("My name is Junho Choi and I am currently a 3rd year undergraduate Mechanical Engineering student at Imperial College London.");

$(elemP2).text("Despite my degree, I have a keen interest in design, machine learning, front-end development and even computer vision. "
+ "These wide-ranging interests have lead me to take part in a variety of projects as part of my coursework, internships, and even "
+ "individual projects that I have started in my free time.");
$(elemP3).text("This website is dedicated to collating these projects and keeping a record of the things I have been up to and enjoy.");

document.getElementById('aboutD').appendChild(elemP1);
document.getElementById('aboutD').appendChild(elemP2);
document.getElementById('aboutD').appendChild(elemP3);


/*PROJECTS*/

var projectsHeader = document.createElement('h1');
$(projectsHeader).text("PROJECTS");
document.getElementById('projectsD').appendChild(projectsHeader);



/*CODING*/





/*PHOTOS*/

var photosHeader = document.createElement('h1');
$(photosHeader).text("PHOTOGRAPHY");
document.getElementById('photosD').appendChild(photosHeader);
