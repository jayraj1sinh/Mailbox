import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mail-card.html',
  styleUrl: './mail-card.scss',
})
export class MailCardComponent {
  @Input() mail: any;
  @Input() selected = false;
}