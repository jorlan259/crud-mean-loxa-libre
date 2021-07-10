import { Component } from '@angular/core';
import { Heroe } from './models/Heroe';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  listaHeroes: Heroe[] = [];

  nombre: any;
  heroe: any;
  debilidad: any;
  poder: any;
  descripcion: any;
  constructor(
    private heroesService: HeroesService
  ) {

    this.heroesService.listarHeroes().subscribe(datos => this.listaHeroes = datos);
  }

  guardarDatos() {
    const objetoHereo = {
      nombre: this.nombre,
      heroe: this.heroe,
      debilidad: this.debilidad,
      poder: this.poder,
      descripcion: this.descripcion,
    }
    this.heroesService.crearHeroe(objetoHereo).subscribe(datos => console.log(datos));
  }

  eliminarHereo(nombre: string) {
    this.heroesService.eliminarHoroe(12).subscribe(datos => console.log(datos))
  }

}
