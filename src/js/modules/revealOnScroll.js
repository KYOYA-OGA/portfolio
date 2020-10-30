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
