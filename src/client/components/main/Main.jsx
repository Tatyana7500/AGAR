import React, { Component } from 'react';
import PropType from 'prop-types';
import { Stage, Layer, Circle, Text } from 'react-konva';

const widthWindow = window.innerWidth;
const heightWindow = window.innerHeight;

class Main extends Component {
    static propTypes = {
        showModel: PropType.object.isRequired,
        mouseMove: PropType.func.isRequired,
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
        } = this.props;

        return (
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
                        players.map(item => (
                            <>
                            <Circle
                                key={item.name}
                                x={item.x}
                                y={item.y}
                                radius={item.radius}
                                fill={item.color}
                            />
                                <Text
                                    fontSize={20}
                                    text={item.name}
                                    wrap='char'
                                    align='center'
                                    width={400}
                                />
                            </>
                        ))
                    }
                </Layer>
            </Stage>
        );
    }
}

export default Main;