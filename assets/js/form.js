window.addEventListener('DOMContentLoaded', function () {
    console.log(document.getElementById('form-video-zone'));
    // Récupérer la zone HTML dans la section du formulaire 
    const zone = document.getElementById('form-video-zone');
  
    // Créer le bouton 1 : découvrez nos destinations
    const btn1 = document.createElement('button');
    btn1.type = 'button';
    btn1.textContent = 'Découvrez nos destinations';
    btn1.className = 'button bouton1-video';

    // Créer le bouton 2 : masquer la vidéo
    const btn2 = document.createElement('button');
    btn2.type = 'button';
    btn2.textContent = 'Masquer la vidéo';
    btn2.className = 'button bouton2-video';
    btn2.style.display = 'none';

    const videoContainer = document.createElement('div');
    videoContainer.style.display = 'none';

    
    // Ajouter tous les éléments dans la zone
    zone.appendChild(btn1);
    zone.appendChild(videoContainer);
    zone.appendChild(btn2);
    

    // Créer la zone vidéo
    function createvideo(){
        
        const video = document.createElement('iframe'); //iframe puisque c'est une vidéo Youtube
        video.setAttribute('width', '280');
        video.setAttribute('height', '155');
        video.setAttribute('src', 'https://www.youtube.com/embed/dxWDcP1gvNk?si=tdWOGFB_RidNjOF9&autoplay=1');
        video.setAttribute('title', 'Vidéo Youtube voyage');
        video.setAttribute('frameborder', '0');
        video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        video.setAttribute('allowfullscreen', 'true'); // Plein écran
        video.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

        return video;
    }

    // Gérer les différents click
    btn1.addEventListener('click', function () {
        videoContainer.style.display = 'block';
        btn1.style.display = 'none';
        btn2.style.display = 'inline-block';

        //On vérifie que la video n'existe pas encore
        if (!videoContainer.querySelector('iframe')) {
            const video = createvideo();
            videoContainer.appendChild(video);
        }
    });

    btn2.addEventListener('click', function () {
        videoContainer.style.display = 'none';
        btn2.style.display = 'none';
        btn1.style.display = 'inline-block';
        
        const video_en_cours = videoContainer.querySelector('iframe');
        if (video_en_cours) {
            video_en_cours.remove();
        }
    });
});
