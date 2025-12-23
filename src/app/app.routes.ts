import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { InvestmentForm } from './investment/investment-form/investment-form';

export const routes: Routes = [
    {path:"",
        loadComponent :()=> import('./dashboard/dashboard').then(m=>m.Dashboard)},
    
        
    {path:"add-investment",
        loadComponent:()=> import('./investment/investment-form/investment-form').then(m=>m.InvestmentForm)
        //component:InvestmentForm
    }
];
