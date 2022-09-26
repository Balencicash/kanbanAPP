import React, { Component } from 'react';
import Tasks from '../Tasks';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state={data:[]};
    }
    componentDidMount() {
        fetch('/mock/task.json').then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    this.setState({
                        data,
                    })
                })
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.data.map((item)=>{
                    return (
                        <Tasks key={item.id} data={item} onSubmit={this.handleSubmit}/>
                    );
                })}
            </div>
        );
    }
    handleSubmit = (id,TaskName,TaskInfo) =>{
        const newData = this.state.data.map((item) => {
            return item.id === id
                ? {
                    ...item,
                    TaskName,
                    TaskInfo,
                    todo:true,
                    doing:false,
                    done:false,
                }
                : item;
        });
        this.setState({
            data:newData,
        });
    };
    handleStart = (id,TaskName,TaskInfo) =>{
        this.state.data.map((item) => {
            return item.id === id
                ? {
                    ...item,
                    TaskName,
                    TaskInfo,
                    todo:false,
                    doing:true,
                    done:false,
                }
                : item;
        });
    };
    handleDone = (id,TaskName,TaskInfo) =>{
        console.log(id,TaskName,TaskInfo);
        console.log(this.state.data);
        this.state.data.map((item) => {
            return item.id === id
                ? {
                    ...item,
                    TaskName,
                    TaskInfo,
                    todo:false,
                    doing:false,
                    done:true,
                }
                : item;
        });
    };
}

export default TaskList;