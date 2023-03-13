
Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted(el) {
        console.log('Hi', el);
        el.focus()
    }
})

Vue.directive('colorful', {
    // When the bound element is inserted into the DOM...
    inserted(el) {
        el.addEventListener('keyup', () => {
            el.style.backgroundColor = getRandomColor()
        });
    }
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
