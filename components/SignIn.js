import React from 'react';
import {View,Text} from 'react-native';
import {Form, Item, Label, Input,Button} from 'native-base';
import axios from 'axios';
import localApi from "../assets/localApi";




class SignIn extends React.Component{
	state = {
		email: "",
        password: "",
        persons: []
    }
     componentDidMount(){
		axios.get('https://actions-manager-api.herokuapp.com/users')
		
         .then(res=> {
			const {data} = res;
			// console.log("GET", data)
			this.setState({persons: data.data})
			// console.log("users",this.state.persons.data)
           
		 })
		 .catch(function(error) {
			console.log('error: ' + error.message);
			  throw error;
			});
     }

	logIn = () =>{
		var email = this.state.email;
		var password = this.state.password;
		console.log("email,pass",email,password)
		axios.post('https://actions-manager-api.herokuapp.com/login',{email,password})
    .then(res =>{
        console.log("res",res);
        console.log("res.data",res.data)
        })
    }
    

    

	render(){
		const {persons} = this.state

		return(
			

			<View style={{flex: 1}}>
				<View>
				{persons.map((person)=><Text>{person.username}</Text>)}
				</View>
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
								<Text style={{color: '#234544'}}>Sign In/Sign Up</Text>
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
