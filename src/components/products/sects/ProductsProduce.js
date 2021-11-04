import { Component } from "react";

class ProductsProduce extends Component {
  constructor(props) {
    super(props);

    this.createProductProduceItem = this.createProductProduceItem.bind(this);
  }

  createProductProduceItem(props) {
    return (
      <div className="products-product-sect-item-dynamic">
        <div
          className="products-product-sect-item-bg lazyload"
          data-bg={props.productBG}
        />

        <div className="products-product-sect-item-info">
          <div>
            <h3>{props.productNAME}</h3>

            <span>{props.productPRICE}</span>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    //Produce
    document.getElementById("pPA1").addEventListener("click", () => {
      sessionStorage.setItem("Canned Fruit", true);
    });
    document.getElementById("pPA2").addEventListener("click", () => {
      sessionStorage.setItem("Corn", true);
    });
    document.getElementById("pPA3").addEventListener("click", () => {
      sessionStorage.setItem("Apples", true);
    });
    document.getElementById("pPA4").addEventListener("click", () => {
      sessionStorage.setItem("Eggplant", true);
    });
    document.getElementById("pPA5").addEventListener("click", () => {
      sessionStorage.setItem("Lemons", true);
    });
    document.getElementById("pPA6").addEventListener("click", () => {
      sessionStorage.setItem("Peanuts", true);
    });

    document
      .querySelectorAll(".products-produce-item button")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          document.location.reload();
        });
      });
  }

  render() {
    return (
      <div id="productsProduce" className="products-product-sect">
        <div className="products-product-sect-cnt">
          <div className="products-product-sect-top">
            <h4>Produce</h4>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>

          <div className="products-product-sect-items-holder">
            <div className="products-product-sect-items-box container-fluid">
              <div className="products-product-sect-items-row row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-produce-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductProduceItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/canned-fruit.jpg"
                      productNAME="Canned Fruit"
                      productPRICE="$3.50"
                    ></this.createProductProduceItem>

                    <button id="pPA1" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-produce-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductProduceItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/corn.jpg"
                      productNAME="Corn"
                      productPRICE="$4.49"
                    ></this.createProductProduceItem>

                    <button id="pPA2" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-produce-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductProduceItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/apples.jpg"
                      productNAME="Apples"
                      productPRICE="$4.99"
                    ></this.createProductProduceItem>

                    <button id="pPA3" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-produce-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductProduceItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/eggplant.jpg"
                      productNAME="Eggplant"
                      productPRICE="$4.60"
                    ></this.createProductProduceItem>

                    <button id="pPA4" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-produce-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductProduceItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/lemons.jpg"
                      productNAME="Lemons"
                      productPRICE="$2.85"
                    ></this.createProductProduceItem>

                    <button id="pPA5" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-produce-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductProduceItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/produce/peanuts.jpg"
                      productNAME="Peanuts"
                      productPRICE="$0.85"
                    ></this.createProductProduceItem>

                    <button id="pPA6" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsProduce;
