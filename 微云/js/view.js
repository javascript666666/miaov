

viewHtml(data, 0);


// 树状菜单、导航、文件区域渲染入口
function viewHtml(data, id){
  createFiles(data, id);
  createFileNavs(data, id);
  createTree(data, id);
}