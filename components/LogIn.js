import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

class LogIn extends Component{
	
	constructor(props) {
		super(props)

		this.state = {
			email: "",
			password: "",
		}
	}
	
	logIn = () => {
		const { email, password } = this.state;

		axios.post(
			'https://actions-manager-api.herokuapp.com/login', 
			{email, password}
		)
    	.then(async res => {
				await AsyncStorage.setItem('userToken', res.data.token);
				const token = await AsyncStorage.getItem('userToken');
			
				this.props.navigation.navigate('Action');
				console.log('after route')
			}
		)
		.catch( error => {
			console.log(error);
		})
	}
	
	render() {

		return (
			<View style={{flex: 1}}>
				{/* <View>
					{persons.map( person => 
						<Text key={person.id}>{person.username}</Text>
					)}
				</View> */}
			
				<View style={styles.inputStyle}>
					<Form>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input
								onChangeText={(email)=>this.setState({ email })}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input
								onChangeText={(password)=>this.setState({password})}
								secureTextEntry
							/>
						</Item>
						<Button
							light
							block
							style={{ marginTop: 20 }}
							onPress={ this.logIn }
						>
							<Text style={styles.btnStyle}>Login</Text>
						</Button>
					</Form>
				</View>
				<View style={{marginTop: 20, alignItems: 'center'}}>
					<Text>Don't have an account?</Text>
					<Button
						has text
						transparent
					>
						<Text>Sign Up</Text>
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
	},
}

export default LogIn;
