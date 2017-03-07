/**
 * 创建树形菜单
 * @param  {Object} data 数据
 * @param  {number} id   对应数据id用来添加class
 * @return {undefined}      
 */
function createTree(data, id){

  var parentNode = document.querySelector('.weiyun-outer-menu');
  parentNode.innerHTML = '';
  parentNode.innerHTML = createTreeHtml(data, id);
  
  // 后期改成事件委托
  var menuTitle = parentNode.getElementsByTagName('h2');
  for(var i=0; i<menuTitle.length; i++){
    menuTitle[i].onclick = function (){
      var id = this.dataset.id * 1;
      // createFiles(data, id);
      // createFileNavs(data, id);
      // createTree(data, id);
      viewHtml(data, id);
    };
  }
  
  // 生成左侧树形菜单
  function createTreeHtml(data, id){
    var str = '';
    for(var i=0; i<data.length; i++){
      str += `<li class="clear""> 
                <h2 class="${data[i].id === id ? 'active' : ''}" data-Id="${data[i].id}" data-pid="${data[i].pId}">
                  <span class="${data[i].child ? 'add' : ''} active"></span>
                  <i class="add active"></i>
                  ${data[i].name}
                </h2>`;
      str += data[i].child ?`<ul>${createTreeHtml(data[i].child, id)}</ul>` : '';
      str += '</li>';
    }
    str += ''
    return str;
  }
}























// createTree(parentNode, data);
// 
// function createTree(parent, data, id){
//   
//   for(var i=0; i<data.length; i++){
//     var menuItem = document.createElement('li');
//     menuItem.className = 'clear';
//     
//     var menuTitle = document.createElement('h2');
//     menuTitle.innerHTML = data[i].name;
//     menuTitle.Id = data[i].id;
//     menuTitle.pId = data[i].pId;
//     menuTitle.className = (data[i].id === id && id !== 0) ? 'active' : '';
//     
//     var menuImgActive = document.createElement('span');
//     var menuImgFolder = document.createElement('i');
//     menuImgFolder.className = 'add';
//     
//     menuTitle.insertBefore(menuImgActive, menuTitle.childNodes[0]);
//     menuTitle.insertBefore(menuImgFolder, menuImgActive);
//     
//     menuItem.appendChild(menuTitle);
//     
//     menuTitle.onclick = function(){
//       var nextSibling = this.nextElementSibling;
//       if(nextSibling){
//         var parentParent = this.parentNode.parentNode;
//         var allMenuList = parentParent.getElementsByTagName('ul');
//         
//         for(var i=0; i<allMenuList.length; i++){
//           if(allMenuList[i] != nextSibling){
//             allMenuList[i].classList.remove('active');
//             allMenuList[i].previousElementSibling.firstElementChild.classList.remove('active');
//             allMenuList[i].previousElementSibling.firstElementChild.nextElementSibling.classList.remove('active');
//           }
//         }
//         
//         nextSibling.classList.toggle('active');
//         this.firstElementChild.classList.toggle('active');
//         this.firstElementChild.nextElementSibling.classList.toggle('active');
//         
//         if(nextSibling.classList.contains('active')){
//           createFiles(data, this.Id);
//           createFileNavs(data, this.Id);
//         }else{
//           createFiles(data, this.pId);
//           createFileNavs(data, this.pId);
//         }
//       }else{
//         createFiles(data, this.Id);
//         createFileNavs(data, this.Id);
//       }
//     };
//     
//     
//     if(data[i].child){
//       menuImgActive.className = 'add';
//       
//       var menuList = document.createElement('ul');
//       createTree(menuList, data[i].child, id);
//       
//       menuItem.appendChild(menuList);
//     }
//     
//     parent.appendChild(menuItem);
//   }
//   
// }

