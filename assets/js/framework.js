(function () {
  function render() {
    if (!document.getElementById('booking-unavailable')) return;
    const q = new URLSearchParams(location.search);
    const id = q.get('tour') || q.get('id');
    const available = (window.TOURS || []).some(t => t.id === id);
    document.getElementById('booking-unavailable').hidden = available;
    document.getElementById('booking-content').hidden = !available;
  }
  // Old URLs cannot submit a request for a withdrawn or unselected product.
  document.addEventListener('DOMContentLoaded',() => {
    if (typeof window.submitBookingMail === 'function') {
      const original = window.submitBookingMail;
      window.submitBookingMail = function () {
        const q = new URLSearchParams(location.search);
        const id = q.get('tour') || q.get('id');
        if (!(window.TOURS || []).some(t => t.id === id)) { render(); return; }
        return original.apply(this,arguments);
      };
    }
    render();
  });
})();
