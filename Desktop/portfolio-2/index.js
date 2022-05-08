const header = document.getElementById('header');

const h2 = document.getElementById('h2');

const comp = document.getElementById('comp');

const texte = document.querySelector('.texte');

const para = document.querySelector('.texte p');

const educ = document.getElementById('educ');

const cont = document.getElementById('cont');

const slider = document.querySelector(".slider")


comp.addEventListener('mouseover', () => {
    header.style.backgroundColor = '#000'
    h2.innerText = 'compétences';
    para.innerHTML = "<ul id='ulu'> <li>Decouper et intégrer une maquete graphique en HTML 5.</li><li>Realiser des interfaces web statique et adaptable en respectant les standars du web et les normes en vigeur.</li><li>Mettre en forme des pages web avec CSS3.</li><li>Utilisation du prépocessur CSS:SASS</><li>Le responsive avec Bootstrap</li><li>Optimiser le référencement naturel.</li><li>Utiliser les outils de versionnig git et github pour gerer mon code source.</li><li>Musicien de formation/Pianiste</li></ul>";
    para.style.color = 'white';
    
    ;
    
    
});
comp.addEventListener('mouseout', () => {
    header.style.backgroundColor = '';
    h2.innerText = 'adinsi abdias';
    para.style.color = '';
    para.innerHTML =
      "Bienvenue sur ma page de présentation. Je me nomme ADINSI Abdias ,je suis en formation un auto-dictacte sur plusieurs sites de formation.";
});

educ.addEventListener("mouseover", () => {
  header.style.backgroundColor = "#000";
  h2.innerText = "education";
  para.innerHTML =
    "<ul id='ul'> <li>formation sur openClassroom : APPRENEZ A CREER VOTRE SITE WEB EN HTML5 ET CSS3.</li><li>Formation sur OpenClassroom : APPRENEZ A PROGRAMMEZ AVEC JAVASCRIPT.</li><li>Formation sur OpenClassroom / ECRIVEZ DU JAVASCRIPT POUR LE WEB</li><li> Redacteur web.</li></ul>";
  para.style.color = "white";
});
educ.addEventListener("mouseout", () => {
  header.style.backgroundColor = "";
  h2.innerText = "adinsi abdias";
  para.style.color = "";
  para.innerHTML =
    "Bienvenue sur ma page de présentation. Je me nomme ADINSI Abdias ,je suis en formation un auto-dictacte sur plusieurs sites de formation.";
});

cont.addEventListener("mouseover", () => {
  header.style.backgroundColor = "#000";
  h2.innerText = "contact";
  para.innerHTML = '<p>whatsapp : +229 53037832</p><p>Email : adinsiabdias@gmail.com</p><p>Github : Abdias Dev</p>'
    ;
  para.style.color = "white";
});
cont.addEventListener("mouseout", () => {
  header.style.backgroundColor = "";
  h2.innerText = "adinsi abdias";
  para.style.color = "";
  para.innerHTML =
    "Bienvenue sur ma page de présentation. Je me nomme ADINSI Abdias ,je suis en formation un auto-dictacte sur plusieurs sites de formation.";
});

proj.addEventListener("mouseover", () => {
  header.style.backgroundColor = "#000";
  h2.innerText = "projet";
  para.innerHTML =
    "<ul id='ul'> <li>Réaliser des sites web dynamiques tout en apprenant du fonctionnement d'une startup </li><li>Developper des sites web dans le domaine de la santé permettant de gérer les clients</li></ul>";
  para.style.color = "white";
  slider.style.zIndex="6"
  
   ;

  
  ;
 
 
});


proj.addEventListener("mouseout", () => {
  header.style.backgroundColor = "";
  h2.innerText = "adinsi abdias";
  para.style.color = "";
  para.innerHTML =
    "Bienvenue sur ma page de présentation. Je me nomme ADINSI Abdias ,je suis en formation un auto-dictacte sur plusieurs sites de formation.";
    slider.style.zIndex=""
});

