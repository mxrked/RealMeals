import { Component } from "react";
import { Link } from "react-router-dom";

class AboutSectR extends Component {
  constructor(props) {
    super(props);

    this.createAboutSectBG = this.createAboutSectBG.bind(this);
  }

  createAboutSectBG(props) {
    return (
      <div className="about-sect-bg lazyload" data-bg={props.aboutSectBG} />
    );
  }

  render() {
    return (
      <div id="aboutSectR">
        <div className="container-fluid about-sect-box">
          <div className="row about-sect-row">
            <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 about-sect-side">
              <div className="about-sect-side-cnt">
                <this.createAboutSectBG aboutSectBG="http://basicallyeasy.com/DynamicCDNS/realmeals/about/future/about-future-l.jpg"></this.createAboutSectBG>
                <this.createAboutSectBG aboutSectBG="http://basicallyeasy.com/DynamicCDNS/realmeals/about/future/about-future-r.jpg"></this.createAboutSectBG>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12 about-sect-side">
              <div className="about-sect-side-cnt">
                <div className="about-sect-side-text">
                  <h3>Our Future.</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo.
                  </p>

                  <Link to="/products#p0" className="page-transition">
                    Browse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSectR;
