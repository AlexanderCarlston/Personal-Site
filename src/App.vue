<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="hideDrawer(false)" :to='{name: "LandingPage"}'>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="hideDrawer(false)" :to='{name: "AboutMe"}' >
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About me</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
        sub-group
        no-action
        value="false"
        >
        <v-list-tile slot="activator">
          <v-list-tile-action>
            <v-icon>devices</v-icon>
          </v-list-tile-action>
            <v-list-tile-title>My Technology</v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            v-for="(tech, i) in technology"
            :key="i"
            @click="changeCurrentTech"
            :to='{name: "Loading"}'
          >
            <v-list-tile-title v-text="tech.name"></v-list-tile-title>
            <v-list-tile-action>
              <i :class='tech.image'></i>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        <v-list-tile :to='{name: "MyWork"}' @click="hideDrawer(false)">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Work</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to='{name: "ContactMe"}' @click="hideDrawer(false)">
          <v-list-tile-action>
            <v-icon>alternate_email</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact me</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="unselectable" >Learn More</v-toolbar-title>
    </v-toolbar>
    <v-content class="bg-black">
      <canvas id="backgroundCanvas" class="stars" v-if="stars" ></canvas>
      <canvas v-if="fireworks" id="clickCanvas" class="fireworksCanvas" @click="fireworkCoords"></canvas>
      <v-container>
          <router-view :fireworks="fireworks" :stars="stars" :animateFireworks="animateFireworks" :loadTechnology="technology" :CurrentTechObject="CurrentTechObject"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import anime from "animejs";
const jscomp = require("jscomp");
import Vue from "vue";

export default {
  name: "App",
  mounted() {
    fetch("../static/technology.json")
      .then(response => response.json())
      .then(response => (this.technology = response));
  },
  data: () => ({
    fireworks: false,
    stars: false,
    drawer: false,
    technology: [],
    CurrentTechName: "",
    CurrentTechObject: {},
    layerX: 0,
    layerY: 0,
    numberOfParticules: 30,
    colors: ["#4A148C", "#9C27B0", "#EC407A", "#1A237E"]
  }),
  methods: {
    fireworkCoords(event) {
      this.updateCoords(event);
    },
    animateFireworks() {
      this.fireworks = true;
      this.stars = true;
      Vue.nextTick(() => {
        var contentWrap = document.querySelector(".content--wrap");
        var canvasEl = document.querySelector(".fireworksCanvas");
        var starCanvasEl = document.querySelector(".stars");
        var clientHeight = contentWrap.clientHeight;
        var clientWidth = contentWrap.clientWidth;
        this.starCoords(clientWidth, clientHeight);
        starCanvasEl.width = window.innerWidth * 2;
        starCanvasEl.height = window.innerHeight * 2;
        starCanvasEl.style.width = clientWidth + "px";
        starCanvasEl.style.height = clientHeight + "px";
        starCanvasEl.getContext("2d").scale(2, 2);

        canvasEl.width = window.innerWidth * 2;
        canvasEl.height = window.innerHeight * 2;
        canvasEl.style.width = clientWidth + "px";
        canvasEl.style.height = clientHeight + "px";
        canvasEl.getContext("2d").scale(2, 2);
        var ctx = canvasEl.getContext("2d");
        anime({
          duration: Infinity,
          update: function() {
            //Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
          }
        });
      });
    },
    updateCoords(event) {
      var canvasHeight = document.querySelector(".fireworksCanvas").height;
      this.layerX = event.layerX;
      this.layerY =
        event.layerY + event.layerY / canvasHeight * (canvasHeight / 13);
      //ClientY does the exact oppisite
      this.animateParticules(this.layerX, this.layerY);
    },
    setParticuleDirection(particle) {
      var angle = anime.random(0, 360) * Math.PI / 180;
      var value = anime.random(50, 180);
      var radius = [-1, 1][anime.random(0, 1)] * value;
      return {
        x: particle.x + radius * Math.cos(angle),
        y: particle.y + radius * Math.sin(angle)
      };
    },
    createParticule(x, y) {
      var particle = {};
      particle.x = x;
      particle.y = y;
      particle.color = this.colors[anime.random(0, this.colors.length - 1)];
      particle.radius = anime.random(16, 32);
      particle.endPos = this.setParticuleDirection(particle);
      var canvasEl = document.querySelector(".fireworksCanvas");
      var ctx = canvasEl.getContext("2d");
      particle.draw = function() {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = particle.color;
        ctx.fill();
      };
      return particle;
    },
    createCircle(x, y) {
      var particle = {};
      particle.x = x;
      particle.y = y;
      particle.color = "#FFF";
      particle.radius = 0.1;
      particle.alpha = 0.5;
      particle.lineWidth = 6;
      particle.draw = function() {
        var canvasEl = document.querySelector(".fireworksCanvas");
        var ctx = canvasEl.getContext("2d");
        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = particle.lineWidth;
        ctx.strokeStyle = particle.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      };
      return particle;
    },
    renderParticule(anim) {
      for (var i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    },
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
    },
    animate(x, y) {
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
    },
    //Star animations
    starCoords(clientWidth, clientHeight) {
      for (let i = 0; i < 20; i++) {
        window.setInterval(
          this.animateStarParticules(
            anime.random(50, clientWidth - 50),
            anime.random(50, clientHeight - 50)
          ),
          2000
        );
      }
    },
    animateStarParticules(x, y) {
      var circle = this.createStarCircle(x, y);
      var particules = [];
      for (var i = 0; i < this.numberOfParticules; i++) {
        particules.push(this.createStarParticule(x, y));
      }
      anime.timeline().add({
        targets: particules,
        x: function(particle) {
          return particle.endPos.x;
        },
        y: function(particle) {
          return particle.endPos.y;
        },
        radius: 0.1,
        delay: 1000,
        duration: anime.random(1200, 1800),
        easing: "easeOutExpo",
        update: this.renderParticule
      });
    },
    createStarCircle(x, y) {
      var particle = {};
      particle.x = x;
      particle.y = y;
      particle.color = "#FFF";
      particle.radius = 0.1;
      particle.alpha = 0.5;
      particle.lineWidth = 6;
      particle.draw = function() {
        var canvasEl = document.querySelector(".stars");
        var ctx = canvasEl.getContext("2d");
        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = particle.lineWidth;
        ctx.strokeStyle = particle.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      };
      return particle;
    },
    createStarParticule(x, y) {
      var particle = {};
      particle.x = x;
      particle.y = y;
      particle.color = this.colors[anime.random(0, this.colors.length - 1)];
      particle.radius = anime.random(16, 32);
      particle.endPos = this.setParticuleDirection(particle);
      var canvasEl = document.querySelector(".stars");
      var ctx = canvasEl.getContext("2d");
      particle.draw = function() {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = particle.color;
        ctx.fill();
      };
      return particle;
    },
    hideDrawer(boolean) {
      if (boolean) {
        this.animateFireworks;
        this.fireworks = true;
      } else {
        this.fireworks = false;
      }
      this.drawer = false;
      return Promise.resolve(this);
    },
    changeText() {
      var CurrentTechName = event.target.innerText.trim();
      this.CurrentTechName = CurrentTechName;
      return Promise.resolve(this);
    },
    changeTechObject() {
      let matchedNav = this.technology.filter(
        tech => tech.name === this.CurrentTechName
      )[0];
      if (matchedNav) {
        this.CurrentTechObject = matchedNav;
      } else {
        console.warn(
          "WTF?!?!",
          matchedNav,
          "this.technology.length=",
          this.technology.length,
          "this.CurrentTechName=",
          this.CurrentTechName
        );
      }
      return Promise.resolve(this);
    },
    changeTechRoute() {
      this.$router.push("CurrentTech");
      return Promise.resolve(this);
    },
    disableFireworks() {
      this.fireworks = false;
      this.stars = false;
      return Promise.resolve(this);
    },
    changeCurrentTech() {
      return Promise.resolve()
        .then(this.disableFireworks)
        .then(this.changeText)
        .then(this.changeTechObject)
        .then(this.hideDrawer(false))
        .then(this.changeTechRoute);
    }
  }
};
</script>

