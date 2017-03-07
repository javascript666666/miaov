// ----------------------------------------------------------------------------
// 所有的文件数据
var userData = user_data;
var data = userData.files;

// 当前层级，默认是0
var currentId = 0;

// 获取树状菜单的父容器
var menuTreeParentNode = document.querySelector('.weiyun-outer-menu');
// 获取文件列表的父容器
var filesListParentNode = document.querySelector('.weiyun-list-file');
// 获取文件导航的父容器
var filesNavParentNode = document.querySelector('.file-navs-list');


// 初始化渲染页面
createViewHtml(data, currentId);

// ----------------------------------------------------------------------------
// 事件交互三部分关联
// 获取所有的文件容器

intoFolders();

function intoFolders(){
  var files = filesListParentNode.querySelectorAll('.weiyun-file');
  var navs = filesNavParentNode.querySelectorAll('span');
  var trees = menuTreeParentNode.querySelectorAll('h2');
  for(var i=0; i<files.length; i++){
    files[i].onclick = function (){
      var id = this.dataset.id * 1;
      createViewHtml(data, id);
      intoFolders();
    };
  }
  for(var i=0; i<navs.length; i++){
    navs[i].onclick = function (){
      var id = this.dataset.id * 1;
      createViewHtml(data, id);
      intoFolders();
    };
  }
  for(var i=0; i<trees.length; i++){
    trees[i].onclick = function (){
      var id = this.dataset.id * 1;
      createViewHtml(data, id);
      intoFolders();
    };
  }
}

// 创建文件夹
var createNewFolder = document.querySelector('.create-new-folder');

createNewFolder.onclick = function (){
  var newFolder = createFileNode();
  filesListParentNode.insertBefore(newFolder, filesListParentNode.firstElementChild);
  var setNameText = newFolder.querySelector('.file-change-name');
  setNameText.focus();
  
  setNameText.onblur = function (){
    if(this.value === ''){
      filesListParentNode.removeChild(newFolder);
    }
  };
  
  
};











































