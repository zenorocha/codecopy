import Clipboard from 'clipboard';
import { buildGithubButton, htmlButton, getSiteStyle} from './util';

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

  let clipboard;
  let triggerCb;

  // check if we are on github source page
  const isGithubSource = window.location.host === "github.com" && window.location.href.indexOf("blob") !== -1;

  if(isGithubSource){
    triggerCb = () => document.querySelector('tbody');
    buildGithubButton();
  }
  else{
    triggerCb = (trigger) => trigger.parentNode;
  }

  clipboard =  new Clipboard('.codecopy-btn', {
    target: triggerCb
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
