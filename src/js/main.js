function go_down(){
    let scroll_y =document.querySelector(".card").getBoundingClientRect().y
    window.scrollBy({ 
    bottom:scroll_y,
    left: 0,
    behavior: 'smooth'});
  }



//   document.addEventListener("scroll",function(event){
//     if(window.scrollY>75){
//         document.getElementById("nav").classList.add("fixed");
//         // document.getElementsByClassName("logo").classList.add("logo2");
//     }
//     else{
//         document.getElementById("nav").classList.remove("fixed");
//         // document.getElementsByClassName("logo").classList.remove("logo2");

//     }

//   })

// function AA(){
//     let scroll =
// }