import { Component } from '@angular/core';
import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';
import { DataService } from "./data-service/data.service"

import {fadeInOut} from './FadeInOutAnimation/fadeInOut';
import { TreeService} from './tree-service/tree.service';
import { WindowService} from './window-service/window.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut()]
})
export class AppComponent {
  title = 'Angular Shop';
  productsTree = [];
  currentProduct : any;
  sidenavMode = 'side';
  sidenavIsOpened = false;
  productViewFadeIn = 'fadeIn';
  actionMapping: IActionMapping = {
    mouse: {
      click: (tree, node, $event) => {
        // If node doesn't have children = is a product
        if (!node.data.children) {
          if(node.data.code != this.currentProduct.code){
            this.productViewFadeIn = 'fadeOut';
            if(!this.largeScreen){
              this.openCloseSidenav();
            }
            // For animation
            setTimeout(()=>{
              this.setCurrentProduct(node.data.code);
              this.productViewFadeIn = 'fadeIn';
            },300)
          }
        }
        else{
          if(node.isCollapsed){
            node.expand();
          }
          else{
            node.collapse();
          }
        }
      }
    }
  }
  treeOptions = {
    actionMapping: this.actionMapping,
    levelPadding: -5,
    animateExpand: true,
    animateSpeed: 40,
    animateAcceleration: 1.2
   };
  products = [];
  windowRef : any;
  largeScreen = true;
  constructor(private DataService: DataService, private TreeService: TreeService, private WindowService: WindowService) {
    // Get products
      this.products = DataService.getProducts();
      this.setCurrentProduct(this.products[0].code);
      this.productsTree = TreeService.formTree(this.products);
    // on window resize
    this.largeScreen = this.WindowService.isLargeScreen();
    this.windowRef = this.WindowService.nativeWindow();
    this.windowRef.onresize = ()=>{
      this.largeScreen = this.WindowService.isLargeScreen();
    };

    // IeHack
    let myWind = this.WindowService.nativeWindow()
    let el = myWind.document.getElementsByClassName('my-toolbar');
    setTimeout(()=>{
      el[0].click();
    },100);
    setTimeout(()=>{
      el[0].click();
    },200);
    setTimeout(()=>{
      el[0].click();
    },300)
  };

  public setCurrentProduct(code){
    for(let i = 0; i < this.products.length; i++){
      if(this.products[i].code === code){
        this.currentProduct = this.products[i];
      }
    }
  }
  public openCloseSidenav(){
    this.sidenavIsOpened = !this.sidenavIsOpened;
    console.log(this.sidenavIsOpened);
  }
}
