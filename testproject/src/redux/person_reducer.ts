/* 
	1.该文件是用于创建一个为person组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

const initState = [
    {
        key: '1',
        name: '一号名字',
        age: "21",
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: '二号名字',
        age: "22",
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: '三号名字',
        age: "23",
        address: 'Sidney No. 1 Lake Park',
      },
      
]//初始化状态
export default function PersonReducer(preState=initState,action){
	// console.log(preState);
	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
  let obj
  let datanew
  let newState
	switch (type) {
		case 'increment': //如果是加
        // data["key"]=`${preState.length}`
       obj ={key:`${preState.length}`}
       datanew = {...obj,...data}
      
       newState =preState.push(datanew)
          console.log(action)
          console.log('@@@@@@@@@@@@@@@@',Object.assign(preState,action))
			return Object.assign(preState,action)
		default:
      console.log('############',preState)
			return preState
	}
}