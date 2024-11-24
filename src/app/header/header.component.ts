import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from "../services/theme.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  theme!: string;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.theme = savedTheme;
    document.body.classList.add(this.theme); 
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove(this.theme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    this.theme = newTheme;
  }
}
