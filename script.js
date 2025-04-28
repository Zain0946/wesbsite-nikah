
// Fungsi: Fade-in efek saat scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Fungsi: Kontrol musik (pause/play)
const music = document.getElementById('backgroundMusic');

// Cek kalau user klik di mana saja untuk mulai musik (browser kadang block autoplay)
document.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    }
});

// Buat tombol untuk kontrol manual
const musicButton = document.createElement('button');
musicButton.innerHTML = "🎵 Play/Pause Musik";
musicButton.className = "music-button";
document.body.appendChild(musicButton);

musicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

// Fungsi: Bunga jatuh
setInterval(() => {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}, 300);
