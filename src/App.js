import React, {Component} from 'react';
import './App.css';
import {Card, Avatar, Col,} from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const {Meta} = Card;


const gridStyle = {
    width: '7%',
    height: '100%',
    textAlign: 'center',
    padding: '10px',
};

class App extends Component {
    constructor(props) {
        super(props);
        this.moment = null;
        this.state = {
            moment: null,
            paused: true,
            reverse: false,
            hidden: false,
            slideIndex: 0,
            updateCount: 0,
            currentIndex: 0,
            displayIndex:0,
            displayPhotos:[{
            src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
            name: "Lily", desc: "Hiking"
        },
            {
                src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                name: "Mike", desc: "Singing"
            },{
                src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                name: "Tom", desc: "Cooking"
            },{
                src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                name: "Eric", desc: "Makeup"
            },],
            photos: [{
                src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                name: "Lily", desc: "Fashion"
            },
                {
                    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                    name: "Mike", desc: "Dancing"
                },{
                    src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                    name: "Tom", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "Eric", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "Alex", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                    name: "Chris", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                    name: "Patrick", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                    name: "Emily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "Ben", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "Fiona", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                    name: "Test", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "lily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                    name: "Lily", desc: "Fashion"
                },
                {
                    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                    name: "Mike", desc: "Dancing"
                },{
                    src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                    name: "Tom", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "Eric", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "Alex", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                    name: "Chris", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                    name: "Patrick", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                    name: "Emily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "Ben", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "Fiona", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                    name: "Lily", desc: "Fashion"
                },
                {
                    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                    name: "Mike", desc: "Dancing"
                },{
                    src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                    name: "Tom", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "Eric", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "Alex", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1542029315121-d30eb8a19d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35ff866dfbb3306bcecbd1156892e73&auto=format&fit=crop&w=500&q=60",
                    name: "Chris", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f8a140ac20927deb386d1c9187433d6&auto=format&fit=crop&w=376&q=80",
                    name: "Patrick", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de131fd63e40fc70681c9c1c280a756e&auto=format&fit=crop&w=375&q=80",
                    name: "Emily", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "Ben", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "Fiona", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1536626375075-d90e699bf633?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d085b3de9e141b2b7dbe00de2c2224bf&auto=format&fit=crop&w=375&q=80",
                    name: "Ben", desc: "hiking"
                },{
                    src: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=675&q=80",
                    name: "Fiona", desc: "hiking"
                },
            ],
        };
    }

    handleClick = (index) => {
        console.log(index)
        console.log("testest")
        console.log(this.state.slideIndex)
        /* if (index == this.state.currentIndex) {
             return;
         }*/
        console.log(this.state.updateCount)
        let currentPhoto = this.state.photos[index];
        let displayPhotos = this.state.displayPhotos;
        displayPhotos[this.state.slideIndex - 1] = currentPhoto;
        this.setState({
            displayPhotos:displayPhotos,
          //  currentIndex:index,

        }, () => {

            this.slider.slickPrev()
            console.log(this.state.displayPhotos)
            //this.slider.slickGoTo(index);
        });

    }


    render() {
        var settings = {
            dots: false,
            lazyLoad: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            speed: 2000,
            arrows: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            afterChange: () =>
                this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };

        return (
            <div>
                <div className="container">
                    <h2>About Us</h2>
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        {this.state.displayPhotos.map((photo, index) =>
                            (<div key={index}>

                                <Card
                                    hoverable
                                    style={{width: 300}}
                                    cover={<img className="photo" alt="example" src={photo.src}/>}
                                >
                                    <Meta
                                        title={photo.name}
                                        description={photo.desc}
                                    />
                                </Card>,
                            </div>))}
                    </Slider>
                </div>
                <div className="container">
                    <Card>
                        {this.state.photos.map((photo, index) =>
                            (<Card.Grid key={index} style={gridStyle}><Avatar
                                src={photo.src} shape="square" size={64}
                                onClick={this.handleClick.bind(this, index)}
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
