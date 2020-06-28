import { Component, OnInit } from '@angular/core';
import { Plugins } from 'protractor/built/plugins';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages: object[];
  constructor() {}

  ngOnInit(): void {
    this.packages = [
      {
        type: 'plus',
        recommended: true,
        title: 'The most popular choice of our customers.',
        description:
          'Benefit from increased storage and faster support to ensure that your mission-critical data and applications are always available!'
      },
      {
        type: 'free',
        recommended: false,
        title: 'An extremely solid start into our hosting world.',
        description: 'Get start immediately at zero costs!'
      },
      {
        type: 'premium',
        recommended: false,
        title: 'All your enterprise needs. Instant support, guaranteed uptime.',
        description:
          'The best solution for small to large enterprises. Because hosting should not be in the way!'
      }
    ];
  }
}
