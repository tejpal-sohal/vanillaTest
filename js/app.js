// By Tej Sohal 2017

let myApp = {
  init: () => {
        let subHeading = document.querySelectorAll('div.section h2');
        subHeading.forEach((heading) => {
        heading.addEventListener("click", myApp.toggle);
    })
  },
  toggle: (e) =>  {
        var item = e.target.nextSibling.nextElementSibling;
        if (item.style.display === 'none') {
            item.style.display = 'block';
         } else {
          item.style.display = 'none';
        }
     },
     remove: (el) => {
        el.parentNode.removeChild(el);
     }
}

myApp.init();
