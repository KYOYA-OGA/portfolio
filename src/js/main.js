import '../css/main.scss';
import MobileMenu from './modules/MobileMenu';
import smoothscroll from 'smoothscroll-polyfill';
import 'picturefill';
import 'picturefill/dist/plugins/intrinsic-dimension/pf.intrinsic.min.js';

let mobileMenu = new MobileMenu();

// revealOnscroll
const options = {
  root: null,
  rootMargin: '10px',
  threshold: 0,
};

const observer = new IntersectionObserver(revealOnScroll, options);

const items = document.querySelectorAll('.feature__card');
items.forEach((item) => {
  observer.observe(item);
});

export default function revealOnScroll(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-item--visible');
    }
  });
}

// smoothscroll

smoothscroll.polyfill();

document.addEventListener('click', (e) => {
  const target = e.target;
  // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
  if (!target.classList.contains('js-smooth-scroll')) return;
  e.preventDefault();
  const targetId = target.hash;
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
