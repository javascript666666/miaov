
createTree(data, 0);

function createTree(data, id){
  
  var treeHtml = document.querySelector('.weiyun-list-tree');
  treeHtml.innerHTML = '';
  treeHtml.innerHTML = createTree(data);
  
  var menuWrap = treeHtml.children[0];
  
  toggleMenu(menuWrap);
  
  function toggleMenu(menuWrap){
    var chilren = menuWrap.children;
    for(var i=0; i<chilren.length; i++){
      var menuTitle = chilren[i].firstElementChild;
      // console.log(menuTitle.dataset.id);
      menuTitle.onclick = function (){
        var nextSibling = this.nextElementSibling;
        if(nextSibling){
          var parentParent = this.parentNode.parentNode;
          var allMenus = parentParent.getElementsByTagName('ul');
          var allSpans = parentParent.getElementsByTagName('spans');
          var allImgs = parentParent.getElementsByTagName('i');
          for(var i=0; i<allMenus.length; i++){
            if(allMenus[i] !== nextSibling){
              allMenus[i].classList.remove('active');
              allMenus[i].previousElementSibling.firstElementChild.classList.remove('active');
              allMenus[i].previousElementSibling.firstElementChild.nextElementSibling.classList.remove('active');
            }
          }
          this.firstElementChild.classList.toggle('active');
          this.firstElementChild.nextElementSibling.classList.toggle('active');
          nextSibling.classList.toggle('active');
          if(nextSibling.classList.contains('active')){
            createFiles(document.querySelector('.weiyun-list-file'), data, this.dataset.id*1);
            createFileNavs(document.querySelector('.file-navs-list'), data, this.dataset.id*1);
          }else{
            createFiles(document.querySelector('.weiyun-list-file'), data, this.dataset.pid*1);
            createFileNavs(document.querySelector('.file-navs-list'), data, this.dataset.pid*1);
          }
          toggleMenu(nextSibling);
        }else{
          createFiles(document.querySelector('.weiyun-list-file'), data, this.dataset.id*1);
          createFileNavs(document.querySelector('.file-navs-list'), data, this.dataset.id*1);
        }
      };
    }
  }
  
  
  // 生成左侧树形菜单
  function createTree(data, id){
    var str = '<ul>';
    for(var i=0; i<data.length; i++){
      var clssNameAdd = data[i].child ? 'add' : '';
      str += `<li class="clear""> 
                <h2 data-Id="${data[i].id}" data-pid="${data[i].pId}">
                  <span class="${clssNameAdd}"></span>
                  <i class="add"></i>
                  ${data[i].name}
                </h2>`;
      str += data[i].child ?`${createTree(data[i].child)}` : '';
      str += '</li>';
    }
    str += '</ul>';
    return str;
  }
}

