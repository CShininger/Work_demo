import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd-mobile'
import {Outlet,useNavigate,useLocation} from 'react-router-dom'
import { title } from 'process';
export default function Message(props){

    const params = useParams()
    const {state} = useLocation()
    const navigate = useNavigate()
    const {id,title}=state as {id:number,title:string}
    const m = 
        {id:1,title:'ok'}
        function showhome(){
            navigate('/news',{
              replace:false,
              state:{
                id : 1,
              
               }
            })
          }
    return (

        <div>Message参数: <h1>{id}</h1>
            <Button color='primary'  fill='solid' onClick={showhome}>
            跳转news
           </Button>
        </div>
        
    )
}