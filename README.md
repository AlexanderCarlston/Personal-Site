# personal-project

> I worked on this website a long time ago, so unfortunately this website isn't mobile friendly. However, this was my first time implementing a feature in to my code, so I am proud of that.

## Walk through
* [Animated text](https://github.com/AlexanderCarlston/Personal-Site/blob/master/src/components/AnimatedText.vue)

![textPicture](https://media.giphy.com/media/1ZnG301DuY9DSU1TKg/giphy.gif)

First off I use a function called splitHTMLAndAnimateChildNodes, which does what it says.
``` javascript
    mounted () {
    this.splitHTMLAndAnimateChildNodes(this.$refs.headline, '.anim .str__item')
  }
```
Since mounted is the only user interaction, this function is where most of the things happen.
``` javascript
    splitHTMLAndAnimateChildNodes (el, targets) {
      this.setLoadingText()
      .then(() => this.splitHTMLStringIntoNodes(el))
      .then(() => this.animateLetters(el, targets))
    }
```
Simple function that sets the loading text using a promise
``` javascript
    setLoadingText () {
      return new Promise ((resolve, reject) => {
        this.loadingText = this.getRandomText()
        resolve()
      })
    }
```
Then I use the function splitHTMLStringIntoNodes which is passed down the element and an object.
``` javascript
    splitHTMLStringIntoNodes (el, opt = { classPrefix: 'str__item inline-block ltr' }) {
      return new Promise ((resolve, reject) => {
        charming(el, opt)
        resolve()
      })
    }
```
This function is where the bulk of the animation happens, naming is extremely important so this function (to be simple) animates the letters.
``` javascript
    animateLetters (container = null, targets = '.anim .str__item', delay = 130, duration = 120) {
      const vm = this

      container.style = 'opacity:0; width: 50%'

      return new Promise ((resolve, reject) => {
        const anim = anime.timeline().add([{
          targets: targets,
          opacity: [0, 1],
          rotate: [-25, 0],
          scaleX: [.5,1],
          translateY: ['0px','25px'],
          delay (el, i, l) { return delay + (i * delay) },
          duration (el, i, l) { return duration + (i / duration) },
          autoplay: false,
          easing: 'easeInOutQuint',
          begin () { container.style = null }
        }, {
          targets: targets,
          opacity: [1, 0],
          rotate: [0, -25],
          scaleX: [1,.5],
          translateY: ['25px', '0px'],
          delay (el, i, l) { return delay + (i * delay) },
          duration (el, i, l) { return duration + (i / duration) },
          autoplay: false,
          begin () { container.style = null },
          easing: 'easeInOutQuint',
          offset: 2000,
          complete () {
            anim.pause()
            container.innerText = vm.getRandomText()
            vm.splitHTMLStringIntoNodes(container).then(() => vm.animateLetters(container, targets))
          }
        }])


        anim.play()
        resolve()
      })
    }
```






* [Animated bubbles](https://github.com/AlexanderCarlston/Personal-Site/blob/master/src/App.vue)

![BubblePicture](https://media.giphy.com/media/2t9uOJyJQHxL6URamL/giphy.gif)
This canvas is unclickable, and only exists when the animate button is pressed.
``` html
<canvas id="backgroundCanvas" class="stars" v-if="stars" ></canvas>
```
This function actually caused me a lot of pain and struggle. I had an issue where the canvas was being stretched, and I had to fix it by giving the canvas width and height. Doing that caused the canvas to shrink, so then I had to do some math!
``` javascript
    animateFireworks(){
      this.fireworks = true
      this.stars = true
      Vue.nextTick(() => {
      var contentWrap = document.querySelector('.content--wrap')
      var canvasEl = document.querySelector('.fireworksCanvas')
      var starCanvasEl = document.querySelector('.stars')
      var clientHeight = contentWrap.clientHeight
      var clientWidth = contentWrap.clientWidth
      this.starCoords(clientWidth, clientHeight)
      starCanvasEl.width = window.innerWidth * 2
      starCanvasEl.height = window.innerHeight * 2
      starCanvasEl.style.width = clientWidth + 'px'
      starCanvasEl.style.height = clientHeight + 'px'
      starCanvasEl.getContext('2d').scale(2, 2)

      canvasEl.width = window.innerWidth * 2
      canvasEl.height = window.innerHeight * 2
      canvasEl.style.width = clientWidth + 'px'
      canvasEl.style.height = clientHeight + 'px'
      canvasEl.getContext('2d').scale(2, 2)
      var ctx = canvasEl.getContext('2d')
      anime({
      duration: Infinity,
      update: function() {
        //Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
      }
    })
      })
    }
```

* [Animated bubbles burst](https://github.com/AlexanderCarlston/Personal-Site/blob/master/src/App.vue)

![BubbleBurst](https://media.giphy.com/media/dtiBVHJm5VxoL8R6Ir/giphy.gif)
This canvas is clickable, and also only exists when the animate button is clicked.
``` html
<canvas id="clickCanvas" v-if="fireworks"  class="fireworksCanvas" @click="fireworkCoords"></canvas>
```
This function actually caused me a lot of pain and struggle. I had an issue where the canvas was being stretched, and I had to fix it by giving the canvas width and height. Doing that caused the canvas to shrink, so then I had to do some math!
``` javascript
    animateFireworks(){
      this.fireworks = true
      this.stars = true
      Vue.nextTick(() => {
      var contentWrap = document.querySelector('.content--wrap')
      var canvasEl = document.querySelector('.fireworksCanvas')
      var starCanvasEl = document.querySelector('.stars')
      var clientHeight = contentWrap.clientHeight
      var clientWidth = contentWrap.clientWidth
      this.starCoords(clientWidth, clientHeight)
      starCanvasEl.width = window.innerWidth * 2
      starCanvasEl.height = window.innerHeight * 2
      starCanvasEl.style.width = clientWidth + 'px'
      starCanvasEl.style.height = clientHeight + 'px'
      starCanvasEl.getContext('2d').scale(2, 2)

      canvasEl.width = window.innerWidth * 2
      canvasEl.height = window.innerHeight * 2
      canvasEl.style.width = clientWidth + 'px'
      canvasEl.style.height = clientHeight + 'px'
      canvasEl.getContext('2d').scale(2, 2)
      var ctx = canvasEl.getContext('2d')
      anime({
      duration: Infinity,
      update: function() {
        //Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
      }
    })
      })
    }
```
This was the click event on the bubble burst canvas.
``` javascript
    fireworkCoords(event) {
      this.updateCoords(event);
    }
```
This function is the one I had to fix to fix the issue I had with the canvas. 
``` javascript
    updateCoords(event) {
      var canvasHeight = document.querySelector(".fireworksCanvas").height;
      this.layerX = event.layerX;
      this.layerY = event.layerY + event.layerY / canvasHeight * (canvasHeight / 13);
      //ClientY does the exact oppisite
      this.animateParticules(this.layerX, this.layerY);
    }
```
This function is then used on each click, and uses where it was clicked to animate the particles.
``` javascript
    animateParticules(x, y) {
      var circle = this.createCircle(x, y);
      var particules = [];
      for (var i = 0; i < this.numberOfParticules; i++) {
        particules.push(this.createParticule(x, y));
      }
      anime
        .timeline()
        .add({
          targets: particules,
          x: function(particle) {
            return particle.endPos.x;
          },
          y: function(particle) {
            return particle.endPos.y;
          },
          radius: 0.1,
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: this.renderParticule
        })
        .add({
          targets: circle,
          radius: anime.random(80, 160),
          lineWidth: 0,
          alpha: {
            value: 0,
            easing: "linear",
            duration: anime.random(600, 800)
          },
          duration: anime.random(1200, 1800),
          easing: "easeOutExpo",
          update: this.renderParticule,
          offset: 0
        });
    }
```




## Built With:
* [Vue.js](https://vuejs.org/) - Front End Framework
* [Vuetify](https://vuetifyjs.com/en/) - Fast design prototyping (might change to vanilla)
* [Vue Router](https://router.vuejs.org/) - Navigation



















## Uses:
* [Server]() - PostgreSQL server













## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
