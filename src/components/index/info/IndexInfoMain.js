import IndexInfoBGs from "./sides/IndexInfoBGs";
import IndexInfoText from "./sides/IndexInfoText";

const IndexInfoMain = () => {
  return (
    <div id="indexInfo">
      <div className="container-fluid index-info-box">
        <div className="row index-info-row">
          <IndexInfoBGs />
          <IndexInfoText />
        </div>
      </div>
    </div>
  );
};

export default IndexInfoMain;
