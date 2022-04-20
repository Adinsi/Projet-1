const button_1 = document.querySelector(".button_1");

const section_2 = document.querySelector('.section_2');

button_1.addEventListener('click',afficher);

function afficher (){
    if(section_2.style.display = 'none'){
        section_2.style.display= 'block'
    }
    button_1.style.display = 'none'
}
