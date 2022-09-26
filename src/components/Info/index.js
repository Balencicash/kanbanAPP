import React, { Component} from 'react';
import { Alert, Button, Space, Carousel} from 'antd';
import './style.css'
import 'antd/dist/antd.css';

const Info = () => {
    
    
    const contentStyle = {
        slick:false,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

        return (
            <Carousel afterChange={onChange} >
                <div>
                    <h3 style={contentStyle}>
                        <Alert
                            message="{this.props.data.taskName}"
                            description="{this.props.data.taskInfo}"
                            type="info"
                            showIcon
                            action={
                                <Space>
                                    <Button size="small" type="primary">
                                        查看详情
                                    </Button>
                                </Space>
                            }
                        />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <Alert
                            message="Info Text"
                            description="Info Description Info Description Info Description Info Description"
                            type="info"
                            action={
                                <Space>
                                    <Button size="small" type="primary">
                                        查看详情
                                    </Button>
                                </Space>
                            }
                        />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <Alert
                            message="Info Text"
                            description="Info Description Info Description Info Description Info Description"
                            type="info"
                            action={
                                <Space>
                                    <Button size="small" type="primary">
                                        查看详情
                                    </Button>
                                </Space>
                            }
                        />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <Alert
                            message="Info Text"
                            description="Info Description Info Description Info Description Info Description"
                            type="info"
                            action={
                                <Space>
                                    <Button size="small" type="primary">
                                        查看详情
                                    </Button>
                                </Space>
                            }
                        />
                    </h3>
                </div>
            </Carousel>
            
        );
    
}

export default Info;