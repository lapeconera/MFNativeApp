import React, { Component } from 'react';
import { Container, Body, Content, Text, Input } from 'native-base';

class ActionBody extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Input
                        placeholder='What needs to be done?'
                    />
                </Content>
            </Container>
        )
    }
}

export default ActionBody;