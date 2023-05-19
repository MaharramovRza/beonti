
let burgermenu = document.querySelector("#burgermenu")
let burgerdrop = document.querySelector("#navbar ul");

burgermenu.addEventListener("click", function () {
  if (burgerdrop.classList.contains("active") == true) {
    burgerdrop.classList.remove("active")
  }
  else {
    burgerdrop.classList.add("active");
  }
});

let right = document.querySelector("#banner #right");
let firstImg = document.querySelector("#banner-img img");


if(right != null){
right.addEventListener("click", function () {
  let activeImg = document.querySelector("#banner #banner-img img.active");
  let nextImg = activeImg.nextElementSibling;

  activeImg.classList.remove("active");
  if (nextImg == null) {
    firstImg.classList.add("active");
  }
  else {
    nextImg.classList.add("active");
  }
});
}


let left = document.querySelector("#banner #left");
let lastImg = document.querySelector("#banner-img img:last-child");

if(left != null){

left.addEventListener("click", function () {
  let activeImg = document.querySelector("#banner #banner-img img.active");
  let prevImg = activeImg.previousElementSibling;

  activeImg.classList.remove("active");
  if (prevImg == null) {
    lastImg.classList.add("active");
  }
  else {
    prevImg.classList.add("active");
  }
});
}
// let burgermenu = document.querySelector("#burgermenu")
// let burgerdrop = document.querySelector("#navbar ul");

// burgermenu.addEventListener("click", function () {
//   if (burgerdrop.classList.contains("active") == true) {
//     burgerdrop.classList.remove("active")
//   }
//   else {
//     burgerdrop.classList.add("active");
//   }
// });


if (window.innerWidth <= 576) {

  let successStories = document.querySelectorAll(".success-story");
  let firstImg = document.querySelector(".success-story")
  for (let i = 0; i < successStories.length; i++) {
    successStories[i].addEventListener("click", function () {
      let nextStory = this.nextElementSibling;
      this.classList.remove("active2");
      if (nextStory == null) {
        firstImg.classList.add("active2")
      }
      else {
        nextStory.classList.add("active2");

      }
    })
  }
}


if (window.innerWidth <= 576) {
  let changebuttons = document.querySelectorAll(".change");
  // let activePlan = document.querySelector("#pricingplan .plan.active");
  let firstPlan = document.querySelector(".plan");
  for (let i = 0; changebuttons.length; i++) {
    changebuttons[i].addEventListener("click", function () {
      let activePlan = document.querySelector("#pricingplan .plan.active");
      let nextPlan = activePlan.nextElementSibling;
      activePlan.classList.remove("active");
      if (nextPlan == null) {
        firstPlan.classList.add("active");
      }
      else {
        nextPlan.classList.add("active");
      }

      nextPlan.classList.add("active");
    })
  }
}

// document.querySelector(".business").addEventListener("click",function(){
//   console.log("click");
// });

if (window.innerWidth <= 576) {

  


  let allbusiness = document.querySelectorAll(".business");

  for (let i = 0; allbusiness.length; i++) {
    allbusiness[i].addEventListener("click", function () {
    
      if (allbusiness[i].classList.contains("active") == true) {
        allbusiness[i].classList.remove("active");
      }
      else {
        allbusiness[i].classList.add("active");
      }
    });
  }
}







