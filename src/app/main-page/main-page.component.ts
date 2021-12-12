import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainPageModalComponent } from './main-page-modal/main-page-modal.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  markers:any;
  

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(MainPageModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.markers = result
    });
  }

}
