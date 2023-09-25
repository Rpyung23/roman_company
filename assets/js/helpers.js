const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
});

let loader = document.getElementById("preloader"); 
   const cargando = setTimeout(function() {
    loader.style.display = "none";
}, 2000);

let count = 0;
function changeBg(){
    let images = [
        'url("./assets/img/fondo2.jpg")',
        'url("./assets/img/fondo3.jpg")',
        'url("./assets/img/fondo4.jpg")',          
        'url("./assets/img/fondo.jpg")', 
    ]
    let body = document.querySelector('body');
    let bg = images[count];
    body.style.backgroundImage = bg; 
    count++;
  }

  let timerId = setInterval(changeBg, 5000);
  setTimeout(() => { clearInterval(timerId); }, 25000);
 