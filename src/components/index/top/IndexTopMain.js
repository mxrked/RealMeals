import { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class IndexTopMain extends Component {
  constructor(props) {
    super(props);
    this.createIndexTopSlide = this.createIndexTopSlide.bind(this);
  }

  createIndexTopSlide(props) {
    return (
      <div className="index-top-slide" id={props.indexTopSlideID}>
        <div className="index-top-slide-video-holder">
          <video
            src={props.indexTopSlideVIDEO}
            data-autoplay="true"
            muted
            loop
            data-poster={props.indexTopSlideVideoPOSTER}
            type="video/mp4"
            preload="none"
            className="lazyload"
          />
        </div>

        <div className="index-top-slide-cnt">
          <div className="index-top-slide-cnt-inner">
            <h2>
              {props.indexTopSlideH2A} <br /> {props.indexTopSlideH2B}
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>

            <div>
              <Link to={props.indexTopSlideLinkTO} className="page-transition">
                {props.indexTopSlideLinkTXT}
              </Link>

              <Link to="/products#p0" className="page-transition">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const indexTopSettings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 8000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
    };

    return (
      <Slider {...indexTopSettings}>
        <this.createIndexTopSlide
          indexTopSlideID="iTS1"
          indexTopSlideVIDEO="http://basicallyeasy.com/DynamicCDNS/realmeals/index/top/slide-1.mp4"
          indexTopSlideVideoPOSTER="http://basicallyeasy.com/DynamicCDNS/realmeals/index/top/posters/slide-1.jpg"
          indexTopSlideH2A="Juicey"
          indexTopSlideH2B="Meats."
          indexTopSlideLinkTO="/products#p1"
          indexTopSlideLinkTXT="View Meats"
        />
        <this.createIndexTopSlide
          indexTopSlideID="iTS2"
          indexTopSlideVIDEO="http://basicallyeasy.com/DynamicCDNS/realmeals/index/top/slide-2.mp4"
          indexTopSlideVideoPOSTER="http://basicallyeasy.com/DynamicCDNS/realmeals/index/top/posters/slide-2.jpg"
          indexTopSlideH2A="Healthy"
          indexTopSlideH2B="Produce."
          indexTopSlideLinkTO="/products#p2"
          indexTopSlideLinkTXT="View Produce"
        />
        <this.createIndexTopSlide
          indexTopSlideID="iTS3"
          indexTopSlideVIDEO="http://basicallyeasy.com/DynamicCDNS/realmeals/index/top/slide-3.mp4"
          indexTopSlideVideoPOSTER="http://basicallyeasy.com/DynamicCDNS/realmeals/index/top/posters/slide-3.png"
          indexTopSlideH2A="Sweet"
          indexTopSlideH2B="Desserts."
          indexTopSlideLinkTO="/products#p3"
          indexTopSlideLinkTXT="View Desserts"
        />
      </Slider>
    );
  }
}

export default IndexTopMain;
