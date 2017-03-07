/**
 * 微云函数库
 */

var wy = {};

// 根据id找到指定的数据 
wy.getItemById = function (data, id){
  var item = null;
  for(var i=0; i<data.length; i++){
    if(data[i].id === id){
      item = data[i];
      break;
    }
    if(!item && data[i].child){
      item = this.getItemById(data[i].child, id);
      if(item){
        break;
      }
    }
  }
  return item;
}

//根据指定的层级的id找到数据的所有子集
wy.getChildrenById = function (data, id){
  var parent = this.getItemById(data, id);
  if(parent){
    return parent.child;
  }
  return undefined;
}

// 根据当前id找到自己以及自己的所有父级
wy.getItemAndParents = function fn(data, id){
  var arr = [];
  var item = this.getItemById(data, id);
  if(item){
    arr.push(item);
    arr = arr.concat(this.getItemAndParents(data, item.pId));
  }
  return arr;
}





















































