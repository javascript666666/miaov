/**
 * 页面渲染函数
 * @param  {Object} data 数据
 * @param  {Number} id   数字
 * @return {undefined}    
 */
function createViewHtml(data, id){
  createTreeHtml(data, id);
  createFilsHtml(data, id);
  createNavsHtml(data, id);
}

// 生成左侧的树状菜单
function createTreeHtml(data, id){
  var html = createTreeMenu(data, id);
  menuTreeParentNode.innerHTML = '';
  menuTreeParentNode.innerHTML = html;
}

// 生成所有的文件
function createFilsHtml(data, id){
  var items = wy.getChildrenById(data, id);
  var nodeHtml = createFiles(items, id);
  filesListParentNode.innerHTML = '';
  filesListParentNode.innerHTML = nodeHtml;
}

// 生成文件导航菜单
function createNavsHtml(data, id){
  var items = wy.getParentsById(data, id);
  var navHtml = createFilesNav(items, id);
  filesNavParentNode.innerHTML = '';
  filesNavParentNode.innerHTML = navHtml;
}