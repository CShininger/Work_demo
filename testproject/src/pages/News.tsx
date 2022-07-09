import React from 'react';
import { Component } from 'react';
import { Button } from 'antd-mobile'
import { useSearchParams,useLocation,useNavigate} from 'react-router-dom';



export default function Mews(props){
   
    const {state} = useLocation()
    const navigate = useNavigate()
    const {id,title}=state as {id:number,title:string}
    // const [search,setSearch]=useSearchParams()
 
    // const id= search.get('id')
    // const title=search.get('title')
    function showhome(){
        navigate('/message',{
          replace:false,
          state:{
            id : 2,
        
           }
        })
      }
    return (
        <div>
            <h1>news参数:{id}</h1>

            <Button color='primary'  fill='solid' onClick={showhome} >
        跳转message
       </Button>
       </div>
    )
}