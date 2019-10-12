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
        player: PropType.object.isRequired,
    };


    moveField(e) {
        let stage = e.currentTarget;
        //stage = this.stageRef;
        //stage = e.target.getStage();
        console.log(stage)
    }

    render() {
        const { foods, player } = this.props;


        return (

            <Stage width = '5000' height = '5000' onMouseMove ={this.moveField}  ref={ref => {
                this.stageRef = ref;
            }}>
                <Layer >
                    {
                        foods.map((item, index) => {
                            return ( <Circle
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