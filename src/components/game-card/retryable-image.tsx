import React, { useState } from 'react';

type RetryableImageProps = {
    image: string,
    index: number,
    hidden: boolean,
    width: number,
    height: number,
};

export const RetryableImage: React.FC<RetryableImageProps> = ({
                                                                  image, index, hidden, width, height }) => {

    const [loadingImage, setLoadingImage] = useState<boolean>(true);
    const [errorImage, setErrorImage] = useState<boolean>(false);

    const handleLoadedImage = () => {
        /*
        const random = Math.floor(Math.random() * 100) + 1;
        if (random >= 70 && random <= 90) {
            // simulate error
            setLoadingImage(false);
            setErrorImage(true);
            return;
        }*/
        setLoadingImage(false);
        setErrorImage(false);

    };

    const handleRetryLoadImage = () => {
        setLoadingImage(true);
        setErrorImage(false);
    };

    const handleErrorImage = () => {
        setLoadingImage(false);
        setErrorImage(true);
    };

    return (
        <>
            {!hidden && loadingImage &&
                <div className={`spinner`}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }

            {!hidden && errorImage &&
                <div className={`text-center`}>
                    <p className="mt-3">Error loading image</p>
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={handleRetryLoadImage}
                    >
                        Retry
                    </button>
                </div>
            }

            {!errorImage &&
                <img
                    className={`${hidden ? "hidden" : ""} no-shrink card-img-top screenshot`}
                    data-archive-image={index + 1}
                    loading="lazy"
                    src={image}
                    alt=""
                    onLoad={handleLoadedImage}
                    onError={handleErrorImage}
                    width={width}
                    height={height}
                />
            }

        </>
    );
};