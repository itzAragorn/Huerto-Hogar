
    const carrusel = document.getElementById('carrusel');
    const slides = carrusel.querySelectorAll('.slide');
    const prevBtn = carrusel.querySelector('.prev');
    const nextBtn = carrusel.querySelector('.next');

    let current = 0;
    let autoplay;

    function applyClasses() {
      slides.forEach(s => {
        s.classList.remove('active', 'prev', 'next');
        s.style.opacity = 0;
        s.style.pointerEvents = 'none';
        s.style.zIndex = 1;
      });

      const prev = (current - 1 + slides.length) % slides.length;
      const next = (current + 1) % slides.length;

      slides[current].classList.add('active');
      slides[current].style.opacity = 1;
      slides[current].style.pointerEvents = 'auto';
      slides[current].style.zIndex = 3;

      slides[prev].classList.add('prev');
      slides[prev].style.opacity = 0.95;
      slides[prev].style.zIndex = 2;

      slides[next].classList.add('next');
      slides[next].style.opacity = 0.95;
      slides[next].style.zIndex = 2;
    }

    function goNext() {
      current = (current + 1) % slides.length;
      applyClasses();
    }

    function goPrev() {
      current = (current - 1 + slides.length) % slides.length;
      applyClasses();
    }

    function startAutoplay() {
      stopAutoplay();
      autoplay = setInterval(goNext, 5000);
    }
    function stopAutoplay() {
      if (autoplay) clearInterval(autoplay);
    }

    nextBtn.addEventListener('click', () => { goNext(); startAutoplay(); });
    prevBtn.addEventListener('click', () => { goPrev(); startAutoplay(); });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { goNext(); startAutoplay(); }
      if (e.key === 'ArrowLeft') { goPrev(); startAutoplay(); }
    });

    applyClasses();
    startAutoplay();


