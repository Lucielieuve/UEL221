window.addEventListener('DOMContentLoaded', function () {
    console.log('OK');
    // Récupérer la zone HTML dans la section du formulaire 
    const zone = document.getElementById('form-video-zone');
  
    // Créer le bouton 1 : découvrez nos destinations
    const btn1 = document.createElement('button');
    btn1.type = 'button';
    btn1.textContent = 'Découvrez nos destinations';
    btn1.className = 'button';

    // Créer le bouton 2 : masquer la vidéo
    const btn2 = document.createElement('button');
    btn2.type = 'button';
    btn2.textContent = 'Masquer la vidéo';
    btn2.className = 'button';
    btn2.style.display = 'none';

    // Créer la zone vidéo
    const videoContainer = document.createElement('div');
    const video = document.createElement('iframe');
    video.setAttribute('width', '560');
    video.setAttribute('height', '315');
    video.setAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ'); // "Never Gonna Give You Up" (publique, sans restrictions)

    video.setAttribute('title', 'Vidéo Youtube voyage');
    video.setAttribute('frameborder', '0');
    video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    video.setAttribute('allowfullscreen', 'true'); // Plein écran
    video.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

    videoContainer.appendChild(video);
    videoContainer.style.display = 'none';

    // Ajouter tous les éléments dans la zone
    zone.appendChild(btn1);
    zone.appendChild(btn2);
    zone.appendChild(videoContainer);

    // Gérer les différents click
    btn1.addEventListener('click', function () {
        videoContainer.style.display = 'block';
        btn1.style.display = 'none';
        btn2.style.display = 'inline-block';
    });

    btn2.addEventListener('click', function () {
        videoContainer.style.display = 'none';
        btn2.style.display = 'none';
        btn1.style.display = 'inline-block';
        video.pause();
        video.currentTime = 0;
    });
});
