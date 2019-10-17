import React, { Component } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import { generateLoginBackground } from './logic';
import { Wrapper, Login } from './styledComponent';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    static propTypes = {
        authPlayer: PropTypes.func.isRequired,
    };

    authorization = () => {
        const player = {
            name: document.getElementById('name').value,
            color: document.getElementById('color').value,
        };

        this.props.authPlayer(player);
    };

    render() {
        return (
            <Wrapper>
                <Wrapper.blur />
                <Wrapper.Login>

                    <Login.name placeholder = {'Your name'} id='name'/>
                    <Login.color type= {'color'} id='color'/>
                    <Login.submit children ={'GO!'} onClick={this.authorization}/>

                </Wrapper.Login>
                <Stage width = {window.innerWidth} height = {window.innerHeight}>
                    <Layer>
                        { generateLoginBackground().map((item, index) => {
                            return (
                                <Circle
                                    key = { index }
                                    radius = { item.radius}
                                    fill = { `rgb(${item.color.r}, ${item.color.g}, ${item.color.b})` }
                                    x = { item.x }
                                    y = { item.y }
                                />
                            );
                        })
                        }
                    </Layer>
                </Stage>
            </Wrapper>
        );
    }
};

export default LoginForm;