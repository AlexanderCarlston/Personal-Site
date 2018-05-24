<template>
  <main id="App" class="bg-black">
    <section class ="flex items-center justify-center fill-height">
      <h3 v-html="loadingText" ref="headline" v-cloak class="anim fw-400 absolute title"></h3>
    </section>
  </main>
</template>

<script>
const charming = require('charming')
const anime = require('animejs')
export default {
  name: "AnimatedText",
  data: () => ({
    texts: [
      'Computer Nerd',
      'Javascript Guy',
      'Vue Guy',
      'Looking for job',
      'Game Nerd',
      'Learning',
      'The man',
      'Watching',
      'Grinding',
      'hi!'
    ],
    loadingText: 'Full Stack Web Developer'
  }),
  methods: {
    getRandomText () {
      return this.texts[Math.floor(Math.random() * this.texts.length)]
    },
    setLoadingText () {
      return new Promise ((resolve, reject) => {
        this.loadingText = this.getRandomText()
        resolve()
      })
    },
    splitHTMLStringIntoNodes (el, opt = { classPrefix: 'str__item inline-block ltr' }) {
      return new Promise ((resolve, reject) => {
        charming(el, opt)
        resolve()
      })
    },
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
    },
    splitHTMLAndAnimateChildNodes (el, targets) {
      this.setLoadingText()
      .then(() => this.splitHTMLStringIntoNodes(el))
      .then(() => this.animateLetters(el, targets))
    }
  },
  mounted () {
    this.splitHTMLAndAnimateChildNodes(this.$refs.headline, '.anim .str__item')
  }
}
</script>

<style scoped>
main {
  height: 54px;
  font-family: 'Space Mono', monospace, sans-serif;
  font-weight: 400;
}

.fw-400 {
  font-weight: 500;
}

.bg-black {
  background-color: #1b1b1b;
}

.inline-block {
  display: inline-block;
}

.invisible {
  opacity: 0;
}

.str__item {
  min-width: 10px;
}

.fill-height {
  height: 100%;
}
</style>
