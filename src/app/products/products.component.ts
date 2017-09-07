import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  category: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute ) {

    // productService.getAll()
    //   .subscribe( products => {
    //     this.products = products
    //
    //     route.queryParamMap.subscribe( params => {
    //       this.category = params.get('category');
    //
    //       this.filteredProducts = (this.category) ?
    //         this.products.filter( p => p.category === this.category) :
    //         this.products;
    //     });
    //   });

      productService
        .getAll()
        .switchMap( products => {
          this.products = products
          return route.queryParamMap;
        })
        .subscribe( params => {
          this.category = params.get('category');

          this.filteredProducts = (this.category) ?
              this.products.filter( p => p.category === this.category) :
              this.products;
          });


      }

  ngOnInit() {
  }

}
