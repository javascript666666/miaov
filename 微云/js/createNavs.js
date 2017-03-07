/**
 * 创建面包削导航条
 * @param  {Object} data 数据来源
 * @param  {Number} id   id
 * @return {String}      html字符串
 */
function createFilesNav(data, id){
  var str = '';
  data = data.reverse();
  for(var i=0; i<data.length; i++){
    str += `<span class="${data[i].id === 0 ? 'active' : ''}" data-id="${data[i].id}" data-p-id="${data[i].pId}">
              ${data[i].name}
            </span>`;
  }
  return str;
}