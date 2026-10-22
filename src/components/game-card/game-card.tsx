import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faImages} from '@fortawesome/free-regular-svg-icons'
import {InterfaceGameItem} from '../../interfaces/interface-game-item';

import {RetryableImage} from './retryable-image';

type GameCardProps = {
    game: InterfaceGameItem,
};

type GameCardState = {
    index: number,
    mounted: boolean,
}

export class GameCard extends React.Component<GameCardProps, GameCardState> {

    constructor(props: any) {
        super(props);
        const {images} = this.props.game;
        const index = 0;
        this.state = {
            index: index,
            mounted: false,
        };
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    handleCardClick() {
        const {images} = this.props.game;
        const {index} = this.state;
        let newIndex = index + 1;
        if (newIndex > images.length - 1) {
            newIndex = 0;
        }
        this.setState({index: newIndex});
    }

    render() {

        const {index, mounted} = this.state;
        const {
            title,
            year,
            publisher,
            images,
            width,
            height,
            comment
        } = this.props.game;

        return (
            <div className="card mb-2">

                <div className="card-img-container">

                    {
                        images.map((img: string, i: number) => {
                            return (
                                <RetryableImage
                                    key={i}
                                    image={images[i]}
                                    index={i}
                                    hidden={i !== index}
                                    width={width}
                                    height={height}
                                />
                            );
                        })
                    }

                </div>

                <div className="card-body">
                    <div>
                        <h6 className="card-title">
                            {title}
                            {mounted && images.length > 1 &&
                                <button
                                    type="button"
                                    className="btn btn-sm btn-slide btn-card-game-carousel text-dark float-right"
                                    onClick={this.handleCardClick}
                                >
                                    <FontAwesomeIcon icon={faImages}/>
                                </button>
                            }
                        </h6>
                    </div>
                    <p className="text-muted card-text">
                        <small>{year} - {publisher}</small>
                    </p>
                    {
                        comment && (
                            <p className="text-muted card-text">
                                <small>{comment}</small>
                            </p>
                        )
                    }
                </div>
            </div>
        );
    }
}
