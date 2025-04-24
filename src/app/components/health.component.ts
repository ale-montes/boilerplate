import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthService } from '../services/health.service';

@Component({
  selector: 'app-health',
  template: `
    <h2>Estado del backend</h2>
    <p *ngIf="mensaje">{{ mensaje }}</p>
  `,
  imports: [CommonModule],
})
export class HealthComponent implements OnInit {
  mensaje = '';

  constructor(private healthService: HealthService) {}

  ngOnInit(): void {
    this.healthService.getHealth().subscribe({
      next: res => this.mensaje = res.message,
      error: err => this.mensaje = 'Error al conectar con el backend'
    });
  }
}
