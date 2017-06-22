import { Injectable } from '@angular/core';

@Injectable()
export class TreeService {

  constructor() { }
  public formTree(items) {
    let tree = [];
    let idCounter = 0;
    for (let i = 0; i < items.length; i++) {
      let pos = -1;
      for (let j = 0; j < tree.length; j++) {
        if (tree[j].name === items[i].type) {
          pos = j;
        }
      }
      if (pos === -1) {
        tree.push({ id: ++idCounter, name: items[i].type, children: [] });
        pos = tree.length - 1;
      }
      let categoryPos = -1;
      if (!items[i].subtype) {
        for(let l = 0; l < tree[pos].children.length; l++){
          if(items[i].category === tree[pos].children[l].name){
            categoryPos = l;
          }
        }
        if(categoryPos === -1){
          tree[pos].children.push({id: ++idCounter, name: items[i].category, children: []});
          categoryPos = tree[pos].children.length - 1;
        }
        tree[pos].children[categoryPos].children.push({ id: ++idCounter, name: items[i].title, code: items[i].code })
      }
      else {
        let subPos = -1;
        for (let k = 0; k < tree[pos].children.length; k++) {
          if (tree[pos].children[k].name === items[i].subtype) {
            subPos = k;
          }
        }
        if (subPos === -1) {
          tree[pos]["children"].push({ id: ++idCounter, name: items[i].subtype, children: [] });
          subPos = tree[pos]["children"].length - 1;
        }
        for(let l = 0; l < tree[pos].children[subPos].children.length; l++){
          if(items[i].category === tree[pos].children[subPos].children[l].name){
            categoryPos = l;
          }
        }
        if(categoryPos === -1){
          tree[pos].children[subPos].children.push({id: ++idCounter, name: items[i].category, children: []});
          categoryPos = tree[pos].children[subPos].children.length - 1;
        }

        tree[pos].children[subPos].children[categoryPos].children.push({ id: ++idCounter, name: items[i].title, code: items[i].code })

      }
    }
    return tree;
  }

}
