import React from "react";
class ImageCard extends React.Component {
  render() {
    const { descriptions, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
