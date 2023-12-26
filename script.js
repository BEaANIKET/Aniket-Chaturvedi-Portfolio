
let menuBtn = document.querySelector('.hamberger').querySelector('img');
menuBtn.addEventListener('click',function(){
    console.log('hello ');
    document.querySelector('.navItem').classList.toggle('lost');
})

let autoType = document.querySelector('.autoType');
var type = new Typed('.autoType',{
    strings : ['Aniket Chaturvedi','Frontend Developer','Freelancer'],
    typeSpeed:150,
    backSpeed : 100,
    loop:true
})
