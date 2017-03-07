/**
 * 创建文件区域的所有文件
 * @param  {Object} data 数据
 * @param  {number} pId  对应层级id
 * @return {undefined}      
 */
function createFiles(data, id){
  // 获取显示文件区域的父级
  var parentNode = document.querySelector('.weiyun-list-file');
  // 先清空已经存在的内容
  parentNode.innerHTML = '';
  // 获取当前层级的所有文件
  var files = wy.getChildrenById(data, id);
  // console.log(files);
  if(!files) return;
  for(var i=0, len = files.length; i<len; i++){
    // 创建文件最外层
    var weiyunFile = document.createElement('div');
    weiyunFile.className = 'weiyun-file';
    //-------------------------------------------------------------
    // 创建选框
    var fileCheckBox = document.createElement('span');
    fileCheckBox.className = 'file-checkbox';
    //-------------------------------------------------------------
    // 创建文件图标
    var fileImg = document.createElement('div');
    fileImg.className = 'file-img';
    fileImg.Id = files[i].id;
    //-------------------------------------------------------------
    // 创建文件名字外层
    var fileName = document.createElement('div');
    fileName.className = 'file-name';
    // 创建显示文件名字元素
    var fileShowName = document.createElement('span');
    fileShowName.className = 'file-show-name';
    fileShowName.title = fileShowName.innerHTML = files[i].name;
    // 创建修改文件名文本框
    var fileChangeName = document.createElement('input');
    fileChangeName.type = 'text';
    fileChangeName.className = 'file-change-name';
    //-------------------------------------------------------------
    // 将文件名字和修改文件名字加入到对应父级
    fileName.appendChild(fileShowName);
    fileName.appendChild(fileChangeName);
    // 将所有元素添加到文件最外层
    weiyunFile.appendChild(fileCheckBox);
    weiyunFile.appendChild(fileImg);
    weiyunFile.appendChild(fileName);
    // 将文件放入显示外层
    parentNode.appendChild(weiyunFile);
    //-------------------------------------------------------------
    // 事件部分
    
    fileImg.onmouseup = function (){
      // createFiles(data, this.Id);
      // createFileNavs(data, this.Id);
      // createTree(data, this.Id);
      viewHtml(data, this.Id);
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
}