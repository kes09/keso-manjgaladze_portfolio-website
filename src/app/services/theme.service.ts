// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSource = new BehaviorSubject<string>('light');
  theme$ = this.themeSource.asObservable();

  setTheme(theme: string): void {
    this.themeSource.next(theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    const newTheme = this.themeSource.value === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  private applyTheme(theme: string): void {
    const body = document.body;
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
  }
}
