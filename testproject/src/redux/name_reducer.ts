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
    
      
]//初始化状态
export default function nameReducer(preState=initState,action){
	// console.log(preState);
	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case 'increment': //如果是加
			return preState
		default:
			return preState
	}
}