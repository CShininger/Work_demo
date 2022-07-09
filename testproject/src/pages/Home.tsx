import React,{Component, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Table, Divider, Tag , Button,Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd'
import {Outlet,useNavigate} from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons';
import store from '../redux/store'
 const vm=function Home(){
    const e=0;
    class Counter extends Component{
      constructor(props){
          super(props);
       
      }
      componentDidMount(){
        this.setState({})
        
      }
    render(){
      return (
        <div>
 <Table  columns={columns} dataSource={store.getState()} />,

<>
<Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
添加
</Button>
<Drawer
title="Create a new account"
width={720}
onClose={onClose}
visible={visible}
bodyStyle={{ paddingBottom: 80 }}
extra={
<Space>
<Button onClick={onClose}>Cancel</Button>
<Button onClick={submit} type="primary">
  Submit
</Button>
</Space>
}
>
<Form layout="vertical" form={FormRef} hideRequiredMark>
<Row gutter={16}>
<Col span={12}>
  <Form.Item
    name="name"
    label="Name"
    rules={[{ required: true, message: 'Please enter user name' }]}
  >
    <Input placeholder="Please enter user name" />
  </Form.Item>
</Col>

</Row>
<Row gutter={16}>
<Col span={12}>
<Form.Item
    name="age"
    label="Age"
    rules={[{ required: true, message: 'Please enter user name' }]}
  >
    <Input placeholder="Please enter user age" />
  </Form.Item>
</Col>

</Row>
<Row gutter={16}>
<Col span={12}>
<Form.Item
    name="address"
    label="Address"
    rules={[{ required: true, message: 'Please enter user name' }]}
  >
    <Input placeholder="Please enter user address" />
  </Form.Item>
</Col>
</Row>

</Form>
</Drawer>
</>

        </div>
      )
    }
    }
   
 
    store.subscribe(()=>{
     let vm = new Counter(e);
      })
    const {state} = useLocation()

    const {id,title}=state as {id:number,title:string}



    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      
      
      // rowSelection object indicates the need for row selection
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      };

      //弹窗
       
      const { Option } = Select;
        
        const [visible, setVisible] = useState(false);
        
        const showDrawer = () => {
          setVisible(true);
        };

        const onClose = () => {
          setVisible(false);
        };
      
        const submit = (e) => {
          
          let res = FormRef.getFieldsValue()
          // console.log(res)
          store.dispatch({type:'increment',data:res})
          setVisible(false);
         
        };
        const [ FormRef ] = Form.useForm()

    return (
        <div>
            
           
    <Counter/>
        </div>
            
    )
}
export default vm;

    
