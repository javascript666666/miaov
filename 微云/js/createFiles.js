/**
 * 创建文件结构字符串
 * @param  {Object} data 数据
 * @param  {Number} id   id
 * @return {String}      html字符串
 */
function createFiles(data, id){
  var str = '';
  if(!data) return str;
  for(var i=0; i<data.length; i++){
    str += `<div class="weiyun-file" data-id="${data[i].id}" data-p-id="${data[i].pId}">
              <span class="file-checkbox"></span>
              <div class="file-img"></div>
              <div class="file-name">
                <span class="file-show-name active" title="${data[i].name}">${data[i].name}</span>
                <input type="text" class="file-change-name">
              </div>
            </div>`;
  }
  return str;
}

function createFileNode(data, id){
  // 创建文件的最外层结构
  var weiyunFile = document.createElement('div');
  weiyunFile.className = 'weiyun-file';
  // weiyunFile.setAttribute('data-id', data.id);
  // weiyunFile.setAttribute('data-p-id', data.pId);
  
  // 创建自定义勾选框
  var fileCheckbox = document.createElement('span');
  fileCheckbox.className = `file-checkbox`;
  
  // 创建文件的图标
  var fileImg = document.createElement('div');
  fileImg.className = 'file-img';
  
  // 创建文件的名字和修改名字的文本框
  var fileName = document.createElement('div');
  fileName.className = 'file-name';
  
  var fileShowName = document.createElement('span');
  fileShowName.className = 'file-show-name';
  fileShowName.innerHTML = fileShowName.title = '';
  
  var fileChangeName = document.createElement('input');
  fileChangeName.className = 'file-change-name active';
  fileChangeName.type = 'text';
  
  fileName.appendChild(fileShowName);
  fileName.appendChild(fileChangeName);
  
  // 将创建好的文件节点全部放入父级
  weiyunFile.appendChild(fileCheckbox);
  weiyunFile.appendChild(fileImg);
  weiyunFile.appendChild(fileName);
  
  return weiyunFile;
}