import React from "react";
import { IncomingMessage } from "http";

const ImageList = props => {
  const images = props.images.map(image => {
    return <img alt={IncomingMessage.} key={image.id} src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
