import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailCardComponent } from '../mail-card/mail-card';
@Component({
  selector: 'app-mailbox',
  standalone: true,
  imports: [CommonModule, MailCardComponent],
  templateUrl: './mailbox.html',
  styleUrl: './mailbox.scss',
})
export class Mailbox {
  selectedMail = 0;
  isMobileView = false;
  showSidebar = false;
  showMailView = false;
  folders = [
    { name: 'Office', color: '#4f6fff' },
    { name: 'Personal', color: '#ff8f9f' },
    { name: 'Freelance', color: '#ffd25d' },
  ];

  mails = [
  {
    name: 'Sam Miller',
    title: 'Portfolio',
    time: '08:45 PM',
    day: 'Today',
    avatar: 'asset/images/joseph-gonzalez-iFgRcqHznqg-unsplash.png',
    message:
      'Stop wasting time looking for files buried in folders. Visually organize all your assets in one place.',
  },
  {
    name: 'Lily Jones',
    title: 'Invitations',
    time: '01:11 PM',
    day: 'Yesterday',
    avatar: 'asset/images/Image 5.png',
    message:
      'Its always a pleasure to have you all at my birthday parties.',
  },
  {
    name: 'Smith',
    title: 'Assignment Submission',
    time: '06:45 PM',
    day: 'Monday',
    avatar: 'asset/images/NoPath - Copy (6).png',
    message:
      'If you want to set up an assignment with additional reviews.',
  },
  {
    name: 'Patrick',
    title: 'Interview Scheduled',
    time: '05:15 PM',
    day: 'Monday',
    avatar: 'asset/images/pexels-photo-839011.png',
    message:
      'Thanks for applying for UI/UX Designer. We are reviewing resumes.',
  },
];

  get activeMail() {
    return this.mails[this.selectedMail];
  }

 selectMail(index: number) {
  this.selectedMail = index;

  if (window.innerWidth <= 768) {
    this.showMailView = true;
  }
}

goBack() {
  this.showMailView = false;
}

toggleSidebar() {
  this.showSidebar = !this.showSidebar;
}
}
