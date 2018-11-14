import React, {Component} from 'react';
import './App.css';
import {Card, Avatar, Col,} from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const gridStyle = {
    width: '7%',
    height: '100%',
    textAlign: 'center',
    padding:'10px',
};
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    arrows:true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    /* afterChange: () =>
         this.setState(state => ({ updateCount: state.updateCount + 1 })),
     beforeChange: (current, next) => this.setState({ slideIndex: next })*/
};
class App extends Component {
    constructor(props) {
        super(props);
        this.moment = null;
        this.state = {
            moment: null,
            paused: true,
            reverse: false,
            hidden:false,
            firstPhoto:"https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
            secondPhoto:"https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
            thirdPhoto:"https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
            fourthPhoto:"https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
            slideIndex: 0,
            updateCount: 0,
            currentIndex:0,
            photos:["https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80"

            ],
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
        ;
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
    handleClick=(index)=>{
        console.log(index)
console.log("testest")
       /* if (index == this.state.currentIndex) {
            return;
        }*/
        let currentPhoto = this.state.photos[index];
        /*this.setState({
            fourthPhoto:currentPhoto,
          //  currentIndex:index,

        })*/

       // this.slider.slickPrev()
        this.slider.slickGoTo(index);

    }
    render() {

        return (
            <div>
                <div className="container">
                    <h2>About Us</h2>
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                       <div>
                            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                                <img className="photo" src={this.state.firstPhoto}/>image 0

                            </Col></div><div>
                            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                            <img className="photo" src={this.state.secondPhoto} />image 1

                            </Col> </div>
                            <div>    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                            <img className="photo" src={this.state.thirdPhoto} />image 2

                            </Col> </div>
                            <div>    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>

                            <img className="photo" src={this.state.fourthPhoto} />image 3

                            </Col> </div>

                    </Slider>
                </div>
                <div className="container">
                    <Card >
                        {this.state.photos.map((photo, index) =>
                         (<Card.Grid key={index} style={gridStyle}><Avatar
                        src= {photo}shape="square" size={64}
                      //  onClick={e => this.slider.slickPrev()}
                             onClick = {this.handleClick.bind(this, index)}
                        icon="user"/></Card.Grid>))}

                    </Card>
                </div>
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
