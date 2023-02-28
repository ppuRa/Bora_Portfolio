var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 300,  //패널 사이의 간격을 50px로 설정
  grabCursor: true, //스와이프 시 마우스 포인터 모양 변경

  centeredSlides : true, // 슬라이더 패널을을 항상 가운데로 반환

  autoplay: { //자동 슬라이드
  delay: 2500,
  disableOnInteraction: true
  }
});




// $(document).ready(function(){

//   // 화면의 넓이 값과 높이 값
//   let ht = $(window).height();
//   // console.log(ht);
//   let wt = $(window).width();
//   // console.log(wt);

  
// // 메뉴 클릭 시 상하스크롤 하기
// $('ul#menu li').click(function(e){
  
//   //고유의 기능을 막아준다.(a태그) 
//   e.preventDefault();

//   // 화면의 높이값
//   let ht = $(window).height();
//   // 클릭한 요소의 인덱스값
//   let i = $(this).index();
//   // 인덱스 값 * 화면의 높이 값
//   let nowTop = i * ht;
//   // 해당 위치로 스크롤 이동
//   $('html, body').stop().animate({scrollTop : nowTop},1400);

// });


// // 메뉴 클릭 시 상하스크롤 하기
// $('section').click(function(e){
  
//   //고유의 기능을 막아준다.(a태그) 
//   e.preventDefault();

//   // 화면의 높이값
//   let ht = $(window).height();
//   // 클릭한 요소의 인덱스값
//   let i = $(this).index();
//   // 인덱스 값 * 화면의 높이 값
//   let nowTop = i * ht;
//   // 해당 위치로 스크롤 이동
//   $('html, body').stop().animate({scrollTop : nowTop},1400);

// });


// // 마우스 휠의 움직임에 따라 화면 스크롤
// $('section').mousewheel(function(event, delta){
//   console.log(event);
//   console.log(delta);

//   if( delta > 0 ) {
//     let prev = $(this).prev().offset().top;
//     $('html, body').stop().animate({scrollTop : prev},1400);
//   } else if( delta < 0 ) {
//     let next = $(this).next().offset().top;
//     $('html, body').stop().animate({scrollTop : next},1400);
//   } 

// });



// });