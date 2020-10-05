// INTERACTION JS FILE


const pixelRatio = 2;
//const padding = 10;

let canvas, ctx;
//let renderer, stage;
let sw = document.body.clientWidth;
let sh = document.body.clientHeight;

function generateCanvas(section) {
    //console.log("Generating canvas");
    canvas = document.createElement('canvas');
    canvas.id = 'Can';
    body = document.createElement('body');
    body.appendChild(canvas);
    document.getElementById(section).appendChild(body);

    ctx = canvas.getContext("2d");

    window.addEventListener('resize', canvasResize, false);
    canvasResize();

    // add particles background for home canvas
    if (section == 'home') {
      console.log("section is home");
      Particles.init({
        selector: 'canvas',
        sizeVariations: 5,
        color: ['#84BC9C', '#EEB902'],
        //speed: {},
        connectParticles: true
      });
    }
}

function canvasResize() {
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;
    console.log('sw = ', sw)
    console.log('sh = ', sh)
    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);
}

function init() {
  //var s1 = document.getElementById("home");
  generateCanvas("home");

  leon_intro = new LeonSans({
      text: 'Hello\n   World',
      color: ['#000000'],
      size: 80,
      tracking:1,
      weight: 780,
      colorful: ['#c5d73f', '#9d529c', '#49a9db', '#fec330', '#5eb96e', '#fc5356', '#f38f31']
  });
  leon_clicknotice = new LeonSans({
    text: 'click the text',
    color: ['#FF032D'],
    size: 20,
    tracking: 1,
    weight: 500
  });

  requestAnimationFrame(animate);


}

function animate(t) {
  requestAnimationFrame(animate);
  //ctx.clearRect(0, 0, sw, sh);
  const x = ((sw - leon_intro.rect.w) / 2) - 200;
  const y = ((sh - leon_intro.rect.h) / 2);
  leon_intro.position(x, y);
  leon_intro.draw(ctx);
  leon_clicknotice.position(x,(y+leon_intro.rect.h + 100));
  leon_clicknotice.draw(ctx);
}

function draw(element, time) {
  let i, total = element.drawing.length;
  for (i = 0; i < total; i++) {
      TweenMax.fromTo(element.drawing[i], time, {
          value: 0
      }, {
          delay: i * 0.1,
          value: 1,
          ease: Power4.easeOut
          /*onComplete: function() {
            //console.log('done, ', i);
            count++;
            console.log('count, ', count);
          }*/
      });
  }
}

// function to undraw the element and remove the event listener
function undraw(element, time, handler) {
  console.log('undrawing')
  let i, total = element.drawing.length;
  for (i = total-1; i >= 0; i--) {
      TweenMax.fromTo(element.drawing[i], time, {
          value: 1
      }, {
          delay: ((total-i) * 0.1),
          value: 0,
          ease: Power4.easeOut
      });
  }
  //console.log('Event listener should be removed')
  ctx.clearRect(0, 0, sw, sh);
  $(canvas).off(tap, handler);
}

var pointerX = 0;
var pointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

function createCircle(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = '#FF032D';
  p.radius = 0.1;
  p.alpha = .5;
  p.lineWidth = 10;
  p.draw = function() {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  return p;
}
function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function disappear(element,time) {
  var left_x = element.rect.x;
  var top_y = element.rect.y;
  var right_x = left_x + element.rect.w;
  var bottom_y = top_y + element.rect.h;
  if(pointerX>=left_x && pointerX<=right_x) {
    if (pointerY>=top_y && pointerY<=bottom_y) {
      undraw(element,time);
      console.log(handler);
    }
  }
}

function moveOut(element,time) {
  var handler = function(e) {
    pointerX = e.clientX || e.touches[0].clientX;
    pointerY = e.clientY || e.touches[0].clientY;
    //console.log(pointerX, pointerY);
    //console.log(element);
    var left_x = element.rect.x;
    var top_y = element.rect.y;
    var right_x = left_x + element.rect.w;
    var bottom_y = top_y + element.rect.h;
    if(pointerX>=left_x && pointerX<=right_x) {
      if (pointerY>=top_y && pointerY<=bottom_y) {
        // undraw the element ad remove event handler
        // if click is within the box of the element
        undraw(element,time,handler);
      }
    }
  }
  // add an event listener to the element
  $(canvas).on(tap, handler);
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px
function openNav() {
  document.getElementById("mySidenav").style.width = "175px";
  document.getElementById("main").style.marginLeft = "0";
  //document.getElementById("main").style.marginLeft = "250px";

}*/

/* Set the width of the side navigation to 0 and the left margin of the page content to 0
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}*/

function slideup(section) {
  $(section).click(function(){
    $(section).slideUp();
  });
};

/*DRAW CANVAS CONTENT*/
init();

/*HOVER ANIMATIONS*/
// create close button hover animation
/*var buttonEl = document.querySelector('.closebtn');
function ani_closebtn(scale, duration, elasticity) {
  anime.remove(buttonEl);
  anime({
    targets: buttonEl,
    scale: scale,
    duration: duration,
  });
}
function enterButton() { ani_closebtn(1.5, 300) };
function leaveButton() { ani_closebtn(1.0, 300) };
buttonEl.addEventListener('mouseenter', enterButton, false);
buttonEl.addEventListener('mouseleave', leaveButton, false);*/

// create hover animation for menu
/*var menulink = document.querySelector('#menu_link');
var menulink_s = document.querySelector('#menu_link_shadow');
menulink.addEventListener('mouseenter', function() {
  anime.remove(menulink_s);
  anime({
    targets: menulink_s,
    opacity: 0.5,
    duration: 3000
  });
}, false);
menulink.addEventListener('mouseleave', function() {
  anime.remove(menulink_s);
  anime({
    targets: menulink_s,
    opacity: 0,
    duration: 3000
  });
}, false);*/


//WINDOW LOAD SECTION
// Window load fires when the document's window is ready for presentation
// once content is loaded, this will run
window.onload = () => {
  
  window.location.href = '#home';
  $('.sidenav').css('width','100px');
  // analyse initial bg colour and adjust textcolour accordingly
  initCol = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
  dynamicTextColour(tinycolor(initCol),[photosHeader,linklabel]);

  //let total = leon_intro.drawing.length;
  //console.log(total);
  //var count = 0;
  draw(leon_intro, 3.0);
  moveOut(leon_intro, 3.0);
  moveOut(leon_clicknotice,1.0);
  document.addEventListener(tap, function(e){
    pointerX = e.clientX || e.touches[0].clientX;
    pointerY = e.clientY || e.touches[0].clientY;
    var circle = createCircle(pointerX, pointerY);
    anime.timeline().add({
      targets: circle,
      radius: anime.random(40, 100),
      lineWidth: 0,
      alpha: {
        value: 0,
        easing: 'linear',
        duration: anime.random(600, 800),
      },
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule,
      offset: 0
    });
  });
};
