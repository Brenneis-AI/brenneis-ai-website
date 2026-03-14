<script>
  // DESKTOP: Feature hover interaction
  const featureItems = document.querySelectorAll('.feature-item');
  const featureImages = document.querySelectorAll('.feature-image');

  featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      featureItems.forEach(i => i.classList.remove('active'));
      featureImages.forEach(img => img.classList.remove('active'));

      item.classList.add('active');
      const feature = item.dataset.feature;
      document.getElementById(`img-${feature}`).classList.add('active');
    });
  });

  // MOBILE: Accordion interaction
  const accordionCards = document.querySelectorAll('.feature-accordion-card');

  accordionCards.forEach(card => {
    const header = card.querySelector('.feature-accordion-header');

    header.addEventListener('click', () => {
      // Close all other cards
      accordionCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('active');
        }
      });

      // Toggle current card
      card.classList.toggle('active');
    });
  });
</script>
