import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Card, Icon, Avatar, Col, Row, Carousel} from 'antd';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            speed: 2000,
            arrows:true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <div className="container">
                    <h2>About Us</h2>
                    <Slider {...settings}>
                        <div>
                            <img src="http://placekitten.com/g/400/200" />
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200" />
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200" />
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200" />
                        </div>
                    </Slider>
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
