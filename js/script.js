// Slider
var news = document.querySelector('.NewsRow');
news.innerHTML = '';
var k = 0;
var animi='';
for (var i = 0; i < 4; i++) {
  var subNews = '';
  for (var j = 0; j < 3; j++) {
    k++;
    if(j===0){
      animi='fadeInLeft';
    }
    else if(j===1)
    {
      animi='fadeIn';
    }
    else{
      animi='fadeInRight';
    }
    subNews += `
    <div class="col s12 m4">
  <div class="card wow ${animi}">
      <div class="card-image">
          <img src="images/0${k + 43}.jpg">
          <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
          <p>I am good at containing small bits of information.
          lojnvdcj clkj zljcx zm ckjzxc,m, vckjcnv kjsv kd  khsfk dfkjv bndfjvvkj
          bv jnk vifdbvn cijdfkvfdikjdfnvkjbnfjk
              </p>
      </div>
      <div class="card-action">
          <a href="#">This is a link</a>
      </div>
  </div>
</div>
    `;

  }
  news.innerHTML += `
  <div class="slide">
  ${
    subNews
    }
  </div>`;
}
// slider News
var slideImages = document.querySelectorAll('.slide');
current = 0;

function reset() {
  for (var i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }
}

function startSlider() {
  reset();
  slideImages[0].style.display = "block";
}
startSlider();
// next slide
function rightSlide() {
  reset();
  slideImages[current + 1].style.display = "block";
  current++;
}
function autoslider() {
  if (current === slideImages.length - 1) {
    current = -1;
  }
  rightSlide();
  setTimeout(autoslider, 3000)
}
autoslider();
// cubes
var row = document.querySelector('#flexCube');
var cube;
row.innerHTML = '';
for (var i = 0; i < 3; i++) {
  cube = '';
  for (var j = 0; j < 3; j++) {
    if(j===0){
      animi='fadeInLeft';
    }
    else if(j===1)
    {
      animi='fadeIn';
    }
    else{
      animi='fadeInRight';
    }
    cube += `
    <div class="col s12 m4 cubeBox">
                                <div class="cube wow ${animi}">
                                        <div class="sub">
                                            <div class="side front redBack">
                                                1
                                            </div>
                                            <div class="side back">2</div>
                                        </div>
                                    </div>
                        </div>
    `;
  }
  row.innerHTML += `<div class='row'>
  ${cube}
  </div>
  `;
}
// cube end
row = document.querySelector('.clientsRow');
cube;
row.innerHTML = '';
for (var i = 0; i < 3; i++) {
  cube = '';
  for (var j = 0; j < 3; j++) {
    if(j===0){
      animi='fadeInLeft';
    }
    else if(j===1)
    {
      animi='fadeIn';
    }
    else{
      animi='fadeInRight';
    }
    cube += `
    <div class="col s12 m4 center">
                        <div class="clientsIcon wow ${animi}">

                        </div>
                </div>
    `;
  }
  row.innerHTML += `<div class='row'>
  ${cube}
  </div>
  `;
}
// wow.js
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
  