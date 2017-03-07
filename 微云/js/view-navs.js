/**
 * 渲染目录导航栏
 * @param  {Object} data 数据
 * @param  {munber} id   对应层级id
 * @return {undefined}      
 */
function createFileNavs(data, id){
  // 获取导航的最外层父级
  var parentNode = document.querySelector('.file-navs-list');
  // 先清空之前的内容
  parentNode.innerHTML = '';
  
  // 获取当前层级和它的所有父级
  var parents = wy.getItemAndParents(data, id).reverse();
  // 创建导航栏放入外层容器
  for(var i=0; i<parents.length; i++){
    var navItem = document.createElement('span');
    navItem.Id = parents[i].id;
    navItem.className = parents[i].type === 'root' ? 'active' : '';
    
    // 事件部分
    navItem.onclick = function (){
      // createFiles(data, this.Id);
      // createFileNavs(data, this.Id);
      // createTree(data, this.Id);
      viewHtml(data, this.Id);
    };
    
    navItem.innerHTML = parents[i].name;
    parentNode.appendChild(navItem);
  }
}