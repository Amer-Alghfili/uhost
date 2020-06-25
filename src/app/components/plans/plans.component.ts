import { Component, OnInit } from '@angular/core';
import { Plan } from '../../model/plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans: Plan[];
  constructor() {}

  ngOnInit(): void {
    this.plans = [
      {
        recommended: false,
        name: 'free',
        price: 0,
        features: [
          '1 Workspace',
          'Unlimited Traffic',
          '10GB Storage',
          'Basic Support'
        ]
      },
      {
        recommended: true,
        name: 'plus',
        price: 29,
        features: [
          '5 Workspaces',
          'Unlimited Traffic',
          '100GB Storage',
          'Plus Support'
        ]
      },
      {
        recommended: false,
        name: 'premium',
        price: 99,
        features: [
          '10 Workspaces',
          'Unlimited Traffic',
          'Unlimited Storage',
          'Priority Support'
        ]
      }
    ];
  }
}
