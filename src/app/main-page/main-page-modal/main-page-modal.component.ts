import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { BikApiService } from 'src/app/services/bik-api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-main-page-modal',
  templateUrl: './main-page-modal.component.html',
  styleUrls: ['./main-page-modal.component.scss']
})
export class MainPageModalComponent implements OnInit {

  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
  secondStepResult!: String;
  value = '';
  streetName= '';
  streetNumber= '';
  categories : string[] = [];
  hasLocation: Boolean = false;
  markers: any;
  data: any;

  constructor(
    private _formBuilder: FormBuilder, 
    breakpointObserver: BreakpointObserver, 
    private bikApiService: BikApiService, 
    private dialogRef: MatDialogRef<MainPageModalComponent>,
    

    ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOnInit(): void {
  }

  setStepTwoResult(name:string){
    this.secondStepResult = name;
    console.log(this.secondStepResult)
  }
  addCategory(){
    this.categories.push(this.value)
  }

  setHasLocation(value: Boolean){
    this.hasLocation = value;
  }
  async getApiData(){
    await this.bikApiService.getResultsForLocation(this.streetName, this.streetNumber, this.categories.join(',')).subscribe(resp => {
      this.data = resp
    });
  }

  close() {
    console.log(this.markers)
    for(let result of this.data.coordinates){
      console.log(result)
    }
    this.markers = [ { position: { lat: 38.9987208, lng: -77.2538699 },},{ position: { lat: 38.9987208, lng: -71.2538699 },},{ position: { lat: 38.9987208, lng: -27.2538699 },}]
    this.dialogRef.close(this.markers);
  }
}
