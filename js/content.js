// HTML CONTENT JS FILE

/* HTML CONTENT TO BE ADDED*/

/* ABOUT */
function enterAbout() {
  console.log('section entered');
  show_icon(github_img,1);
  show_icon(insta_img,-1);
}
var aboutHeader = document.createElement('h1');
$(aboutHeader).text("ABOUT");
//var aboutOverlay = document.createElement
document.getElementById('aboutD').appendChild(aboutHeader);
var elemP1 = document.createElement('p');
var elemP2 = document.createElement('p');
var elemP3 = document.createElement('p');
//document.getElementById('aboutD').style.position = 'absolute';
//elemP.style.textAlign = "center";
$(elemP1).text("My name is Junho Choi and I am currently a 3rd year undergraduate Mechanical Engineering student at Imperial College London.");

$(elemP2).text("Despite my degree, I have a keen interest in design, machine learning, front-end development and even computer vision. "
+ "These wide-ranging interests have lead me to take part in a variety of projects as part of my coursework, internships, and even "
+ "individual projects that I have started in my free time.");
$(elemP3).text("This website is dedicated to collating these projects and keeping a record of the things I have been up to and enjoy.");

document.getElementById('aboutD').appendChild(elemP1);
document.getElementById('aboutD').appendChild(elemP2);
document.getElementById('aboutD').appendChild(elemP3);
/*var canvA = document.getElementById('canvA');
var context = canvA.getContext("2d");
canvA.style.backgroundColor = "blue";
canvA.style.height = "100px";*/
//canvA.style.opacity = '0.5';
//context.fillRect(0, 0, canvA.width, canvA.height);

var sns = document.createElement('div');
sns.style.paddingTop = '80px';
sns.style.height = '70px';
sns.style.width = '40vw';
sns.style.margin = '0 auto';
var github_img = new Image();
github_img.src = 'img/icons8-github.svg';
github_img.style.height = '100%';
github_img.id = 'gitgo';
//$(github_img).wrap($("<a>").attr("href", "https://github.com/choiboy92"));
//$(github_img).wrap("<a href=\"https://github.com/choiboy92\"></a>");

var insta_img = new Image();
insta_img.src = 'img/icons8-instagram.svg';
insta_img.style.float = 'right';
insta_img.style.height = '100%';
insta_img.id = 'instago';
//$("#instago").wrap("<a href='https://www.instagram.com/junho.what/?hl=en'></a>");

sns.appendChild(github_img);
sns.appendChild(insta_img);
document.getElementById('aboutD').appendChild(sns);


function show_icon(name, i) {
  var w = sns.offsetWidth;
  anime({
    targets: name,
    translateX: i*((w/2)-70), // -70px to account for width of icon
    easing: 'easeInOutSine',
    duration: 1000,
    //autoplay: true,
    direction: 'alternate',
    //loop: true,
  });
};
sns_hover(github_img);
sns_hover(insta_img);

function sns_hover(name) {
  name.addEventListener('mouseenter',function() {
    name.style.cursor = 'pointer';
    anime({
      targets: name,
      easing: 'linear',
      opacity: [.2,1],
      scale:[1, 1.2],
      duration: 800,
      direction: 'alternate',
    });
  });
}




/*PROJECTS*/

var projectsHeader = document.createElement('h1');
$(projectsHeader).text("PROJECTS");
document.getElementById('projectsD').appendChild(projectsHeader);



/*CODING*/





/*PHOTOS*/

var photosHeader = document.createElement('h1'); // header
$(photosHeader).text("PHOTOGRAPHY");
document.getElementById('photosD').appendChild(photosHeader);

var gallery = new Array();
var sl = new Array();
// create gallery array
gallery = ["photos/two_by_two.jpeg", "photos/airplane.jpeg","photos/apartment.jpeg","photos/unripe.jpeg",
"photos/mum_dad.jpeg","photos/self_portrait.jpeg","photos/curves.jpeg","photos/sea.jpeg",
"photos/woods.jpeg","photos/apartment_2.jpeg"]
// create colours array
colours = ['#97C4D9','#040500','#FFFFFF','#779F6A',
'#DEBF8F', '#727E7A','#AEADAD', '#627484',
'#EB964F', "#8B6172"];
document.getElementById('photosD').style.background = colours[0]; // assign initial bg colour
document.getElementById('photosD').style.transition = '0.5s all'
var viewer = document.createElement('div');
viewer.classList.add("slider");

for (var i = 0; i < gallery.length; i++) {
  sl[i] = document.createElement('div');
  sl[i].classList.add("slide");
  $(sl[i]).append("<img id ='sl'"+i+" class='slide_img' src='"+gallery[i]+"'>");
  viewer.appendChild(sl[i]);
  var m = document.getElementById('sl'+i);
}

document.getElementById('photosD').appendChild(viewer);
window.addEventListener('resize', function() {
  scrollw = viewer.offsetWidth - 50;
}, false);

var scrollw = viewer.offsetWidth - 50; // add 50px buffer so color change can occur
var totalItems = $('.slide').length;
//console.log(totalItems);

function dynamicTextColour(col, item) {
  if (col.isLight() == false) {
    for (var i = 0; i < item.length; i++) {
      item[i].style.color = 'white'
    }
  }
  else {
    for (var i = 0; i < item.length; i++) {
      item[i].style.color = 'black'
    }
  }
}

// analyse initial bg colour and adjust textcolour accordingly
dynamicTextColour(tinycolor(colours[0]),[photosHeader,document.getElementById("menu_link")]);

// scroll event function
$(function() {
   $(viewer).scroll(function () {
      var n = Math.ceil($(this).scrollLeft()/scrollw);
      console.log('n =' + n);
      document.getElementById('photosD').style.background = colours[n-1];
      var colour_an = tinycolor(colours[n-1])
      dynamicTextColour(colour_an, [photosHeader,document.getElementById("menu_link")]);

   });
});
