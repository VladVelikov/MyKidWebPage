function work(){
    let buton1 = document.getElementById('one');
    let buton2 = document.getElementById('two');
    let buton3 = document.getElementById('three');
    let buton4 = document.getElementById('small');

    buton1.addEventListener('click', pic1raise);
    buton2.addEventListener('click', pic2raise);
    buton3.addEventListener('click', pic3raise);
    buton4.addEventListener('click', small);

}



function pic1raise(){
    let pic = document.querySelector('.card1');
    pic.style.maxWidth = '18.7em';
    pic.style.maxHeight = '18.7em';
    pic.style.transform = 'Rotate(360deg)';
    pic.style.boxShadow = '0 0 3em 0.3em lightcoral';
    pic.style.transition = '4s ease-in';

}

function pic2raise(){
    let pic = document.querySelector('.card2');
    pic.style.maxWidth = '18.7em';
    pic.style.maxHeight = '18.7em';
    pic.style.transform = 'Rotate(360deg)';
    pic.style.boxShadow = '0 0 3em 0.3em lightcoral';
    pic.style.transition = '4s ease-in';

}

function pic3raise(){
    let pic = document.querySelector('.card3');
    pic.style.maxWidth = '18.7em';
    pic.style.maxHeight = '18.7em';
    pic.style.transform = 'Rotate(360deg)';
    pic.style.boxShadow = '0 0 3em 0.3em lightcoral';
    pic.style.transition = '4s ease-in';

}

function small(){
    let pic1 = document.querySelector('.card1');
    pic1.style.maxWidth = '6em';
    pic1.style.maxHeight = '6em';
    let pic2 = document.querySelector('.card2');
    pic2.style.maxWidth = '6em';
    pic2.style.maxHeight = '6em';
    let pic3 = document.querySelector('.card3');
    pic3.style.maxWidth = '6em';
    pic3.style.maxHeight = '6em';
}
