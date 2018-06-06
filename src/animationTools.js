export function animateFireworks(event) {
    this.animate;
    this.updateCoords(event);
  }
export function animateStars() {

}

  //  setParticuleDirection(particle) {
  //   var angle = anime.random(0, 360) * Math.PI / 180;
  //   var value = anime.random(50, 180);
  //   var radius = [-1, 1][anime.random(0, 1)] * value;
  //   return {
  //     x: particle.x + radius * Math.cos(angle),
  //     y: particle.y + radius * Math.sin(angle)
  //   }
  // }
  // createParticule(x, y) {
  //   return particle = {
  //   particle.x = x;
  //   particle.y = y;
  //   particle.color = this.colors[anime.random(0, this.colors.length - 1)];
  //   particle.radius = anime.random(16, 32);
  //   particle.endPos = this.setParticuleDirection(particle);
  //   var canvasEl = document.querySelector(".fireworks");
  //   var ctx = canvasEl.getContext("2d");
  //   particle.draw = function() {
  //     ctx.beginPath();
  //     ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true);
  //     ctx.fillStyle = particle.color;
  //     ctx.fill();
  //   };
  //   return particle;
  // },
  // createCircle(x, y) {
  //   return {
  //     x: x,
  //     y: y,
  //     color: "#FFF",
  //     radius: 0.1,
  //     alpha: 0.5,
  //     lineWidth: 6,
  //     draw: function() {
  //       var canvasEl = document.querySelector(".fireworks");
  //       var ctx = canvasEl.getContext("2d");
  //       ctx.globalAlpha = particle.alpha;
  //       ctx.beginPath();
  //       ctx.arc(
  //         particle.x,
  //         particle.y,
  //         particle.radius,
  //         0,
  //         2 * Math.PI,
  //         true
  //       );
  //       ctx.lineWidth = particle.lineWidth;
  //       ctx.strokeStyle = particle.color;
  //       ctx.stroke();
  //       ctx.globalAlpha = 1;
  //     }
  //   };
  // },
  // renderParticule(anim) {
  //   for (var i = 0; i < anim.animatables.length; i++) {
  //     anim.animatables[i].target.draw();
  //   }
  // },
  // animateParticules(x, y) {
  //   var circle = this.createCircle(x, y);
  //   var particules = [];
  //   for (var i = 0; i < this.numberOfParticules; i++) {
  //     particules.push(this.createParticule(x, y));
  //   }
  //   anime
  //     .timeline()
  //     .add({
  //       targets: particules,
  //       x: function(particle) {
  //         return particle.endPos.x;
  //       },
  //       y: function(particle) {
  //         return particle.endPos.y;
  //       },
  //       radius: 0.1,
  //       duration: anime.random(1200, 1800),
  //       easing: "easeOutExpo",
  //       update: this.renderParticule
  //     })
  //     .add({
  //       targets: circle,
  //       radius: anime.random(80, 160),
  //       lineWidth: 0,
  //       alpha: {
  //         value: 0,
  //         easing: "linear",
  //         duration: anime.random(600, 800)
  //       },
  //       duration: anime.random(1200, 1800),
  //       easing: "easeOutExpo",
  //       update: this.renderParticule,
  //       offset: 0
  //     })
  // },
  // changeText() {
  //   var CurrentTechName = event.target.innerText.trim();
  //   this.CurrentTechName = CurrentTechName;
  //   return Promise.resolve(this)
  // },
  // changeTechObject() {
  //   let matchedNav = this.technology.filter(
  //     tech => tech.name === this.CurrentTechName
  //   )[0];
  //   if (matchedNav) {
  //     this.CurrentTechObject = matchedNav
  //   } else {
  //     console.warn(
  //       "WTF?!?!",
  //       matchedNav,
  //       "this.technology.length=",
  //       this.technology.length,
  //       "this.CurrentTechName=",
  //       this.CurrentTechName
  //     );
  //   }
  //   return Promise.resolve(this);
  // },
  // changeTechRoute() {
  //   this.$router.push("CurrentTech")
  //   return Promise.resolve(this)
  // },
  // changeCurrentTech() {
  //   return Promise.resolve()
  //     .then(this.changeText)
  //     .then(this.changeTechObject)
  //     .then(this.hideDrawer)
  //     .then(this.changeTechRoute);
  // },
  // setContext() {
  //   var canvasEl = document.querySelector(".fireworks");
  //   var ctx = canvasEl.getContext("2d")
  //   return Promise.resolve(this)
  // }
