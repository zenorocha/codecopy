import Clipboard from 'clipboard';
import {htmlButton, isLargeButton} from './util';

// Scan for code snippets and append buttons

const snippets = document.querySelectorAll('pre');

snippets.forEach((snippet) => {
  const parent = snippet.parentNode;
  const wrapper = document.createElement('div');

  parent.replaceChild(wrapper, snippet);
  wrapper.appendChild(snippet);

  wrapper.classList.add('codecopy');
  wrapper.firstChild.insertAdjacentHTML('beforebegin', htmlButton);

  if (isLargeButton()) {
    wrapper.classList.add('codecopy-lg');
  }
});

// Add copy to clipboard functionality and user feedback

const clipboard = new Clipboard('.codecopy-btn', {
  target: (trigger) => {
    return trigger.parentNode;
  }
});

clipboard.on('success', (e) => {
  e.trigger.setAttribute('aria-label', 'Copied!');
  e.clearSelection();
});

// Replace tooltip message when mouse leaves button
// and prevent page refresh after click button

const btns = document.querySelectorAll('.codecopy-btn');

btns.forEach((btn) => {
  btn.addEventListener('mouseleave', (e) => {
    e.target.setAttribute('aria-label', 'Copy to clipboard');
    e.target.blur();
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault()
  });
});