<style>
.content--wrap {
  text-align: left !important;
}
h3 {
  z-index: 0;
}
.ltr1,
.ltr4,
.ltr8,
.ltr11,
.ltr15,
.ltr16 {
  color: #4a148c;
}
.ltr2,
.ltr5,
.ltr7,
.ltr12,
.ltr17 {
  color: #9c27b0;
}
.ltr3,
.ltr9,
.ltr13,
.ltr18 {
  color: #ec407a;
}
.ltr6,
.ltr10,
.ltr14,
.ltr19 {
  color: #1a237e;
}
.unselectable {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
#backgroundCanvas,
#clickCanvas {
  height: 90vh !important;
  width: 100vw !important;
  position: absolute;
}
#backgroundCanvas {
  z-index: 0;
}
v-card,
#clickCanvas {
  z-index: 1;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.bg-black {
  background-color: #1b1b1b;
}
.color-01 {
  color: #ff1461;
} /* Red */
.color-02 {
  color: #ff7c72;
} /* Orange */
.color-03 {
  color: #fbf38c;
} /* Yellow */
.color-04 {
  color: #a6ff8f;
} /* Citrus */
.color-05 {
  color: #18ff92;
} /* Green */
.color-06 {
  color: #1ce2b2;
} /* Darkgreen */
.color-07 {
  color: #5ef3fb;
} /* Turquoise */
.color-08 {
  color: #61c3ff;
} /* Lightblue */
.color-09 {
  color: #5a87ff;
} /* Blue */
.color-10 {
  color: #8453e3;
} /* Purple */
.color-11 {
  color: #c26eff;
} /* Lavender */
.color-12 {
  color: #fb89fb;
} /* Pink */
</style>