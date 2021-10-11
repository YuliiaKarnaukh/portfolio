$('.single-item').slick();

let mouseCursor = document.querySelector('.cursor');
let menuNav = document.querySelectorAll('.menuNav .menu')
window.addEventListener('mousemove', cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}   

//LINKS ANCOR

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


// -> mouse-hover
// .menu - .footerLinks a - .emailFooter -> hover-content

document.querySelectorAll('.hover-content').forEach(link => {
  link.addEventListener('mouseleave',() =>{
    mouseCursor.classList.remove('mouse-hover');
  });
    link.addEventListener('mouseover',() =>{
    mouseCursor.classList.add('mouse-hover');
  });
});

document.querySelector('.colorCursor').addEventListener('mouseleave', () => {
  mouseCursor.classList.remove('black-mouse');
});

document.querySelector('.colorCursor').addEventListener('mouseover', () => {
   mouseCursor.classList.add('black-mouse');
});

document.querySelector('.img-about').addEventListener('mouseleave', () => {
  mouseCursor.style.zIndex = 0;
});

document.querySelector('.img-about').addEventListener('mouseover', () => {
   mouseCursor.style.zIndex = 10;
});
