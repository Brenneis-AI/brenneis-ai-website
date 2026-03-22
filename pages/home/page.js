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

(function() {
  function initSmoothScroll() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          history.pushState(null, null, targetId);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();

/* ========================================
   FAQ ACCORDION
   (from section-faq7.html)
   Includes aria-expanded toggle for WCAG AA
   ======================================== */

(function() {
  function initFaqAccordion() {
    // CATEGORY ACCORDION FUNCTIONALITY
    var categoryItems = document.querySelectorAll('.faq-category-item');

    categoryItems.forEach(function(catItem) {
      var catButton = catItem.querySelector('.faq-category-question');
      catButton.setAttribute('aria-expanded', 'false');

      catButton.addEventListener('click', function() {
        // Close any other open category
        var openCat = document.querySelector('.faq-category-item.active');
        if (openCat && openCat !== catItem) {
          openCat.classList.remove('active');
          openCat.querySelector('.faq-category-question').setAttribute('aria-expanded', 'false');
        }
        // Toggle this category
        catItem.classList.toggle('active');
        var isOpen = catItem.classList.contains('active');
        catButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });

    // QUESTION-ANSWER ACCORDION FUNCTIONALITY
    var items = document.querySelectorAll('.faq-item');
    items.forEach(function(item) {
      var question = item.querySelector('.faq-question');
      question.setAttribute('aria-expanded', 'false');

      question.addEventListener('click', function() {
        // Collapse any other open answer in the same category
        var openItem = item.closest('.faq-accordion').querySelector('.faq-item.active');
        if (openItem && openItem !== item) {
          openItem.classList.remove('active');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
        // Toggle this answer
        item.classList.toggle('active');
        var isOpen = item.classList.contains('active');
        question.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqAccordion);
  } else {
    initFaqAccordion();
  }
})();
</script>
