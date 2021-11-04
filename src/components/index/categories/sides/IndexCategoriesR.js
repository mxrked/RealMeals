import { Component } from "react";

class IndexCategoriesR extends Component {
  constructor(props) {
    super(props);

    this.createIndexCategoriesRItem =
      this.createIndexCategoriesRItem.bind(this);
  }

  createIndexCategoriesRItem(props) {
    return (
      <div
        className="index-categories-R-item lazyload"
        data-bg={props.indexCategoriesRItemBGSrc}
        id={props.indexCategoriesRItemID}
      >
        <div className="index-categories-R-item-text">
          <span>{props.indexCategoriesRItemTextSPAN}</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        className="col-lg-6 col-md-6 col-sm-12 col-xs-12 index-categories-side"
        id="indexCategoriesR"
      >
        <div className="index-categories-side-cnt">
          <this.createIndexCategoriesRItem
            indexCategoriesRItemBGSrc="http://basicallyeasy.com/DynamicCDNS/realmeals/index/categories/category-meats.jpg"
            indexCategoriesRItemID="iCI2"
            indexCategoriesRItemTextSPAN="View Meats"
          />
          <this.createIndexCategoriesRItem
            indexCategoriesRItemBGSrc="http://basicallyeasy.com/DynamicCDNS/realmeals/index/categories/category-produce.jpg"
            indexCategoriesRItemID="iCI3"
            indexCategoriesRItemTextSPAN="View Produce"
          />
          <this.createIndexCategoriesRItem
            indexCategoriesRItemBGSrc="http://basicallyeasy.com/DynamicCDNS/realmeals/index/categories/category-desserts.jpg"
            indexCategoriesRItemID="iCI4"
            indexCategoriesRItemTextSPAN="View Desserts"
          />
        </div>
      </div>
    );
  }
}

export default IndexCategoriesR;
