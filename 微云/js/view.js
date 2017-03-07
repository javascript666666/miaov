

viewHtml(data, 0);


// 树状菜单、导航、文件区域渲染入口
function viewHtml(data, id){
  viewFiles(data, id);
  viewTree(data, id);
  viewFileNavs(data, id);
}

// ------------------------------------------------------------------

// 文件区域父级
function viewFiles(data, id){
  var parentNode = document.querySelector('.weiyun-list-file');
  parentNode.innerHTML = '';
  createFiles(data, id).forEach(function(item, i) {
    parentNode.appendChild(item);
  });
  var filesImgs = parentNode.querySelectorAll('.file-img');
  for(var i=0; i<filesImgs.length; i++){
    filesImgs[i].onclick = function (){
      viewHtml(data, this.Id);
    }
  }
}

// 树形菜单区域
function viewTree(data, id){
  var parentNode = document.querySelector('.weiyun-outer-menu');
  parentNode.innerHTML = '';
  parentNode.innerHTML = createTree(data, id);
  var menuTitles = parentNode.getElementsByTagName('h2');
  for(var i=0; i<menuTitles.length; i++){
    menuTitles[i].onclick = function (){
      //console.log(this.dataset);
      viewHtml(data, this.dataset.id * 1);
    };
  }
}

// 渲染文件导航
function viewFileNavs(data, id){
  var parentNode = document.querySelector('.file-navs-list');
  parentNode.innerHTML = '';
  createFileNavs(data, id).forEach(function(item, i) {
    parentNode.appendChild(item);
  });
  var navsItem = parentNode.getElementsByTagName('span');
  for(var i=0; i<navsItem.length; i++){
    navsItem[i].onclick = function (){
      // console.log(this.Id);
      viewHtml(data, this.Id);
    };
  }
}



















