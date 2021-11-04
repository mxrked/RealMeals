import { Component } from "react";
import { Link } from "react-router-dom";

import b1 from "../../../assets/medias/imgs/blobs/blob-1.svg";

import freshiest from "../../../assets/medias/imgs/index/benefits/i-freshiest.png";
import everyone from "../../../assets/medias/imgs/index/benefits/i-everyone.png";
import healty from "../../../assets/medias/imgs/index/benefits/i-healthy.png";
import IndexBenefitsTop from "./IndexBenefitsTop";

class IndexBenefitsMain extends Component {
  constructor(props) {
    super(props);

    this.createIndexBenefit = this.createIndexBenefit.bind(this);
  }

  createIndexBenefit(props) {
    return (
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 index-benefits-side">
        <div className="index-benefits-cnt" id={props.indexBenefitSide}>
          <div className="index-benefits-blob-holder">
            <div className="lazyload" data-bg={props.indexBenefitBlob} />
          </div>

          <div className="index-benefits-main-cnt">
            <img
              data-src={props.indexBenefitImg}
              alt="Index Benefit Img"
              className="lazyload"
            />

            <div className="index-benefits-main-cnt-text">
              <h4>{props.indexBenefitH4}</h4>

              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>

              <Link
                to="/products#p1"
                className="index-benefit-link page-transition"
              >
                Browse Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="indexBenefits">
        <IndexBenefitsTop />

        <div className="container-fluid index-benefits-box">
          <div className="row index-benefits-row">
            <this.createIndexBenefit
              indexBenefitAOS="fade-down"
              indexBenefitSide="iBL"
              indexBenefitBlob={b1}
              indexBenefitImg={everyone}
              indexBenefitH4="Everyone's eligible"
            ></this.createIndexBenefit>

            <this.createIndexBenefit
              indexBenefitAOS="fade-up"
              indexBenefitSide="iBM"
              indexBenefitBlob={b1}
              indexBenefitImg={freshiest}
              indexBenefitH4="Freshiest Ingredients"
            ></this.createIndexBenefit>

            <this.createIndexBenefit
              indexBenefitAOS="fade-down"
              indexBenefitSide="iBR"
              indexBenefitBlob={b1}
              indexBenefitImg={healty}
              indexBenefitH4="Healthy Lifestyle"
            ></this.createIndexBenefit>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexBenefitsMain;
