import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, Icon, Avatar, Col, Row, Carousel} from 'antd';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css'

var TweenOneGroup = TweenOne.TweenOneGroup;
const {Meta} = Card;
const gridStyle = {
    width: '7%',
    height: '100%',
    textAlign: 'center',
};
const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);

class App extends Component {
    constructor(props) {
        super(props);
        this.moment = null;
        this.animation = {left: '70%', duration: 2000};
        this.animation2 = [
            {
                repeatDelay: 500,
                y: -70,
                repeat: -1,
                yoyo: true,
                ease: ease0,
                duration: 1000
            },
            {
                repeatDelay: 500,
                appearTo: 0,
                scaleX: 0,
                scaleY: 2,
                repeat: -1,
                yoyo: true,
                ease: ease1,
                duration: 1000,
            }
        ];
        this.state = {
            moment: null,
            paused: true,
            reverse: false,
            hidden:false,
            firstPhoto:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            secondPhoto:"https://upload.wikimedia.org/wikipedia/commons/8/8e/Pierre-Auguste_Renoir_-_Portrait_de_Mademoiselle_Victorine_de_Bellio.jpg",
        };
    }

    onPause = () => {
        this.setState({
            paused: true,
            moment: null,
        });
    }

    onReverse = () => {
        this.setState({
            paused: false,
            reverse: true,
            moment: null,
        });
    }

    onRestart = () => {
        this.setState({
            paused: false,
            reverse: false,
            moment: 0,
        }, () => {
            this.setState({
                moment: null,
            });
        });
    }

    onClick (a,b)  {
        console.log(a)
        console.log(b)
        this.setState({
            paused: false,
            reverse: false,
            moment: null,
            hidden:true,
        });
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }


    /*  render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload. test test
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
      }*/
    render() {
        return (
            <div>

                <div style={{
                    position: 'relative',
                    top: '0',
                    bottom: 0,
                    left: '0%',
                    right: 0,
                    width: '60%',
                    height: '350px',
                }}>

                        <div>
                            <Row gutter={16}>
                                <Col hidden = {!this.state.hidden} span={8}
                                     style={{
                                         margin: '40px 20px', position: 'absolute',
                                         top: '0',
                                         bottom: 0,
                                         left: 0,
                                         right: 0,
                                         width: '350px',
                                         height: '350px',
                                         borderradius: '4px',
                                         //background: 'blue'
                                     }}>
                                    <Card
                                        //hidden = {!this.state.hidden}
                                        hoverable
                                        style={{width: 240,}}
                                        cover={<img alt="example"
                                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                                    >
                                        <Meta
                                            title="Europe Street beat"
                                            description="www.instagram.com"
                                        />
                                    </Card>
                                </Col>
                                <TweenOne
                                    animation={this.animation}
                                    paused={this.state.paused}
                                    reverse={this.state.reverse}
                                    moment={this.state.moment}
                                    // className="code-box-shape"
                                    style={{
                                        margin: '40px 20px', position: 'absolute',
                                        top: '0',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        width: '350px',
                                        height: '350px',
                                        borderradius: '4px',
                                        //background: 'blue'
                                    }}
                                >
                                <Col span={8}>
                                    <Card
                                        hoverable
                                        style={{width: 240, }}
                                        cover={<img alt="example"
                                                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Anne_Baxter_publicity_photo.JPG"/>}
                                    >
                                        <Meta
                                            title="Europe Street beat"
                                            description="www.instagram.com"
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        hoverable
                                        style={{width: 240,marginLeft: 550,}}
                                        cover={<img alt="example"
                                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                                    >
                                        <Meta
                                            title="Europe Street beat"
                                            description="www.instagram.com"
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        hidden = {this.state.hidden}
                                        hoverable
                                        style={{width: 240, marginLeft: 1050,}}
                                        cover={<img alt="example"
                                                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Pierre-Auguste_Renoir_-_Portrait_de_Mademoiselle_Victorine_de_Bellio.jpg"/>}
                                    >
                                        <Meta
                                            title="Europe Street beat"
                                            description="www.instagram.com"
                                        />
                                    </Card>
                                </Col>
                                </TweenOne>
                            </Row>
                        </div>


                   {/* <div className="demo-buttons"
                         style={{
                             position: 'absolute',
                             width: 300,
                             left: '50%',
                             marginLeft: -150,
                             bottom: 25
                         }}
                    >
                        <Button type="primary" onClick={this.onClick}>play</Button>
                        <Button type="primary" onClick={this.onPause}>pause</Button>
                        <Button type="primary" onClick={this.onReverse}>reverse</Button>
                        <Button type="primary" onClick={this.onRestart}>restart</Button>
                    </div>*/}
                </div>
                <div>
                    <Card title="Card Title">
                        <Card.Grid style={gridStyle}><Avatar
                            src= {this.state.firstPhoto}shape="square" size={64}
                            onClick={this.onClick.bind(this,'firstPhoto')}
                            icon="user"/></Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar
                            src= {this.state.secondPhoto} shape="square" size={64}
                            onClick={this.onClick.bind(this,'secondPhoto')}
                            icon="user"/></Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Anne_Baxter_publicity_photo.JPG" shape="square" size={64}
                            icon="user"/></Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" shape="square" size={64}
                            icon="user"/></Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" shape="square" size={64}
                            icon="user"/></Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" shape="square" size={64}
                            icon="user"/></Card.Grid>
                        <Card.Grid style={gridStyle}><Avatar
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" shape="square" size={64}
                            icon="user"/></Card.Grid>
                    </Card>
                </div>
                {/*<div>
                    <TweenOne
                        animation={this.animation2}
                        paused={this.props.paused}
                        //className="code-box-shape"
                        style={{
                            position: 'absolute',
                            transformOrigin: 'center bottom',
                            margin: '40px 20px',
                            top: '0',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: '50px',
                            height: '50px',
                            borderradius: '4px',
                            background: 'blue'

                        }}
                    />
                </div>*/}
            </div>
        )
    }

}

App.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};

export default App;
