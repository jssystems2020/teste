import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/domain/categoria.service';

type NewType = CategoriaService;

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  items: CategoriaDTO[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public CategoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    /*console.log('ionViewDidLoad CategoriasPage');*/
    this.CategoriaService.findAll()
      .subscribe(Response => {
        console.log(Response);
        this.items = Response;
      },
        error => {
          console.log(error);
        });
  }
}
