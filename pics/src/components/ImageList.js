import React from "react";

const ImageList = props => {
  const images = props.images.map(({ descriptio, id, url }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
