import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-peludo',
  templateUrl: './item-peludo.component.html',
  styleUrls: ['./item-peludo.component.css']
})
export class ItemPeludoComponent {
  @Input() name: string = "";
  @Input() image: string = "";
}
