
createFileNavs(data, 0);


function createFileNavs(data, id){
  // 获取导航的最外层父级
  var parentNode = document.querySelector('.file-navs-list');
  // 先清空之前的内容
  parentNode.innerHTML = '';
  // 创建默认显示的微云
  var rootNav = document.createElement('span');
  rootNav.innerHTML = '微云';
  rootNav.className = 'active';
  rootNav.onclick = function (){
    createFiles(document.querySelector('.weiyun-list-file'), data, 0);
    createFileNavs(document.querySelector('.file-navs-list'), data, 0);
  }
  parentNode.appendChild(rootNav);
  // 获取当前层级和它的所有父级
  var parents = wy.getItemAndParents(data, id).reverse();
  // 创建导航栏放入外层容器
  for(var i=0; i<parents.length; i++){
    var navItem = document.createElement('span');
    navItem.Id = parents[i].id;
    
    // 事件部分
    navItem.onclick = function (){
      createFiles(data, this.Id);
      createFileNavs(data, this.Id);
    };
    
    navItem.innerHTML = parents[i].name;
    parentNode.appendChild(navItem);
  }
}