import { Component } from "react";

class ProductsDesserts extends Component {
  constructor(props) {
    super(props);

    this.createProductDessertItem = this.createProductDessertItem.bind(this);
  }

  createProductDessertItem(props) {
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
    //Desserts
    document.getElementById("pDA1").addEventListener("click", () => {
      sessionStorage.setItem("Chocolate Cake", true);
    });
    document.getElementById("pDA2").addEventListener("click", () => {
      sessionStorage.setItem("Mint Ice Cream", true);
    });
    document.getElementById("pDA3").addEventListener("click", () => {
      sessionStorage.setItem("Cheesecake", true);
    });
    document.getElementById("pDA4").addEventListener("click", () => {
      sessionStorage.setItem("Cupcakes", true);
    });
    document.getElementById("pDA5").addEventListener("click", () => {
      sessionStorage.setItem("Custard Cake", true);
    });
    document.getElementById("pDA6").addEventListener("click", () => {
      sessionStorage.setItem("Glaze Cake", true);
    });

    document
      .querySelectorAll(".products-dessert-item button")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          document.location.reload();
        });
      });
  }

  render() {
    return (
      <div id="productsDesserts" className="products-product-sect">
        <div className="products-product-sect-cnt">
          <div className="products-product-sect-top">
            <h4>Desserts</h4>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>

          <div className="products-product-sect-items-holder">
            <div className="products-product-sect-items-box container-fluid">
              <div className="products-product-sect-items-row row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-dessert-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductDessertItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/chocolate-cake.jpg"
                      productNAME="Chocolate Cake"
                      productPRICE="$14.99"
                    ></this.createProductDessertItem>

                    <button id="pDA1" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-dessert-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductDessertItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/mint-ice-cream.jpg"
                      productNAME="Mint Ice Cream"
                      productPRICE="$5.29"
                    ></this.createProductDessertItem>

                    <button id="pDA2" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-dessert-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductDessertItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/cheesecake.jpg"
                      productNAME="Cheesecake"
                      productPRICE="$6.85"
                    ></this.createProductDessertItem>

                    <button id="pDA3" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-dessert-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductDessertItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/cupcakes.jpg"
                      productNAME="Cupcakes"
                      productPRICE="$5.45"
                    ></this.createProductDessertItem>

                    <button id="pDA4" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-dessert-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductDessertItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/custard-cake.jpg"
                      productNAME="Custard Cake"
                      productPRICE="$10.75"
                    ></this.createProductDessertItem>

                    <button id="pDA5" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-dessert-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductDessertItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/desserts/glaze-cake.jpg"
                      productNAME="Glaze Cake"
                      productPRICE="$10.20"
                    ></this.createProductDessertItem>

                    <button id="pDA6" className="page-transition">
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

export default ProductsDesserts;
