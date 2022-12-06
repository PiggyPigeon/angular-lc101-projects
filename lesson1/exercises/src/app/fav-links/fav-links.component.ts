import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://science.sandiegozoo.org/science-blog/frog-dogs', 'https://wagwalking.com/sense/can-dogs-be-hurt-frogs-and-toads']
  constructor() { }

  ngOnInit() {
  }

}
