
createFileNavs(document.querySelector('.file-navs-list'), data, 0);


function createFileNavs(parentNode, data, id){
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
    navItem.onclick = function (){
      createFiles(document.querySelector('.weiyun-list-file'), data, this.Id);
      createFileNavs(document.querySelector('.file-navs-list'), data, this.Id);
    }
    navItem.innerHTML = parents[i].name;
    parentNode.appendChild(navItem);
  }
}