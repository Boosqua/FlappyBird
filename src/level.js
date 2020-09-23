import Pipe from './pipes.js'

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [new Pipe(), new Pipe(680), new Pipe(840)]
  }

  drawBackground(ctx) {
      ctx.fillStyle = "skyblue";
      ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
      
     if (this.pipes[0].pos < 0) {
        
        this.pipes.shift()
        this.pipes.push(new Pipe())
     }
      this.pipes.forEach( (pipe) => {
         ctx.fillStyle = "green";
         ctx.fillRect(pipe.pos, 0, pipe.length, pipe.gapPos[0]);
         ctx.fillStyle = 'green';
         ctx.fillRect(pipe.pos, pipe.gapPos[1], pipe.length, 640);
         pipe.pos -= 3
      })
  }

  
}