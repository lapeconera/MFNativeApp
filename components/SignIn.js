import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';
import axios from 'axios';

class SignIn extends Component {
	state = {
		email: "",
        password: "",
        persons: []
    }

	logIn = () => {
		const { email, password } = this.state;

		console.log("email, password", email, password);

		axios.post(
			'https://actions-manager-api.herokuapp.com/login', 
			{ email, password }
		)
		.then(async res => {	
			await AsyncStorage.setItem("token", res.data.token);
			const token = await AsyncStorage.getItem("token");
			console.log("token", token);
		});
    }
    
	render(){
		

		return(
			

			<View style={{flex: 1}}>
	
					<View style={styles.inputStyle}>
						<Form>
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
						<View style={{marginTop: 10}}>
							<Button
								light
								block
								onPress={this.logIn}
							>
								<Text style={{color: '#234544'}}>Log In</Text>
							</Button>

							<Button
								has text
								transparent
							>
								<Text style={{color: '#234544'}}>Sign Up</Text>
							</Button>
						</View>
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

export default SignIn;
