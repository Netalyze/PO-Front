import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent implements OnInit {

  cards: Card[] = [
    {title: 'Wypadek na odcinku X', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis quis sapiente minima labore perspiciatis nemo aliquam mollitia ipsam voluptatum sunt iusto, esse officia itaque est tenetur dignissimos veniam explicabo.'},
    {title: 'Odcinek Y wyłączony', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis quis sapiente minima labore perspiciatis nemo aliquam mollitia ipsam voluptatum sunt iusto, esse officia itaque est tenetur dignissimos veniam explicabo.'},
    {title: 'Pogoda na dziś', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis quis sapiente minima labore perspiciatis nemo aliquam mollitia ipsam voluptatum sunt iusto, esse officia itaque est tenetur dignissimos veniam explicabo.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


