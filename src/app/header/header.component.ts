import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from "../services/theme.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  theme!: string; 
  menuOpen = false;  

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    
    this.themeService.theme$.subscribe((theme) => {
      this.theme = theme; 
    });
  }

  ngAfterViewInit(): void {
  
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.theme = savedTheme;
    document.body.classList.add(this.theme);  
  }

  toggleTheme() {
    
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;  
  }
}
