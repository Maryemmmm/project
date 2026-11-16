
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-conf',
  imports: [],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css'
})

export class ListConf {

  
conferences = [
  {
    picture: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&v=2',
    title: 'AI & Technology Summit',
    date: '20 November 2026',
    address: 'Darmstadt, Germany',
    available_places: 45
  },
  {
    picture: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&v=2',
    title: 'Innovation Forum',
    date: '25 November 2026',
    address: 'Frankfurt, Germany',
    available_places: 28
  },
  {
    picture: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&v=2',
    title: 'Digital Business Conference',
    date: '02 December 2026',
    address: 'Berlin, Germany',
    available_places: 15
  },
  {
    picture: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&v=2',
    title: 'Web Development Days',
    date: '10 December 2026',
    address: 'Munich, Germany',
    available_places: 32
  }
];

}
