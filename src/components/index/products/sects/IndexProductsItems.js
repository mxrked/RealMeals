import { Component } from "react";
import Slider from "react-slick";

import play from "../../../../assets/medias/imgs/symbols/play.png";
import pause from "../../../../assets/medias/imgs/symbols/pause.png";

class IndexProductsItems extends Component {
  constructor(props) {
    super(props);

    this.createIndexProductImg = this.createIndexProductImg.bind(this);
    this.createIndexProductDesc = this.createIndexProductDesc.bind(this);
    this.checkIndexProductAutoPlayCB =
      this.checkIndexProductAutoPlayCB.bind(this);
  }

  createIndexProductImg(props) {
    return (
      <div
        className="lazyload index-product-img"
        data-bg={props.indexProductImgBG}
      />
    );
  }

  createIndexProductDesc(props) {
    return (
      <div className="index-product-description">
        <h3>{props.indexProductNAME}</h3>

        <span>{props.indexProductPRICE}</span>
      </div>
    );
  }

  checkIndexProductAutoPlayCB() {
    const indexProductsCB = document.getElementById("iProductsAutoPlayCB");

    if (indexProductsCB.checked) {
      this.slider.slickPlay();
      document.getElementById(
        "iProductsAutoPlayLBL"
      ).style.backgroundImage = `url(${pause})`;
    }

    if (!indexProductsCB.checked) {
      this.slider.slickPause();
      document.getElementById(
        "iProductsAutoPlayLBL"
      ).style.backgroundImage = `url(${play})`;
    }
  }

  componentDidMount() {
    document.getElementById(
      "iProductsAutoPlayLBL"
    ).style.backgroundImage = `url(${play})`;

    //! Storing index item to SS
    function addingIndexItemToSS(item) {
      sessionStorage.setItem(item, "true");
    }

    //* Meats
    document.getElementById("iPA1").addEventListener("click", () => {
      addingIndexItemToSS("Roasted Chicken");
    });
    document.getElementById("iPA4").addEventListener("click", () => {
      addingIndexItemToSS("Ribeye");
    });

    //* Produce
    document.getElementById("iPA2").addEventListener("click", () => {
      addingIndexItemToSS("Canned Fruit");
    });
    document.getElementById("iPA5").addEventListener("click", () => {
      addingIndexItemToSS("Corn");
    });

    //* Desserts
    document.getElementById("iPA3").addEventListener("click", () => {
      addingIndexItemToSS("Chocolate Cake");
    });
    document.getElementById("iPA6").addEventListener("click", () => {
      addingIndexItemToSS("Mint Ice Cream");
    });
  }

  render() {
    const indexProductsSettings = {
      className: "center",
      infinite: false,
      speed: 500,
      centerMode: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      centerPadding: "0",
      dots: true,
      responsive: [
        {
          breakpoint: 1995,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
    return (
      <div className="index-products-items">
        <Slider
          ref={(slider) => (this.slider = slider)}
          {...indexProductsSettings}
        >
          <div className="index-products-items-slide">
            <div className="index-product-img-holder">
              <this.createIndexProductImg indexProductImgBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/roasted-chicken.jpg"></this.createIndexProductImg>
            </div>
            <div className="index-product-info-holder">
              <div className="index-product-info-cnt">
                <this.createIndexProductDesc
                  indexProductNAME="Roasted Chicken"
                  indexProductPRICE="$23.75"
                ></this.createIndexProductDesc>
                <div className="index-product-purchase-holder">
                  <button id="iPA1" className="product-adder">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="index-products-items-slide">
            <div className="index-product-img-holder">
              <this.createIndexProductImg indexProductImgBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/canned-fruit.jpg"></this.createIndexProductImg>
            </div>
            <div className="index-product-info-holder">
              <div className="index-product-info-cnt">
                <this.createIndexProductDesc
                  indexProductNAME="Canned Fruit"
                  indexProductPRICE="$3.50"
                ></this.createIndexProductDesc>
                <div className="index-product-purchase-holder">
                  <button id="iPA2" className="product-adder">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="index-products-items-slide">
            <div className="index-product-img-holder">
              <this.createIndexProductImg indexProductImgBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/chocolate-cake.jpg"></this.createIndexProductImg>
            </div>
            <div className="index-product-info-holder">
              <div className="index-product-info-cnt">
                <this.createIndexProductDesc
                  indexProductNAME="Chocolate Cake"
                  indexProductPRICE="$14.99"
                ></this.createIndexProductDesc>
                <div className="index-product-purchase-holder">
                  <button id="iPA3" className="product-adder">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="index-products-items-slide">
            <div className="index-product-img-holder">
              <this.createIndexProductImg indexProductImgBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/ribeye.jpg"></this.createIndexProductImg>
            </div>
            <div className="index-product-info-holder">
              <div className="index-product-info-cnt">
                <this.createIndexProductDesc
                  indexProductNAME="8oz. Ribeye"
                  indexProductPRICE="$10.99"
                ></this.createIndexProductDesc>
                <div className="index-product-purchase-holder">
                  <button id="iPA4" className="product-adder">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="index-products-items-slide">
            <div className="index-product-img-holder">
              <this.createIndexProductImg indexProductImgBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/corn.jpg"></this.createIndexProductImg>
            </div>
            <div className="index-product-info-holder">
              <div className="index-product-info-cnt">
                <this.createIndexProductDesc
                  indexProductNAME="Corn"
                  indexProductPRICE="$4.49"
                ></this.createIndexProductDesc>
                <div className="index-product-purchase-holder">
                  <button id="iPA5" className="product-adder">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="index-products-items-slide">
            <div className="index-product-img-holder">
              <this.createIndexProductImg indexProductImgBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/mint-ice-cream.jpg"></this.createIndexProductImg>
            </div>
            <div className="index-product-info-holder">
              <div className="index-product-info-cnt">
                <this.createIndexProductDesc
                  indexProductNAME="Mint Ice Cream"
                  indexProductPRICE="$5.29"
                ></this.createIndexProductDesc>
                <div className="index-product-purchase-holder">
                  <button id="iPA6" className="product-adder">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <div className="index-products-cb-holder">
          <div id="iProductsAutoPlayLBL"></div>
          <input
            type="checkbox"
            id="iProductsAutoPlayCB"
            onChange={this.checkIndexProductAutoPlayCB}
          />
        </div>
      </div>
    );
  }
}

export default IndexProductsItems;
