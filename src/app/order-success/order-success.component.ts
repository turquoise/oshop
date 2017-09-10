import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  order = {};
  items;
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService) {


    this.id = this.route.snapshot.paramMap.get('id');
    //console.log('this.id ', this.id);

    if (this.id) {
      this.orderService.get(this.id)
        .subscribe( o => {
          this.order = o;
          this.items = o.items;
          console.log('this.items ', this.items);
        });
    }

  }

  ngOnInit() {
  }

  totalPrice() {
    let sum = 0;
    for (let productId in this.items)
      sum += this.items[productId].totalPrice;
    //console.log('sum ', sum);
    return sum;
  }

}
