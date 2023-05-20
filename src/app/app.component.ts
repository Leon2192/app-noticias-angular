import { Component, OnInit } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias:any[] = [];
  loading = false;

 constructor(private _noticiasService:NoticiaService){

 }

  buscarNoticias(parametros:any){
    console.log('Componente padre');
    console.log(parametros);
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiasService.getNoticias(parametros).subscribe(data => {
        this.loading = false;
        console.log(data)
        this.listNoticias = data.articles;
      }, error => {
        console.log(error)
        this.loading = false;
      })
    },1000)


  }
}
