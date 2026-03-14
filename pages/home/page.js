<script>
/* ========================================
   HOME PAGE — CONSOLIDATED SCRIPTS
   Source: pages/home/page.js
   Paste into GHL Footer Tracking Code field
   ======================================== */

/* ========================================
   SMOOTH SCROLL TO SECTIONS
   (from section-home1.html)
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        history.pushState(null, null, targetId);
      }
    });
  });
});

/* ========================================
   FAQ ACCORDION
   (from section-faq7.html)
   Includes aria-expanded toggle for WCAG AA
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  // CATEGORY ACCORDION FUNCTIONALITY
  const categoryItems = document.querySelectorAll('.faq-category-item');

  categoryItems.forEach((catItem) => {
    const catButton = catItem.querySelector('.faq-category-question');
    catButton.setAttribute('aria-expanded', 'false');

    catButton.addEventListener('click', () => {
      // Close any other open category
      const openCat = document.querySelector('.faq-category-item.active');
      if (openCat && openCat !== catItem) {
        openCat.classList.remove('active');
        openCat.querySelector('.faq-category-question').setAttribute('aria-expanded', 'false');
      }
      // Toggle this category
      catItem.classList.toggle('active');
      const isOpen = catItem.classList.contains('active');
      catButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // QUESTION-ANSWER ACCORDION FUNCTIONALITY
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.setAttribute('aria-expanded', 'false');

    question.addEventListener('click', () => {
      // Collapse any other open answer in the same category
      const openItem = item.closest('.faq-accordion').querySelector('.faq-item.active');
      if (openItem && openItem !== item) {
        openItem.classList.remove('active');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      }
      // Toggle this answer
      item.classList.toggle('active');
      const isOpen = item.classList.contains('active');
      question.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
});
</script>
