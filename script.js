document.addEventListener("DOMContentLoaded", () => {
    const socialButtons = document.querySelectorAll('.btn');
    const photoImages = document.querySelectorAll('.gallery .photos img'); // Pilih gambar untuk animasi

    // Pop-up alert saat tautan diklik
    socialButtons.forEach((button) => {
        button.addEventListener('click', () => {
            alert(`You are about to visit ${button.textContent.trim()}.`);
        });
    });

    // Menggunakan Intersection Observer untuk mendeteksi gambar ketika terlihat di viewport
    const observerOptions = {
        root: null,  // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1  // 10% gambar terlihat di viewport
    };

    // Memulai observer pada setiap gambar
    photoImages.forEach(img => observer.observe(img));
});
