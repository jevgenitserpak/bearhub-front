import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BaseSymbolItem, SymbolProfile} from '../dto/stock-items.type';

@Component({
  selector: 'app-stock-profile',
  templateUrl: './stock-profile.component.html',
  styleUrls: ['./stock-profile.component.scss']
})
export class StockProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StockProfileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BaseSymbolItem) { }

  public collapsed = true;

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
