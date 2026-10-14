// gemini.js - Hosted on GitHub
(function() {
  'use strict';

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.ctrlKey || e.altKey) return;

    const target = e.target;
    const isInput = target && (
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable ||
      target.getAttribute('role') === 'textbox'
    );

    if (!isInput) return;

    if (e.shiftKey) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    const sendBtn =
      document.querySelector('button[aria-label*="Send prompt"]') ||
      document.querySelector('button[aria-label*="Send"]') ||
      document.querySelector('.send-button button') ||
      document.querySelector('button.send-button');

    if (sendBtn && !sendBtn.disabled) {
      sendBtn.click();
    }
  }, true);
})();
