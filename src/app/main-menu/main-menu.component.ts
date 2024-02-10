import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test, TESTS } from '../../database/tests';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

@Component({
  selector: 'codes-learner-main-menu',
  standalone: true,
  imports: [CommonModule, TuiIslandModule, TuiLinkModule, TuiButtonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.less',
})
export class MainMenuComponent {
  tests: Test[] = TESTS;

  alert(text: string) {
    alert(text);
  }
}
