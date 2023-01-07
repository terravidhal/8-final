

window.onload = () =>{

    /******** DECLARATION DES VARIABLES ************/
    
    var asideLeft = document.getElementById("aside-left");
    var IconBurger = document.querySelector(".header-icon-burger i");
    var menuLists = document.querySelectorAll(".menu-lists > li > a");
    
    /********  AFFICHACHE/MASQUAGE  PARTIE ASIDE-LEFT : clique sur l'icone burger ************/
        
    IconBurger.addEventListener("click", ()=>{
       
        if (getComputedStyle(asideLeft).zIndex == "0" ) {
            asideLeft.style.zIndex = "555";
        }
        else{
            asideLeft.style.zIndex = "0";
        }
    })

    /******** MASQUAGE  PARTIE ASIDE-LEFT : clique sur un menulist ************/

    for (let index = 0; index < menuLists.length; index++) {
        const menuList = menuLists[index];
        menuList.addEventListener("click", ()=>{
            
            asideLeft.style.zIndex = "0";
        })
        
    } 

}










