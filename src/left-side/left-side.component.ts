import { Component } from '@angular/core';
import { SharedService } from '../shared-service';

interface Option {
  display: string;
  active: boolean;
  index: number;
}

@Component({
  selector: 'left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss'],
})
export class LeftSideComponent {
  constructor(private sharedService: SharedService) {}

  options: Option[] = [
    { display: 'ABOUT', active: true, index: 1 },
    { display: 'EXPERIENCE', active: false, index: 2 },
    { display: 'PROJECTS', active: false, index: 3 },
  ];

  onOptionSelected(optionSelected: number): void {
    this.options = this.options.map((option) => ({
      ...option,
      active: option.index === optionSelected,
    }));

    this.sharedService.updateSelectedOption(optionSelected);
  }
}
