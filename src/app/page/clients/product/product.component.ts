import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
  ]
  showImage = true
  listProduct: IProduct[] = [];
  ngOnInit(): void {
    this.listProduct = this.products;
  }
  // filterValue: string = '';//ánh xạ tới textbox search
  // filter() {
  //   //chọn sản phẩm có tên chưa tên giá trị nhập vào
  //   this.products = this.listProduct.filter(p => p.productName.toLowerCase().includes(this.filterValue.toLowerCase()))
  // }
  private _filterValue: string = '';

  set filterValue(value: string) {
    this._filterValue = value;
    // check if filterValue contains all uppercase or all lowercase letters
    const isAllUppercase = value === value.toUpperCase() && value !== value.toLowerCase();
    const isAllLowercase = value === value.toLowerCase() && value !== value.toUpperCase();

    // select products based on the filterValue
    if (isAllUppercase) {
      this.products = this.listProduct.filter(p => p.productName.toUpperCase().includes(value));
    } else if (isAllLowercase) {
      this.products = this.listProduct.filter(p => p.productName.toLowerCase().includes(value));
    } else {
      this.products = this.listProduct.filter(p => p.productName.includes(value));
    }
  }

  get filterValue(): string {
    return this._filterValue;
  }
}
