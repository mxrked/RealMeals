import aboutBGL from "../../../../assets/medias/imgs/index/about/about-bg-l.jpg";
import aboutBGR from "../../../../assets/medias/imgs/index/about/about-bg-r.jpg";

const IndexInfoBGs = () => {
  return (
    <div
      className="col-lg-4 col-md-4 col-sm-3 col-xs-12 index-info-side"
      id="indexInfoL"
    >
      <div className="index-info-side-cnt">
        <div className="lazyload index-info-bg" data-bg={aboutBGL} />
        <div className="lazyload index-info-bg" data-bg={aboutBGR} />
      </div>
    </div>
  );
};

export default IndexInfoBGs;
