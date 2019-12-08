import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: ''});
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        //here the [name] is either email or password, and the value is either the value of the email or the value of the password
        this.setState({ [name]: value});
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required 
                        label="email" />
                    <FormInput 
                        type="password" 
                        name="password"
                        handleChange={this.handleChange} 
                        value={this.state.password}
                        required 
                        label="password" />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;

