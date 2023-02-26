import { Component, OnInit } from '@angular/core';
import { User, UserLoginDTO } from '../user';
import { DataOperationService } from '../data-operation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:UserLoginDTO = new UserLoginDTO('','',0,0,'','');

  constructor(private userService:DataOperationService) { }
  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.user);
    this.doSaveTOServer();

    

  }

  doSaveTOServer()
  {
    this.userService.addUser(this.user).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
          //code to navigate to order successful page
      },
      error => {
        console.log(error);
        
      }
     );

}

  }

