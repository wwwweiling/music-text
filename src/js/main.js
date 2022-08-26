$(document).ready(function(){
    $('.header_slider').slick({
      arrows : false,
      dots: true,
      // infinite: true,
      // waitForAnimate : true,
      fade: true,
      speed:300,
    });
    })
    //go_down圖至service~
  function go_down(){
    let scroll_y =document.querySelector(".service").getBoundingClientRect().y
    window.scrollBy({ 
    top:scroll_y,
    left: 0,
    behavior: 'smooth'});
  }



  document.addEventListener("scroll",function(event){
    if(window.scrollY>75){
        document.getElementById("nav").classList.add("fixed");
        // document.getElementsByClassName("logo").classList.add("logo2");
    }
    else{
        document.getElementById("nav").classList.remove("fixed");
        // document.getElementsByClassName("logo").classList.remove("logo2");

    }

  })