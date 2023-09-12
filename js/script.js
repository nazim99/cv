'use strict'

// ========
// Slider
// ========

$(document).ready(function(){
  $('.slider').slick({  
      slidesToShow: 2 ,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      arrows:false,

   responsive: [
    {
      breakpoint: 490,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 560,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
      }
    }

  ]   

  });

});


// ===============
// 	header
// ===============

var openMenue = document.querySelector('.manue-bar');
var closeMenue = document.querySelector('.btn-close');
var mobileMenue = document.querySelector('.btn-nav');


openMenue.addEventListener('click', function(){
	mobileMenue.style.transform = 'translateX(0)';
	closeMenue.style.display = 'block';  
})
closeMenue.addEventListener('click', function(){
	mobileMenue.style.transform = 'translateX(100%)';
})

// =================
//  Manue show/Hide
// =================

var acc = document.querySelector('.arrow-drop');
var showText = document.querySelector('.sub-manue-container');
var giftProgram = document.querySelector('.gift');
acc.addEventListener('click', function(){
  if(showText.style.display === 'block'){
      showText.style.display = 'none';
  }
  else{
    showText.style.display = 'block';
    // giftProgram.style.paddingTop = '30px';
    // console.log(giftProgram.style.paddingTop)
  }

})




