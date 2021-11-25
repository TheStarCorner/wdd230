const seenImages = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0,
  rootMargin: '0px 0px -50px 0px'
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  }
};

if ('InstersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach(item => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    })
  }, imgOptions);

  seenImages.forEach(img => {
    imgObserver.observe(img);
  });
}
else {
  seenImages.forEach(img => {
    loadImages(img);
  });
}


