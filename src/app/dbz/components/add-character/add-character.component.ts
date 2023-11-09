import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

  @Output() onNewCharacter = new EventEmitter<Character>();


  public character: Character = {
    name: '',
    power: 0,
    id: ''
  };

  emitCharacter():void{

    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0, id: ''}


    // console.log(this.character);
  }



}
