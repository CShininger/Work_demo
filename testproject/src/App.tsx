import React from 'react';
import { Button,Tabs,Layout } from 'antd';

import {Outlet,useNavigate, useRoutes} from 'react-router-dom'
import routes from './routes'
 import './style/tab.css'
function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const { TabPane } = Tabs;
  const element = useRoutes(routes)
  const navigate = useNavigate()
  function callback(key:any) {
    switch (key) {
      case '1':
        showhome()
        break;
      case '2':
        showabout()
      break;
      default:
        break;
    }
  }
  // class people{
  //   name=1
  //   constructor(){
  //     this.name=2
  //     console.log(this)
  //   }
  // }
  //路由跳转
  function showhome(){
    navigate('/home',{
      replace:false,
      state:{
        id : 1,
        title:'homeeee',
       }
    })
  }

  function showabout(){
    navigate('/about',{
      replace:false,
      state:{
        id : 2,
        title:'abouttt',
       }
    })
  }
  return (
    <div >
    <Layout>
      <Header>  
         <Tabs defaultActiveKey="1" onChange={callback} >
        <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2" >
        Content of Tab Pane 2
        </TabPane>
        </Tabs>
    </Header>
      <Content> 
        <div>
        <Outlet></Outlet>
       </div>
       <div>
       {element}
       </div>
       </Content>
      <Footer>Footer</Footer>
    </Layout>


 

      
    </div>
  );
}

export default App;
