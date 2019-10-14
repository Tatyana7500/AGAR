import React, { Component } from 'react';
import PropType from 'prop-types';
import Konva from 'konva';
import { Stage, Layer, Circle } from 'react-konva';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 2000,
            y: 2000,
        };
    }

    static propTypes = {
        foods: PropType.array.isRequired,
        player: PropType.object.isRequired,
    };

    moveField = (e) => {

    };

    render() {
        const { foods, player } = this.props;

        return (
            <Stage width={window.innerWidth} height={window.innerHeight} onMouseMove={this.moveField}>
                <Layer>
                    {
                        foods.map((item, index) => {
                            return (<Circle
                                    key={index}
                                    x = {item.x}
                                    y = {item.y}
                                    radius = {item.radius}
                                    fill = {item.color}
                            />
                          );
                        })
                    }
                    <Circle
                        x = {player.x}
                        y = {player.y}
                        radius = {player.radius}
                        fill = {player.color}
                    />
                </Layer>
             </Stage>

        );
    }
}

export default Main;