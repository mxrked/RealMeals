import { Component } from "react";

class ProductsMeats extends Component {
  constructor(props) {
    super(props);

    this.createProductMeatItem = this.createProductMeatItem.bind(this);
  }

  createProductMeatItem(props) {
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
    //Meats
    document.getElementById("pMA1").addEventListener("click", () => {
      sessionStorage.setItem("Roasted Chicken", true);
    });
    document.getElementById("pMA2").addEventListener("click", () => {
      sessionStorage.setItem("Ribeye", true);
    });
    document.getElementById("pMA3").addEventListener("click", () => {
      sessionStorage.setItem("Lamb Chops", true);
    });
    document.getElementById("pMA4").addEventListener("click", () => {
      sessionStorage.setItem("Lobster", true);
    });
    document.getElementById("pMA5").addEventListener("click", () => {
      sessionStorage.setItem("Salmon", true);
    });
    document.getElementById("pMA6").addEventListener("click", () => {
      sessionStorage.setItem("Turkey", true);
    });

    document.querySelectorAll(".products-meat-item button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.location.reload();
      });
    });
  }

  render() {
    return (
      <div id="productsMeats" className="products-product-sect">
        <div className="products-product-sect-cnt">
          <div className="products-product-sect-top">
            <h4>Meats</h4>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </p>
          </div>

          <div className="products-product-sect-items-holder">
            <div className="products-product-sect-items-box container-fluid">
              <div className="products-product-sect-items-row row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-meat-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductMeatItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/roasted-chicken.jpg"
                      productNAME="Roasted Chicken"
                      productPRICE="$23.75"
                    ></this.createProductMeatItem>

                    <button id="pMA1" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-meat-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductMeatItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/ribeye.jpg"
                      productNAME="8oz. Ribeye"
                      productPRICE="$10.99"
                    ></this.createProductMeatItem>

                    <button id="pMA2" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-meat-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductMeatItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/lamb.jpg"
                      productNAME="Lamb Chops"
                      productPRICE="$10.55"
                    ></this.createProductMeatItem>

                    <button id="pMA3" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-meat-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductMeatItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/lobster.jpg"
                      productNAME="Lobster"
                      productPRICE="$16.99"
                    ></this.createProductMeatItem>

                    <button id="pMA4" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-meat-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductMeatItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/salmon.jpg"
                      productNAME="Salmon"
                      productPRICE="$9.45"
                    ></this.createProductMeatItem>

                    <button id="pMA5" className="page-transition">
                      Add
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 products-product-sect-item products-meat-item">
                  <div className="products-product-sect-item-cnt">
                    <this.createProductMeatItem
                      productBG="http://basicallyeasy.com/DynamicCDNS/realmeals/products/meats/turkey.jpg"
                      productNAME="Turkey"
                      productPRICE="$28.99"
                    ></this.createProductMeatItem>

                    <button id="pMA6" className="page-transition">
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

export default ProductsMeats;
