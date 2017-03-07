/**
 * 创建树状文件结构菜单
 * @param  {Object} data 数据
 * @param  {Number} id   id
 * @return {String}      html字符串
 */
function createTreeMenu(data, id){
  var str = '';
  for(var i=0; i<data.length; i++){
    str += `<li class="clear">
              <h2 class="${data[i].id === id ? 'active' : ''}" data-id="${data[i].id}" data-p-id="${data[i].pId}">
                <span class="${data[i].child ? 'add' : ''}"></span>
                <i class="add"></i>
                ${data[i].name}
              </h2>`;
    str += data[i].child ? `<ul>${createTreeMenu(data[i].child, id)}</ul>` : '';
    str += `</li>`;
  }
  return str;
}