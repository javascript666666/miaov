var user_data = {
  files: [
    {
      name: '根目录',
      id: 0,
      type: 'root',
      child: [
        {
          id: 1,
          pId: 0,
          name: '我的歌曲',
          checked: false,
          type: 'folder',
          child: [
            {
              id: 3,
              pId: 1,
              name: '周杰伦',
              checked: false,
              type: 'folder'
            },
            {
              id: 4,
              pId: 1,
              name: '王菲',
              checked: false,
              type: 'folder',
      				child: [
      					{
      						id: 5,
      		        pId: 4,
      		        name: '专辑1',
      		        checked: false,
      		        type: 'folder',
      						child: [
      							{
      								id: 6,
      				        pId: 5,
      				        name: '2015年3月份',
      				        checked: false,
      				        type: 'folder',
                      child: [
                        {
                          id: 43,
          				        pId: 6,
          				        name: '2017',
          				        checked: false,
          				        type: 'folder'
                        }
                      ]
      							}
      						]
      					}
      				]
            }
          ]
        },
        {
          id: 2,
          pId: 0,
          name: '我的电影',
          checked: false,
          type: 'folder',
      		child: [
      			{
      				id: 16,
      				pId: 2,
      				name: '某小电影',
      				checked: false,
      				type: 'folder',
      				child: [
      					{
      						id: 127,
      						pId: 16,
      						name: '美剧',
      						checked: false,
      						type: 'folder',
      					},
      					{
      						id: 148,
      						pId: 16,
      						name: '岛国',
      						checked: false,
      						type: 'folder',
      					}
      				]
      			}
      		]
        }
      ]
    }
  ]
}