import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../order.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {

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
