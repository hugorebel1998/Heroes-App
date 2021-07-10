import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroes } from '../../../heroes/interface/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html'
})
export class ConfirmarComponent implements OnInit {


  constructor(
    private dialogred:MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroes
              ) { }

  ngOnInit(): void {
    console.log(this.data)
  
  }
  aceptar(){
    this.dialogred.close(true);
  }
  cancelar(){
    this.dialogred.close();
  }

}
