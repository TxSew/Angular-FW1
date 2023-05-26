import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
   @Input() rating:number
   starWidth:number;
    @Output() ratingClicked:EventEmitter<string> =
       new EventEmitter<string>()
   constructor(){
    this.rating=0;
     this.starWidth= this.rating*86/5
   }
 onClick():void {
 this.ratingClicked.emit(`đánh giá cảu sản phẩm là ${this.rating} sao!`)
 }
  ngOnchanges(): void {
     this.starWidth=this.rating*86/5
  }
  ngOnInit(): void {
  }
}
