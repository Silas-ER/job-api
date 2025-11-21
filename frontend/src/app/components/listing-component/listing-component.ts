import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobsService, Job } from '../../services/job.service';
import { CompaniesService, Company } from '../../services/companies.service';

interface ListingItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  meta?: string;
  additionalInfo?: string;
}

@Component({
  selector: 'app-listing-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-component.html', 
  styleUrl: './listing-component.css',
})

export class ListingComponent implements OnInit {
  items: ListingItem[] = [];
  loading = true;
  listingType: 'jobs' | 'companies' = 'jobs';
  
  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    private companiesService: CompaniesService
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const path = url[0]?.path || 'jobs';
      this.listingType = path as 'jobs' | 'companies';
      this.loadData();
    });
  }

  private loadData(): void {
    this.loading = true;

    if (this.listingType === 'jobs') {
      this.loadJobs();
    } else {
      this.loadCompanies();
    }
  }

  private loadJobs(): void {
    this.jobsService.getJobs().subscribe({
      next: (jobs: Job[]) => {
        this.items = jobs.map(job => ({
          id: job.id,
          title: job.title,
          subtitle: job.company?.name || 'Empresa não informada',
          description: job.description,
          meta: job.limitDate,
          additionalInfo: job.candidates ? `${job.candidates.length} candidatos` : undefined
        }));
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Erro ao carregar vagas:', error);
        this.loading = false;
      }
    });
  }

  private loadCompanies(): void {
    this.companiesService.getCompanies().subscribe({
      next: (companies: Company[]) => {
        this.items = companies.map(company => ({
          id: company.id,
          title: company.name,
          subtitle: company.website || 'Website não informado',
          description: company.bio,
          meta: company.email,
          additionalInfo: undefined
        }));
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Erro ao carregar empresas:', error);
        this.loading = false;
      }
    });
  }

  getPageTitle(): string {
    return this.listingType === 'jobs' ? 'Vagas Disponíveis' : 'Empresas Cadastradas';
  }

  getPageSubtitle(): string {
    return this.listingType === 'jobs' 
      ? 'Encontre a oportunidade perfeita para sua carreira'
      : 'Conheça as empresas que estão contratando';
  }

  getButtonText(): string {
    return this.listingType === 'jobs' ? 'Ver Detalhes da Vaga' : 'Ver Perfil da Empresa';
  }

  viewItemDetails(itemId: number): void {
    console.log(`Ver detalhes ${this.listingType}:`, itemId);
    // Implementar navegação para detalhes
  }
}