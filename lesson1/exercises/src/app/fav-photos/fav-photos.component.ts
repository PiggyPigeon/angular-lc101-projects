import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://media.istockphoto.com/id/478124922/photo/beautiful-tiny-chihuahua-dog-dressed-up-in-frog-outfit-staying.jpg?s=612x612&w=0&k=20&c=c46oL7ocTw2FgKYJMpgMUpm8oFPNo1KpuNzrCObjMHo=';
  image2 = 'https://i.ytimg.com/vi/2Z1_mXOJEnI/maxresdefault.jpg';
  image3 = 'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/living_impact/photo/15217794-large.jpg';

  constructor() { }

  ngOnInit() {
  }

}