import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: string[];
  constructor() {}

  ngOnInit(): void {
    this.features = [
      '3,857,000 Trusting Customers',
      '99.999% Uptime Guarantee',
      'Lightning Fast CDN'
    ];
  }
}
