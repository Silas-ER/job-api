import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService, Job } from '../../services/job.service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent implements OnInit {
  jobs: Job[] = [];
  loading = true;

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  private loadJobs(): void {
    this.jobsService.getJobs().subscribe({
      next: (jobs: Job[]) => {
        this.jobs = jobs;
        this.loading = false;
        console.log('Jobs carregados:', jobs);
      },
      error: (error: any) => {
        console.error('Erro ao carregar vagas:', error);
        this.loading = false;
      }
    });
  }

  viewJobDetails(jobId: number): void {
    console.log('Ver detalhes da vaga:', jobId);
    // Implementar navegação para detalhes
  }
}