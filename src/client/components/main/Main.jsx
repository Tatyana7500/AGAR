import React, { Component } from 'react';
import PropType from 'prop-types';
import { Stage, Layer, Circle, Text } from 'react-konva';
import { Leader } from './styledComponent';

const widthWindow = window.innerWidth;
const heightWindow = window.innerHeight;

class Main extends Component {
    static propTypes = {
        mouseMove: PropType.func.isRequired,
        showModel: PropType.object.isRequired,
        showLeaders: PropType.object.isRequired,
    };

    onMouseMove = ({ evt }) => {
        const { mouseMove } = this.props;
        const coordinates = {
            x: evt.clientX,
            y: evt.clientY,
        };

        mouseMove(coordinates);
    };

    render() {
        const {
            showModel: { foods, players },
            showLeaders,
        } = this.props;

        return (
            <div>
            <Stage width={widthWindow}
                   height={heightWindow}
                   onMouseMove={this.onMouseMove}
            >
                <Layer>
                    {
                        foods.map((item, index) => (
                            <Circle
                                key={index}
                                x={item.x}
                                y={item.y}
                                radius={item.radius}
                                fill={item.color}
                            />
                        ))
                    }
                    {
                        players.map((item, index) => (
                            <>
                            <Circle
                                key={index}
                                x={item.x}
                                y={item.y}
                                radius={item.radius}
                                fill={item.color}
                            />
                                <Text
                                    fontSize={16}
                                    text={item.name}
                                    fill={'#ffffff'}
                                    x={item.x - item.radius / 2}
                                    y={item.y - 13}
                                    width={item.radius}
                                    height={item.radius}
                                    align={'center'}
                                />
                            </>
                        ))
                    }
                </Layer>
            </Stage>
            <Leader>
                <Leader.p>Leaders:</Leader.p>
                {
                    showLeaders.map((item, index) => (
                        <Leader.p key={index}>{index + 1}. {item.name}</Leader.p>
                    ))
                }
            </Leader>
            </div>
        );
    }
}

export default Main;