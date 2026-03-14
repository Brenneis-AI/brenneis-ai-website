<script>
    const plans = [
      {name:'Rookie League',tagline:'Step up to the plate—tools that just work.',price:'$127/mo',details:'Up to 1,000 contacts • Up to 5,000 emails • 200 SMS • 100 voice minutes • 400 AI Replies Per Month'},
      {name:'Single-A',tagline:'More at-bats, more leads, still lean.',price:'$197/mo',details:'Up to 2,500 contacts • Up To 10,000 emails • 400 SMS • 200 AI voice minutes • 800 AI Chat Replies Per Month'},
      {name:'Double-A',tagline:'Pro-level automations for rising contenders.',price:'$297/mo',details:'Up to 5,000 contacts • Up To 20,000 emails • 600 SMS • 300 AI voice minutes • 1,200 AI Chat Replies Per Month'},
      {name:'Triple-A',tagline:'High-volume hustle—ready for the big show.',price:'$397/mo',details:'Up to 10,000 contacts • Up To 40,000 emails • 1,000 SMS • 500 AI voice minutes • Unlimited AI Chat Replies Per Month'},
      {name:'Major League',tagline:'Enterprise power minus the enterprise bloat.',price:'$597/mo',details:'Up to 25,000 contacts • Up To 100,000 emails • 2,000 SMS • 1,000 AI voice minutes • Unlimited AI Chat Replies Per Month'},
      {name:'Dynasty',tagline:'Unlimited scale. Own the field, forever.',price:'$1197/mo',details:'Up to 100,000 contacts • Up To 500,000 emails • 5,000 SMS • 3,000 AI voice minutes • Unlimited AI Chat Replies Per Month'}
    ];

    const slider        = document.getElementById('contactSlider');
    const display       = document.getElementById('planDisplay');
    const arrowL        = document.getElementById('arrowLeft');
    const arrowR        = document.getElementById('arrowRight');
    const billingToggle = document.getElementById('billingMode');
    const monthlyLabel  = document.getElementById('monthlyLabel');
    const annualLabel   = document.getElementById('annualLabel');
    const compareBtn    = document.getElementById('compareBtn');
    const modal         = document.getElementById('comparisonModal');
    const modalClose    = document.getElementById('modalClose');

    function updatePlan() {
      const idx           = +slider.value;
      const p             = plans[idx];
      const monthlyPrice  = parseFloat(p.price.replace('$','').replace('/mo',''));
      const isAnnual      = billingToggle.checked;

      let priceHTML       = '';
      let savingsHTML     = '';

      if (isAnnual) {
        // 10% off for annual
        const annualMonthly = Math.floor(monthlyPrice * 0.9);
        const annualTotal   = annualMonthly * 12;
        const regularAnnualTotal = monthlyPrice * 12;
        const annualSavings = regularAnnualTotal - annualTotal;

        priceHTML = `<strong>$${annualMonthly}/mo</strong>`;
        savingsHTML = `
          <div class="plan-savings">
            <em>billed at $${annualTotal}/yr</em>
            <div>(Save $${annualSavings}/yr)</div>
          </div>
        `;
      } else {
        priceHTML = `<strong>${p.price}</strong>`;
      }

      const bulletItems = p.details
        .split('•')
        .map(item => `<li>${item.trim()}</li>`)
        .join('');

      display.innerHTML = `
        <div class="plan-name">${p.name}</div>
        <div class="plan-tagline">${p.tagline}</div>
        <div class="plan-price">${priceHTML}</div>
        ${savingsHTML}
        <ul class="plan-details">${bulletItems}</ul>
      `;

      arrowL.style.visibility = idx === 0                ? 'hidden' : 'visible';
      arrowR.style.visibility = idx === plans.length - 1 ? 'hidden' : 'visible';

      if (isAnnual) {
        annualLabel.classList.add('selected');
        monthlyLabel.classList.remove('selected');
      } else {
        monthlyLabel.classList.add('selected');
        annualLabel.classList.remove('selected');
      }
    }

    slider.addEventListener('input', updatePlan);
    billingToggle.addEventListener('change', updatePlan);
    arrowL.addEventListener('click', () => {
      if (+slider.value > 0) { slider.value--; updatePlan(); }
    });
    arrowR.addEventListener('click', () => {
      if (+slider.value < plans.length - 1) { slider.value++; updatePlan(); }
    });

    // Modal functionality
    compareBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    updatePlan();
</script>
