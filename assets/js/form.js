window.addEventListener('DOMContentLoaded', function () {
<<<<<<< HEAD
    console.log('OK');
=======
    
>>>>>>> 92f0ca61fca1b5528c3a64625a9ababf6c5ddfb0
    // Récupérer la zone HTML dans la section du formulaire 
    const zone = document.getElementById('form-video-zone');
  
    // Créer le bouton 1 : découvrez nos destinations
    const btn1 = document.createElement('button');
    btn1.type = 'button';
    btn1.textContent = 'Découvrez nos destinations';
<<<<<<< HEAD
    btn1.className = 'button';
=======
    btn1.className = 'button bouton1-video';
>>>>>>> 92f0ca61fca1b5528c3a64625a9ababf6c5ddfb0

    // Créer le bouton 2 : masquer la vidéo
    const btn2 = document.createElement('button');
    btn2.type = 'button';
    btn2.textContent = 'Masquer la vidéo';
<<<<<<< HEAD
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
=======

    btn2.className = 'button bouton2-video';
    btn2.style.display = 'none';

    const videoContainer = document.createElement('div');

    // Créer la zone vidéo
    function createvideo(){
        
        const video = document.createElement('iframe'); //iframe puisque c'est une vidéo Youtube
        video.setAttribute('width', '560');
        video.setAttribute('height', '315');
        video.setAttribute('src', 'https://www.youtube.com/embed/dxWDcP1gvNk?si=tdWOGFB_RidNjOF9&autoplay=1');
        video.setAttribute('title', 'Vidéo Youtube voyage');
        video.setAttribute('frameborder', '0');
        video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        video.setAttribute('allowfullscreen', 'true'); // Plein écran
        video.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

        return video;
    }
>>>>>>> 92f0ca61fca1b5528c3a64625a9ababf6c5ddfb0

    // Ajouter tous les éléments dans la zone
    zone.appendChild(btn1);
    zone.appendChild(btn2);
    zone.appendChild(videoContainer);

    // Gérer les différents click
    btn1.addEventListener('click', function () {
        videoContainer.style.display = 'block';
        btn1.style.display = 'none';
        btn2.style.display = 'inline-block';
<<<<<<< HEAD
=======

        //On vérifie que la video n'existe pas encore
        if (!videoContainer.querySelector('iframe')) {
            const video = createvideo();
            videoContainer.appendChild(video);
        }
>>>>>>> 92f0ca61fca1b5528c3a64625a9ababf6c5ddfb0
    });

    btn2.addEventListener('click', function () {
        videoContainer.style.display = 'none';
        btn2.style.display = 'none';
        btn1.style.display = 'inline-block';
<<<<<<< HEAD
        video.pause();
        video.currentTime = 0;
=======
        
        const video_en_cours = videoContainer.querySelector('iframe');
        if (video_en_cours) {
            video_en_cours.remove();
        }
>>>>>>> 92f0ca61fca1b5528c3a64625a9ababf6c5ddfb0
    });
});
