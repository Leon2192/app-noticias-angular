import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'General';
  paisSeleccionado = 'Argentina';

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud y bienestar' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
  ];

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'gb', nombre: 'Reino unido' },
  ];

  constructor() {}

  ngOnInit(): void {}

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };

    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
