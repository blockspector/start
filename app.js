let observerConfig = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
    };
    function observerFn(entries, observer) {
       console.log(...entries);
    }
    let observer = new IntersectionObserver(observerFn, observerConfig);


let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show' );
    }
    });
    }); 
    const hiddenElements = document.querySelectorAll( ' . hidden');
    hiddenElements.forEach((el) => observer2.observe(el));

