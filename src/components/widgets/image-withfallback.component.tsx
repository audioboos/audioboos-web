import React, { ReactEventHandler, SyntheticEvent } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback: string;
}
const ImageWithFallback = ({ fallback, ...props }: ImageWithFallbackProps) => {
  const [errored, setErrored] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(props.src);
  const onError = ($event: SyntheticEvent<HTMLImageElement>) => {
    if (!errored) {
      $event.currentTarget.onerror = null;
      setErrored(true);
      setImageSrc(fallback);
    }
  };
  return <img {...props} onError={onError} src={imageSrc} />;
};

export default ImageWithFallback;
