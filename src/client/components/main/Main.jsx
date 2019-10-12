import React, { Component } from 'react';
import PropType from 'prop-types';
import Konva from 'konva';
import { Stage, Layer, Circle } from 'react-konva';

class Main extends Component {
    constructor(props){
        super(props);
    }

    static propTypes = {
        foods: PropType.array.isRequired,
    };
    render() {
        const { foods } = this.props;

        return (

            <Stage width = '5000' height = '5000' >
                <Layer>
                    {
                        foods.map(item => {
                            return ( <Circle
                                x = {item.x}
                                y = {item.y}
                                radius = {item.radius}
                                fill = {item.color}
                            /> );
                        })
                    }
                </Layer>
             </Stage>
        );
    }
}

export default Main;