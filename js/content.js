// HTML CONTENT JS FILE
/* HTML CONTENT TO BE ADDED*/


/* ABOUT */
var currentTabId; // Initialise global currentTabId
var linklabel = document.getElementsByClassName('linklabel');

/*function drawRect() {
  requestAnimationFrame(drawRect);
  //ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.clearRect(0, 0, sw, sh);
  ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.stroke();
}*/
// Section link click event function
function enterTab(tabtxt) {
  // turn off active css for detail divs and linklabels
  $('#'+currentTabId+'D').toggleClass('detail-active');
  $('#'+currentTabId+'label').toggleClass('linklabel_active');
  currentTabId = tabtxt; // update currentTabId
  $('#'+currentTabId+'D').toggleClass('detail-active'); //toggle detail css for new active tab
  $('#'+currentTabId+'label').toggleClass('linklabel_active');

  //Carry out individual functions depending on which section
  if (currentTabId =='home') {
    document.body.style.background = '#BBD1EA';
    dynamicTextColour(tinycolor(document.body.style.background),[photosHeader,linklabel]);
  }
  else if (currentTabId == 'about') {
    document.body.style.background = '#FEC601';
    dynamicTextColour(tinycolor(document.body.style.background),[photosHeader,linklabel]);
    //drawRect();

  }
  else if (currentTabId == 'projects') {
    //Beign slideReveal animation for project div content
    slideReveal(document.getElementsByClassName('projectDiv'))
    document.body.style.background = '#84BC9C';
    dynamicTextColour(tinycolor(document.body.style.background),[photosHeader,linklabel]);
  }
  else if (currentTabId == 'photo-graphy') {
    console.log(n-1);
    document.body.style.backgroundColor = colours[n-1];
    dynamicTextColour(tinycolor(document.body.style.background),[photosHeader,linklabel]);
  }
}

var aboutHeader = document.createElement('h1');
$(aboutHeader).text("ABOUT");

document.getElementById('aboutD').appendChild(aboutHeader);
var elemP1 = document.createElement('p');
var elemP2 = document.createElement('p');
var elemP3 = document.createElement('p');

$(elemP1).text("My name is Junho Choi and I am currently a 3rd year undergraduate Mechanical Engineering student at Imperial College London.");

$(elemP2).text("Despite my degree, I have a keen interest in design, machine learning, front-end development and even computer vision. "
+ "These wide-ranging interests have lead me to take part in a variety of projects as part of my coursework, internships, and even "
+ "individual projects that I have started in my free time.");
$(elemP3).text("This website is dedicated to collating these projects and keeping a record of the things I have been up to and enjoy.");

document.getElementById('aboutD').appendChild(elemP1);
document.getElementById('aboutD').appendChild(elemP2);
document.getElementById('aboutD').appendChild(elemP3);

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

//Create wrapper flex box for project content
var Pwrapper = document.createElement('div');
Pwrapper.id = 'projectWrapper';
document.getElementById('projectsD').appendChild(Pwrapper);


for (var i = 0; i < 4; i++) {

  var newPdiv = document.createElement('div');
  newPdiv.className = 'projectDiv';
  newPdiv.id = 'projectDiv'+i;

  //Add text for the individual project divs
  var txt = document.createElement('p')
  txt.style.width = 'auto';
  $(txt).text('This is the div for project '+(i+1));
  newPdiv.appendChild(txt);

  // Add divs to the main wrapper div
  document.getElementById('projectWrapper').appendChild(newPdiv);
}

// Animation for slideReveal
function slideReveal(targ) {
  anime({
    targets: targ,
    easing: 'easeInOutSine',
    duration:1500,
    delay: function(el, i) {
      return 500 + (200 * i);
    },
    translateY: [sh,0]
  });
} ;

/*CODING*/





/*PHOTOS*/

var photosHeader = document.createElement('h1'); // header
$(photosHeader).text("PHOTOGRAPHY");
document.getElementById('photo-graphyD').appendChild(photosHeader);

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
//document.getElementById('photo-graphyD').style.background = colours[0]; // assign initial bg colour
document.body.style.transition = 'all 1s';
document.getElementById('photo-graphyD').style.transition = '0.5s all'
var viewer = document.createElement('div');
viewer.classList.add("slider");

for (var i = 0; i < gallery.length; i++) {
  sl[i] = document.createElement('div');
  sl[i].classList.add("slide");
  $(sl[i]).append("<img id ='sl'"+i+" class='slide_img' src='"+gallery[i]+"'>");
  viewer.appendChild(sl[i]);
  var m = document.getElementById('sl'+i);
}

document.getElementById('photo-graphyD').appendChild(viewer);
window.addEventListener('resize', function() {
  scrollw = viewer.offsetWidth - 50;
}, false);

var scrollw = viewer.offsetWidth - 50; // add 50px buffer so color change can occur
var totalItems = $('.slide').length;


//console.log(totalItems);

function dynamicTextColour(col, item) {
  if (col.isLight() == false) {
    for (var i = 0; i < item.length; i++) {
      if (item[i].length >= 1) {
        for (var n = 0; n < item[i].length; n++) {
          item[i][n].style.color = 'white';
        }
      }
      else {
        item[i].style.color = 'white';
      }
    }
  }
  else {
    for (var i = 0; i < item.length; i++) {
      if (item[i].length >= 1) {
        for (var n = 0; n < item[i].length; n++) {
          item[i][n].style.color = 'black';
        }
      }
      else {
        item[i].style.color = 'black';
      }
    }
  }
}


// Horizontal scroll event function
var n = 1; // set initial value to n
$(function() {
   $(viewer).scroll(function () {
      n = Math.ceil($(this).scrollLeft()/scrollw); //update n
      console.log('n =' + n);
      if (n ==0) {
        n=1;
      }
      //document.getElementById('photo-graphyD').style.background = colours[n-1];
      document.body.style.background = colours[n-1];
      var colour_an = tinycolor(colours[n-1])
      dynamicTextColour(colour_an, [photosHeader,linklabel]);

   });
});
