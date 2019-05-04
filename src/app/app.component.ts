import { Component, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public ctx: CanvasRenderingContext2D;
  scores: number[] = [100,90,85,45,72,88];

  ngAfterViewInit(): void {
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.draw();
  }

  draw(): void {
    
  let width: number = 50;
  let currX: number = 50;
  let bvase: number = 200;
  let height: number = 200;
    for (let i = 0; i < this.scores.length; i++) {
      // bar
          this.ctx.fillStyle = 'green';
      const h = this.scores[i];
      const y = height - h;
      this.ctx.fillRect(currX, y, width, h);

      // circle
      this.ctx.fillStyle = 'navy';
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 2;
      this.ctx.arc(currX + width / 2, y , 15, 0 , 2* Math.PI, true);
      this.ctx.fill();
      this.ctx.stroke();
      currX += width + 10;
    }

  }
} 
