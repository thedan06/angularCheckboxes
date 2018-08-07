import { Component } from '@angular/core';
import { Player } from './my_files/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Alex's Task";

  subtitle = "Players Details";

  players:any = {};
  selectedPlayers: any = [];

  constructor() {
  this.players = PLAYES;
  }

  search(player, event) {

    var index = this.selectedPlayers.indexOf(player.name);
    if (event.target.checked) {
      if (index === -1) {
        // this.selectedPlayers.push(player.id);
        this.selectedPlayers.push(player.name); // Comment Hii line, Uncomment the one above to get ID instead of names
      }
    } else {
      if (index !== -1) {
        this.selectedPlayers.splice(index, 1);
      }
    }

    console.log(this.selectedPlayers);
  }

}

export const PLAYES: Player[] = [
  { id: 11, name: 'Moja' },
  { id: 12, name: 'Mbili' },
  { id: 13, name: 'Tatu' },
  { id: 14, name: 'Nne' },
  { id: 15, name: 'Tano' },
  { id: 16, name: 'Sita' },
  { id: 17, name: 'Saba' },
  { id: 18, name: 'Name' }
];
