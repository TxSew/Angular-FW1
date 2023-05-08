import { Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from '../Room';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss'],
})
export class XyzComponent implements OnInit {
  hotelName = 'Thumbnail';
  numberRooms = '5';
  hideRooms = false;
  room: Room = {
    code: 10,
    static: 'hello',
  };
  roomList: RoomList[] = [
    {
      roomType: 'angular',
      title:'thanh dxz',
      date: new Date('11-Nov-2021'),
      quantity: 5
    },
    {
      roomType: 'reactjs',
      date: new Date('11-Nov-2021'),
      title:'thi dxz',
      quantity: 6.7
    },
  ];
   role="admin"

  ngOnInit(): void {}
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
