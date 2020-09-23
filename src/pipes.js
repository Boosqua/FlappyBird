

export default class Pipe {
   constructor(pos = 520) {
      this.gapPos = this.constructPipes()
      this.velocity = 1
      this.length = 100;
      this.pos = pos
   }
   // ctx.fillStyle = "green";
   // ctx.fillRect(300, 0, 100, 250);
   constructPipes() {
      //640 480 490 450
      let pipeOpen = Math.floor(Math.random() * 450) - 20;
      let pipeClose = pipeOpen + 150;

      return [pipeOpen, pipeClose]
   }
}