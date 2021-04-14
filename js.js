

//------------------------popup menu show/hidde

/*const container=document.querySelector(".container")
const hamburger_menu=document.querySelector(".hamburger_menu")
function popup(){
    container.classList.toggle("popup")
}
hamburger_menu.onclick= popup*/


document.querySelector(".hamburger_menu").addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("popup")
})


//-------------------------end----------------------------------------
//-------------------------card_animation------------------------------


const cards=document.querySelectorAll('.card')
for(let card of cards){
    card.onmousemove=move
    card.onmouseleave=mouseleave

}
function move(e){
    let box = this.getBoundingClientRect();
    let cor_x=e.x-box.left
    let cor_y=e.y-box.top
    let param_x=20/this.clientWidth
    let param_y=20/this.clientHeight
    let angle_x=-10+cor_x*param_x
    let angle_y=10-cor_y*param_y
    this.style.transform="rotate3d(0, 1, 0,"+angle_x+"deg) rotate3d(1,0 , 0,"+angle_y+"deg)"



    //console.log(cor_x+" ----------- "+cor_y+" anglex "+(10-cor_x*param_x)+" angley "+(10-cor_y*param_y) )
    
    
}
function mouseleave(){
    this.style.transform="rotate3d(0, 1, 0,0deg) rotate3d(1,0 , 0,0deg)"

}
//---------------------------end------------------------------
//smooth scroldown-------------------------------------
const scroll_btn=document.querySelector(".scroll");
function scroll_f(){
    
    let scroll_position=document.documentElement.scrollTop
    let interval=setInterval(()=>{
        
        scroll_position-=15
        window.scroll({
            top: scroll_position,
            left:0,
            behavior:"smooth"  
        })
        if(scroll_position<=0){
            clearInterval(interval)
        }


    },1)
   
}

scroll_btn.onclick=scroll_f
//-------------------------------------end---------------------------
//-------------------change color of menu icon and show/hidde scroll btn-------
const lines=document.querySelectorAll(".line")
window.onscroll = function() {show_btn()};
function show_btn() {
    

    if (document.querySelector('.main_header').getBoundingClientRect().y < -72) {
      scroll_btn.classList.add('show_scroll')
      
      
    } else {
      scroll_btn.classList.remove('show_scroll')
      
      
    }
  
    
  
    if(document.querySelector('.about_us').getBoundingClientRect().y < 80 && document.querySelector('.contact').getBoundingClientRect().y>65 ){
        
        for(let line of lines){
            line.classList.add('change_color')
        }
    
        
    }else{
      for(let line of lines){
          line.classList.remove('change_color')
      }
  
    }
  }
  /*-------------------------ende--------------------------*/
  /*--------------loading animation---------------------*/
  window.onload=()=>{
    setTimeout(()=>{
        document.querySelector('body').classList.add("loaded")
        console.log("uros")

    },3000)
    
}

