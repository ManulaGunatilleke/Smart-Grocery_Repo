import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { ViewProductDetailsComponent } from '../view-product-details/view-product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {
  public rowIndex!: number;
  showAddProduct!: boolean;
  isLoading: boolean = false;
  showEditProduct!: boolean; 
  selectedProductId!: number;
  message! : string;
  @ViewChild(ViewProductDetailsComponent) viewComponent! : ViewProductDetailsComponent;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(){
    if (this.viewComponent) {
      this.message = this.viewComponent.childMessage;
    }
  }

  public products: Product[] = [];

  public selectProduct(selectedRow: number, selectedId : number) {
    this.rowIndex = selectedRow;
    this.selectedProductId = selectedId;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }

  refresh() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }
  // getProductsToQuantity() {
  //   this.isLoading = true;
  //   this.productService.getProductsToQuantity().subscribe((res) => {
  //     this.products = res.data;
  //     this.isLoading = false;
  //   });
  // }

  updateProductList(){
    this.getProducts();
  }

  OpenEditProductView(){
    this.showEditProduct = true;
  }

  closeEditView(){
    this.showEditProduct = false;
  }

  closeAddView(){
    this.showAddProduct = false;
  }

}
