import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

class SignUp extends Component{
	state = {
        userName: "",
		email: "",
        password: "",
	}
	
	signUp = () => {
		
        const { userName, email, password } = this.state;

		console.log("userName, email, password", userName, email , password)

		axios.post(
			'https://actions-manager-api.herokuapp.com/users', 
			{userName, email, password}
		)
    	.then(async res => {
				await AsyncStorage.setItem('userToken', res.data.token);
				const token = await AsyncStorage.getItem('userToken');
				console.log(token);
			}
        )
    }
    
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={styles.inputStyle}>
					<Form>
                        <Item floatingLabel>
							<Label>Username</Label>
							<Input
								onChangeText={(userName)=>this.setState({userName})}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input
								onChangeText={(email)=>this.setState({email})}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input
								onChangeText={(password)=>this.setState({password})}
								secureTextEntry
							/>
						</Item>
					</Form>
				</View>
				<View style={{marginTop: 10}}>
					<Button
						light
						block
						onPress={this.signUp}
					>
						<Text style={{color: '#234544'}}>Sign Up</Text>
					</Button>
				</View>
			</View>
		)
	}
}

const styles = {
	inputStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		margin: 3
	}
}

export default SignUp;
