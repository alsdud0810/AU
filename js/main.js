// new Swiper('.partners .swiper-container', {
//   direction: 'horizontal', // 수평 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true, // 반복 재생 여부
//   spaceBetween: 30, // 슬라이드 사이 여백
//   slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
//   // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
//   navigation: { // 슬라이드 이전/다음 버튼 사용 여부
//     prevEl: '.partners .swiper-prev', // 이전 버튼 선택자
//     nextEl: '.partners .swiper-next' // 다음 버튼 선택자
//   }
// })

// new Swiper('.awards .swiper-container', {
//   direction: 'horizontal', // 수평 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true, // 반복 재생 여부
//   spaceBetween: 30, // 슬라이드 사이 여백
//   slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
//   // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
//   navigation: { // 슬라이드 이전/다음 버튼 사용 여부
//     prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
//     nextEl: '.awards .swiper-next' // 다음 버튼 선택자
//   }
// })

//<!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
  },
  loop: true,
  autoplay: true,
  pagination: {
  el: ".swiper-pagination",
  },
});

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ 
      triggerElement: spyEl, 
      triggerHook: .7 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

const toggleBtn=document.querySelector('.nav__button');
const menu= document.querySelector('.nav');
const menu1= document.querySelector('.main__nav');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menu1.classList.toggle('active');
});

const sol=document.querySelector('.solution');
const twosol= document.querySelector('.solutions-nav');
const twosol2=document.querySelector('#underline');
const twosol3=document.querySelector('.nav');
sol.addEventListener('click', () =>{
  twosol.classList.toggle('active');
  twosol2.classList.toggle('active');
  twosol3.classList.toggle('active2');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();