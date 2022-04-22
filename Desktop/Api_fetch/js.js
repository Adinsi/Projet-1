const image = document.getElementById('image')

let ap ='https://api.thecatapi.com/v1/images/search';
fetch(ap)
.then(res => res.json())
.then(data => image.src=data[0].url)
.catch((err)=>{
    const erreur= document.querySelector('#erreur').innerHTML = 'erreur:(' 
    
})
