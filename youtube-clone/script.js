var menuIcon = document.querySelector('.nav__menu');
var sidebar = document.querySelector('.sidebar');
var videoContainer = document.querySelector('.video-container');

menuIcon.addEventListener('click', function () {
   sidebar.classList.toggle('sidebar--small');
   videoContainer.classList.toggle('video-container--large');
});
