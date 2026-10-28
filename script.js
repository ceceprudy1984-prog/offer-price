// 1. Loader: sembunyikan setelah halaman selesai dimuat
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('done'), 650);
});

// 2. Menu navigasi (buka/tutup)
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
    menu.textContent = open ? '×' : '☰';
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = '☰';
}));

// 3. Animasi muncul saat di-scroll
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    }
}), { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 4. Tautan WhatsApp
// Ganti nomor berikut dengan nomor internasional, tanpa tanda +, spasi, atau tanda baca.
const whatsappNumber = '6285872636941';
const whatsappMessage = encodeURIComponent('Halo Rudy84, saya ingin konsultasi tentang pemasaran digital untuk bisnis fashion saya.');

document.querySelectorAll('.wa-link').forEach(link => {
    link.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
});
