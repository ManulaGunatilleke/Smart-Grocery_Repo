import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  interpolation: ["?","?"],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    alert('ngOnInit hook is called!');
  }

  public firstProductItemName = 'White Basmathi Rice';

  public InventoryForRice = 350;
  public isRiceProductInventory = false;

  public InventoryForFlour = 50;
  public isFlourProductInventory = false;

  public rowIndex!: number;
  showAddProduct!: boolean;

  public getPriceofRice() {
    return 350;
  }

  public secondProductItemName = 'Wheat Flour';

  public getQuantityofFlour() {
    return 225;
  }

  public getRiceInventory() {
    if (this.InventoryForRice >= 50 && this.InventoryForRice <= 200) {
      this.isRiceProductInventory = true;
    } else if (this.InventoryForRice >= 50) {
      this.isRiceProductInventory = false;
    }

    return this.InventoryForRice;  

  }

  public getFlourInventory() {
    if (this.InventoryForFlour >= 50 && this.InventoryForFlour <= 200) {
      this.isFlourProductInventory = true;
    } else if (this.InventoryForFlour >= 50) {
      this.isFlourProductInventory = false;
    }

    return this.InventoryForFlour;

  }

  public products = [{
    'productId' : "001",
    'productName' : "White Basmathi Rice",
    'createdDate': "Jan 29, 2020",
    'quantity': 100,
    'unitPrice': "400",
    'productDescription':"White Basmathi Rice imported from pakistan"
  },
  { 
  'productId' : "002",
  'productName' : "Flour",
  'createdDate': "Jan 29, 2020",
  'quantity': 50,
  'unitPrice': "190",
  'productDescription':"Super Fine Whole grain general Purpose flour"
  },
  
  { 
    'productId' : "003",
    'productName' : "sugar",
    'createdDate': "Jan 29, 2020",
    'quantity': 1200,
    'unitPrice': "200",
    'productDescription':"White sugar manufactured by Palwatte Factory"
  },{
    'productId' : "004",
    'productName' : "Dhal",
    'createdDate': "Jan 29, 2020",
    'quantity': 10,
    'unitPrice': "200",
    'productDescription':"Imported mysoor dhal from India"
  }
  
  ]

  public selectProduct(selectedRow: number) {
    this.rowIndex = selectedRow;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }

}
