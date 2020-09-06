import { Component, OnInit } from '@angular/core';
import {SpaceXlaunchesService} from '../space-xlaunches.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute , Router , ParamMap} from '@angular/router';

@Component({
  selector: 'app-space-body',
  templateUrl: './space-body.component.html',
  styleUrls: ['./space-body.component.css']
})
export class SpaceBodyComponent implements OnInit {
  
  public myName ;
  public selectedYear;
  public selectedYearBool = false;
  spaceXLaunches$: Observable<Object>;
  spaceXLaunchesYear$: Observable<Object>;
  localSpaceXArray : object;
  constructor(private _spaceXService:SpaceXlaunchesService,
    private route:ActivatedRoute) { }

  ngOnInit() {

    this.spaceXLaunches$ = this. _spaceXService.getLaunches();
    
    this._spaceXService.getLaunches().subscribe(data => {
     
    })

     
  this.route.paramMap.subscribe((params:ParamMap) => {
      let id = (params.get('id'));
      this.selectedYear = id; 
    });
 
  }

  launchYearFilter(selectedYear) {

    this.selectedYearBool = true; 
    this.spaceXLaunchesYear$ = this._spaceXService.getLaunchYear(this.selectedYear);
    this.spaceXLaunchesYear$.subscribe(data => {
           
    });
   }

}