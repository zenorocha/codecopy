import ClipboardJS from 'clipboard';
import {htmlButton, getSiteStyle} from './util';

// Get button style based on the current page

const siteStyle = getSiteStyle();

// Scan for code snippets and append buttons

const snippets = document.querySelectorAll('pre');

snippets.forEach((snippet) => {
  const parent = snippet.parentNode;
  const wrapper = document.createElement('div');

  parent.replaceChild(wrapper, snippet);
  wrapper.appendChild(snippet);

  wrapper.classList.add('codecopy', `codecopy-${siteStyle}`);
  wrapper.firstChild.insertAdjacentHTML('beforebegin', htmlButton);
});

// Add copy to clipboard functionality and user feedback

const clipboard = new ClipboardJS('.codecopy-btn', {
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
