import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public filtersArray=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  constructor( private route:ActivatedRoute,private router : Router) { }

  ngOnInit() {
  }

  goSpaceX(filter){
  
    let filterYear = filter;
    this.router.navigate(['/filters', filterYear]);
    // this.router.navigate([filterYear],{relativeTo:this.route})
  }

}
