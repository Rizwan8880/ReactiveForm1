import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';//3
import Swal  from 'sweetalert2';//3 bro
import { userInfo } from 'os';//1//npm i sweetalert2
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';//c()p t:t{}
  constructor(private tos: ToastrService ,private fb:FormBuilder, private _service : DataService ){
    

  }
  // registerForm: FormGroup= new FormGroup({});
  registerForm :FormGroup ;
  public  selectedIndex : number 
  public empDetails = {}
 public employee : any[] = []
ngOnInit(){
  this.setFormState();
  this.getList()
  
}
public age
public showAge


ageCalculator(age){

    const dob = new Date(age);
    // console.log("convert age",convertAge)
    // const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    // console.log("time diff",timeDiff)
    // let showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    //timestamp
    //date string
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    console.log("final",Math.abs(age_dt.getUTCFullYear() - 1970))
    return Math.abs(age_dt.getUTCFullYear() - 1970);
    // return showAge
}

  setFormState(){
    this.registerForm =this.fb.group({
      title:['',Validators.required],
      firstName :['',Validators.compose([Validators.required,Validators.minLength(3)])],
      // LastName :['',Validators.compose([Validators.required,Validators.minLength(3)])],
      email :['',Validators.compose([Validators.required,Validators.email])],
      dob:['',Validators.compose([Validators.required,])],
       country :['',Validators.compose([Validators.required,])],
    })
  }
  public image:File
 
  save(){

    if(this.registerForm.invalid){
      let obj = {
        user_img: [''],
        title : this.registerForm.controls['title'].value,
        firstName : this.registerForm.controls['firstName'].value,
        email : this.registerForm.controls['email'].value,
        dob : this.registerForm.controls['dob'].value,
        country:this.registerForm.controls['country'].value

      }
      this._service.addUser(obj).subscribe((data)=>{
        console.log("added",data)
        this.getList()
      },(err)=>{
        console.log("not added",err)
      })
    }
  }
  getList(){
      this._service.getListUser().subscribe((data : any)=>{
        console.log("list",data)
        this.employee = data
      },(err)=>{
        console.log("not list",err)
      })
    
  }
  onFileSelect(event:any){
    console.log(event);
    this.image=event.target.files[0]
    console.log(this.image);}
  edit( ){
    let obj = {
      title : this.registerForm.controls['title'].value,
      firstName : this.registerForm.controls['firstName'].value,
      email : this.registerForm.controls['email'].value,
      dob : this.registerForm.controls['dob'].value
    }
    let id = this.empDetails['id']
    console.log("update employee id is",id)
    console.log("obj data   ",obj);
    
    this._service.updateUser(id , obj ).subscribe(data=>{
      console.log("update api success",data);
      this.getList()
    },(err)=>{
      console.log("update api failed",err);
    })
    
  }

  // delete(id)
  // {
  //   this._service.deleteUser( id ).subscribe((data : any)=>{
  //     console.log("deleted",data)
  //     this.getList()
  //   },(err)=>{
  //     console.log("not delete",err)
  //   })
  
  // }
  delete(id){
    this._service.deleteUser( id ).subscribe(row=>{ alert("User Deleted")
    this.getList();
  })}
  onCancel(){
    this.registerForm.reset();
  }
  setData(i)
  {

    console.log("selected index is", i);
    
    this.selectedIndex = i ;
    this.empDetails = this.employee[i]
    console.log("emplouee details",this.empDetails)
    this.registerForm.controls['email'].setValue(this.empDetails['email'])
    this.registerForm.controls['firstName'].setValue(this.empDetails['firstName'])
      this.registerForm.controls['title'].setValue(this.empDetails['title'])
      //  this.registerForm.controls['firstName'].value = empDetails.firstName
      // email : this.registerForm.controls['email'].value = empDetails.email
      // // dob : this.registerForm.controls['dob'].value 
    }
   
  }
 
