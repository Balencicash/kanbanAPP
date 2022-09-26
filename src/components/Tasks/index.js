import React, { Component,useState } from 'react';
import { Button, Modal ,Card, Col, Row, Input} from 'antd';
import 'antd/dist/antd.css';
import './style.css'

/* const Tasks = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    

    const showModal = () => {
        setIsModalOpen(true);
    };
        
    const handleSubmit = () => {
        
    }
        
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return(
        <Row>
            <Col span={6}>
                <Card title="所有任务" 
                    extra={<a href="#">
                        <Button type="primary" 
                    onClick={showModal} >新建任务</Button>
                    </a>}>
                    <Modal title="新建任务" open={isModalOpen} onOk={handleSubmit} onCancel={handleCancel}>
                        <p>任务名称: <Input style={{width:200,}}/><br/><span className='comment'>任务名称为2-20个字</span></p>

                        <p>任务描述: <Input style={{width:200,}}/><br/><span className='comment'>说说自己要干什么</span></p>
                    </Modal>
                    <Card type="inner" title="Inner Card title" extra={<a href="#">
                        <Button>查看详情</Button>
                    </a>}>
                        Inner Card content
                    </Card>
                        <Card
                            style={{
                                marginTop: 16,
                            }}
                            type="inner"
                            title="Inner Card title"
                            extra={<a href="#">More</a>}
                            >
                            Inner Card content
                        </Card>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="TODO">

                </Card>
            </Col>
            <Col span={6}>
                <Card title="DOING">

                </Card>
            </Col>
            <Col span={6}>
                <Card title="DOING">
                            
                </Card>
            </Col>
        </Row>
    );
                   
};
    
export default Tasks; */
class Tasks extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            editing:false,
            //taskName:props.data.taskName || "",
            //taskInfo:props.data.taskInfo || "",
            isModalOpen:false,
            setIsModalOpen:false,
        };
    }


    render() {
        
        //const{ ifEdited }=this.props.data;
        const { taskName,taskInfo } = this.state;
        
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Card title="所有任务" 
                            extra={<a href="#">
                                <Button type="primary" 
                            onClick={this.showModal} >新建任务</Button>
                            </a>}>
                            
                            <Card type="inner" title={taskName} extra={<a href="#">
                                <Button>查看详情</Button>
                            </a>}>
                            {taskInfo}
                            </Card>
                                <Card
                                    style={{
                                        marginTop: 16,
                                    }}
                                    type="inner"
                                    title={taskName}
                                    extra={<a href="#">
                                        <Button>查看详情</Button>
                                    </a>}
                                    >
                                    {taskInfo}
                                </Card>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="TODO">

                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="DOING">

                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="DOING">
                                    
                        </Card>
                    </Col>
                </Row>
                
                {this.renderModal(taskName,taskInfo)}
                {/* {this.state.editing ?  : null} */}
            </div>
        );
    }
    renderModal(ifEdited,taskName,taskInfo){
        return(
            <div>
               <Modal title="新建任务" open={this.showModal} onOk={this.handleSubmitTask} onCancel={this.handleCancel}> {/* 评论框 */}
                <p>任务名称: <Input style={{width:200,}}
                            disabled={ifEdited} 
                            onChange={this.handleNameChange} 
                            value={this.state.taskName}/>
                            <br/>
                            <span className='comment'>任务名称为2-20个字</span>
                </p>
                <p>任务描述: <Input style={{width:200,}}
                            disabled={ifEdited} 
                            onChange={this.handleInfoChange} 
                            value={this.state.taskInfo}/>
                    <br/>
                    <span className='comment'>说说自己要干什么</span>
                </p>
                </Modal> 
            </div>
            
        );
    }
    
    isModalOpen = () =>
    {
        this.setState({
            isModalOpen:false
        });
    }

    showModal = () =>
    {
        const {isModalOpen,setIsModalOpen}=this.state;
        this.setState({
            setIsModalOpen:true
        });
    }

    handleCancel = () => {
        this.setState({
            setIsModalOpen:false
        })
    };
    /* setIsModalOpen = () =>
    {
        this.setState({
            setIsModalOpen:false
        });
    } */

    handleNameChange = (e) => 
    {
        this.setState(
            {taskName:e.target.value,}
        );
    };

    handleInfoChange = (e) => 
    {
        this.setState(
            {taskInfo:e.target.value,}
        );
    };
    
    handleSubmitTask = () => //提交
    {
        const {id}=this.props.data;
        const {taskName,taskInfo}=this.state;

        this.setState(
            {editing:false,
            isModalOpen:false}
        );
        this.props.onSubmit(id,taskInfo,taskName);
    };

    
    
}

export default Tasks;