import { Component } from '@angular/core';
import { PlanterDto } from '../planter-dto';
import { PlanterOperationService } from '../planter-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-all-planters',
  templateUrl: './all-planters.component.html',
  styleUrls: ['./all-planters.component.css']
})

export class AllPlantersComponent {
  
  __planterService:PlanterOperationService; // creating object of Service layer
  router:Router;
  allPlanters:PlanterDto [] = [];
  constructor(private planterService:PlanterOperationService,router:Router)
  {
    this.__planterService = planterService;
    this.router = router;
    this.planterService.getAllPlantersFromSpring().subscribe(
      data=>{
          this.allPlanters = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }
 /* viewProductDetails()
  {
    
    this.router.navigate(['planterDetail']);
  }*/
  viewProductDetails(planterId:number,plantName:string,planterShape:string,planterHeight:number,planterCost:number)
  {
    localStorage.removeItem('planterId')
    localStorage.removeItem('productName')
    localStorage.removeItem('planterShape')
    localStorage.removeItem('planterHeight')
    localStorage.removeItem('planterCost')
   

    localStorage.setItem("planterId",planterId+'');
    localStorage.setItem("productName",plantName);
    localStorage.setItem("planterShape",planterShape);
    localStorage.setItem("planterHeight",planterHeight+'');
    localStorage.setItem("planterCost",planterCost+'');


    this.router.navigate(['planterDetails']);
    
    
  }
  
  placeOrder(planterId:number,plantName:string,category:string,planterCost:number)
  {
    
    localStorage.removeItem('productId')
    localStorage.removeItem('productName')
    localStorage.removeItem('price')
    // localStorage.removeItem('height')
    localStorage.removeItem('category')
    localStorage.removeItem('bloomSeason')
    localStorage.removeItem('about')
    // localStorage.removeItem('discount')
    //localStorage.removeItem('imageName')
    // localStorage.removeItem('price')
    localStorage.removeItem('starRating')

  
  
    localStorage.setItem("productId",planterId+'');
    localStorage.setItem("productName",plantName);
    // localStorage.setItem("height",height+'');
    localStorage.setItem("price",planterCost+'');
    localStorage.setItem("category", category="planter");
    
    

    this.router.navigate(['order']);
    
  }

  

}


