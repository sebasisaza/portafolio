import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';

@Component({
  selector: 'right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss'],
})
export class RightSideComponent implements OnInit {
  selectedOption: number | null = null;

  experiences: Experience[] = [
    {
      dates: '2021 Nov - PRESENT',
      position: 'Full Stack Developer',
      company: 'Uruit/Nearsure',
      description:
        'Working with a U.S. client on modernizing an existing application by\
          redesigning the UI and migrating it to Angular 14. Additionally,\
          refactoring and transitioning backend services to Node.js for improved\
          performance and scalability.',
      skills: [
        'Angular',
        'TypeScript',
        'Rxjs',
        'Ngrx',
        'HTML & SCSS',
        'Node.js',
      ],
    },
    {
      dates: '2021 Oct - 2021 Nov',
      position: 'Full Stack Developer',
      company: 'ITGlobers',
      description:
        'Collaborated with the team to resolve bugs, implement new features,\
          and refine styles for an eCommerce platform, ensuring alignment with\
          design specifications.',
      skills: ['Angular', '.NET'],
    },
    {
      dates: '2021 Mar - 2021 Sep',
      position: 'Full Stack Developer',
      company: 'XpertGroup',
      description:
        'Worked with a client on a customer loyalty application that rewarded\
          users with points, which could later be redeemed for products, trips,\
          and other benefits.',
      skills: ['Angular', 'Node.js', 'AWS (Lambda)', '.NET'],
    },
    {
      dates: '2019 Apr - 2021 Mar',
      position: 'Full Stack Developer',
      company: 'ControlT',
      description:
        'Worked with a client on a web application for vehicle route\
          management, including GPS tracking, route planning, route alerts, and\
          advanced alert configuration.',
      skills: ['.NET', 'AngularJs', 'Vue.js', 'AWS (Dynamo)'],
    },
    {
      dates: '2019 Feb - 2019 Apr',
      position: 'Backend Developer',
      company: 'Outsourcing',
      description:
        'Worked at a company providing support for an application used in call\
          center management.',
      skills: ['.NET', 'SQL SERVER'],
    },
    {
      dates: '2016 Nov - 2018 Oct',
      position: 'Full Stack Developer',
      company: 'Cinnco',
      description:
        'Worked on multiple projects, leading the development from\
          requirements gathering to the complete implementation of management\
          systems for accounting, accounts receivable, inventory, and\
          invoicing.',
      skills: ['PHP', 'Laravel', 'JavaScript', 'HTML', 'SCSS'],
    },
    {
      dates: '2015 Dec - 2016 Jun',
      position: 'Junior Developer',
      company: 'Indra',
      description:
        'Worked on gathering and defining functional requirements for a\
          well-known company in the insurance sector.',
      skills: ['PL/SQL', 'AngularJs'],
    },
  ];

  projects: Project[] = [
    {
      project: 'Medical Record',
      description:
        'It is a web application that I developed myself for managing\
            patients and their medical records. Currently, some clients pay a\
            monthly fee to use it. I built it using Angular, Node.js, AWS\
            DynamoDB, and Firebase.',
      url: 'https://medicalrecordlandingpage.onrender.com/',
    },
    {
      project: 'Cupon Tours',
      description:
        'Worked on frontend adjustments and improvements for a short-term rental property management application, improving the user interface and enhancing the overall user experience.',
      url: 'https://ct-dash-prd.web.app/',
    },
    {
      project: 'Control T',
      description:
        'A transportation management application with customized smart alarms, automatic email notifications, unlimited advanced reports, and a driver app.',
      url: 'https://controlt.io/',
    },
    {
      project: 'Puntos Colombia',
      description:
        'I worked supporting a rewards program that rewards customer loyalty by allowing users to accumulate points with purchases made using their credit cards.',
      url: 'https://www.puntoscolombia.com/personas/inicio',
    },
  ];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.selectedOption$.subscribe((option) => {
      const target =
        option === 1
          ? 'about'
          : option === 2
          ? 'experience'
          : option === 3
          ? 'projects'
          : '';

      this.onScroll(target);
    });
  }

  public onScroll(target: string): void {
    const element = document.getElementById(target);
    if (target && element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
