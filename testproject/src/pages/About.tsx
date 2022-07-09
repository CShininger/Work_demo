import React,{Component, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd-mobile'
import {Outlet,useNavigate} from 'react-router-dom'

export default function About()
{
    const {state} = useLocation()

    const {id,title}=state as {id:number,title:string}
    
        const result = useState(0);
        // console.log(result)
        let person={
                name:'som',
                age:'18'
        }
        const [user,setUser]=useState(person)
        let counter = result[0];
        let setCounter = result[1];
       function add(){
         setCounter(counter+1) //set...异步执行
        //   console.log(counter)        
           }
         function  personadd(){
            setUser({...user,name:'jerry'})  
         }
    return (
            <div>
            <h1>{title}</h1>
           <h1>{id}</h1>
              
                <h1>{counter}</h1>
                <h1>{user.name},{user.age}</h1>
                <button onClick={add}>加+1</button>
                <button onClick={personadd}>qiehuan </button>
                </div>
        ) 
  
   
}