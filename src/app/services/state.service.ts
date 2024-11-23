import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private projectsSource = new BehaviorSubject<any[]>([]);
  projects$ = this.projectsSource.asObservable();

  setProjects(projects: any[]) {
    this.projectsSource.next(projects);
  }

  addProject(project: any) {
    const currentProjects = this.projectsSource.value;
    this.projectsSource.next([...currentProjects, project]);
  }
}
