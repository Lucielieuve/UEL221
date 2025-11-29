window.addEventListener('load', function () {
    // Récupérer la zone HTML dans la section du formulaire 
    const zone = document.getElementById('form-video-zone');
  
    // Créer le bouton 1 : découvrez nos services
    const btn1 = document.createElement('button');
    btn1.type = 'button';
    btn1.textContent = 'Découvrez nos services';
    btn1.className = 'button';

    // Créer le bouton 2 : masque la vidéo
    const btn2 = document.createElement('button');
    btn2.type = 'button';
    btn2.textContent = 'Masquer la vidéo';
    btn2.className = 'button';
    btn2.style.display = 'none';

    // Créer la zone vidéo
    const videoWrapper = document.createElement('div');
    const video = document.createElement('video');
    video.src = 'http://tecfa.unige.ch/guides/html/html5-video/videos/state-of-wikipedia-480x272.ogv';
    video.controls = true;
    video.width = 480;

    videoWrapper.appendChild(video);
    videoWrapper.style.display = 'none';

    // Ajouter tous les éléments dans la zone
    zone.appendChild(btn1);
    zone.appendChild(btn2);
    zone.appendChild(videoWrapper);

    // Gérer les différents click
    btn1.addEventListener('click', function () {
        videoWrapper.style.display = 'block';
        btn1.style.display = 'none';
        btn2.style.display = 'inline-block';
    });

    btn2.addEventListener('click', function () {
        videoWrapper.style.display = 'none';
        btn2.style.display = 'none';
        btn1.style.display = 'inline-block';
        video.pause();
        video.currentTime = 0;
    });
});

$(document).ready(function ($) {
   $('.js-main-nav-button').on('click tap', function() {
       $('#main-nav').toggleClass('is-open');
   });
    
    $('.js-gallery').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
});

