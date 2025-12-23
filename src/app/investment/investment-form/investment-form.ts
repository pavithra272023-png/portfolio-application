import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Portfolio } from '../../core/services/portfolio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './investment-form.html',
  styleUrl: './investment-form.css',
})
export class InvestmentForm {
investmentForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private portfolioService:Portfolio,
    private router : Router
  ){
    this.investmentForm=this.formBuilder.group({
    assetType:['',[Validators.required]],
    quantity:[null,[Validators.required,Validators.min(1)]],
    price:[null,[Validators.required,Validators.min(1)]],
    purchasedDate:['',[Validators.required]] 

  });
  }

  submit(){
   
    if(this.investmentForm.valid){
      console.log('value -->',this.investmentForm.value);
      this.portfolioService.addInvestment(this.investmentForm.value);
      this.investmentForm.reset();
      this.router.navigate(['/']);
    }
  }

  

}
