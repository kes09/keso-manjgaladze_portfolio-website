import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HttpClientModule, CommonModule,],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  repositories: any[] = [];
  newRepo = { name: '', description: '', language: '', homepage: '' };

  apiUrl = 'https://api.github.com/users/kes09/repos';

  projectImages: { [key: string]: string } = {
    'Final': '/project1.png',
    'main-prj': '/project2.png',
    'summer-club-application': '/project3.png',
    'keso-manjgaladze_portfolio-website':'/project4.png',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRepositories();
  }

  // Fetch GitHub repositories
  fetchRepositories(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.repositories = data.map(repo => ({
          ...repo,
          image: this.projectImages[repo.name] || 'assets/default.png',
        }));
      },
      (error) => {
        console.error('Error fetching repositories:', error);
      }
    );
  }



}
