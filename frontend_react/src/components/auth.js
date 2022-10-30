import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAUser, loginAUser } from '../redux/actions/auth/actions';

class Auth extends Component {
    constructor(props) {
        super(props)

        this.email = React.createRef();
        this.password = React.createRef();

        this.registerUser = this.registerUser.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    registerUser() {
        let user = {
            email : this.email.current.value,
            password : this.password.current.value,
            isLoggedin: false,
            msg: ''
        }

        this.props.registerAUser(user);
    }

    loginUser() {
        let user = {
            email : this.email.current.value,
            password : this.password.current.value,
            isLoggedin: false,
            msg: ''
        }

        this.props.loginAUser(user);
    }

    render() {
        let register = 
        (
            <div className='card col-6 m-3 mx-auto p-3'>
                <h3 className='text-center'>Sign up</h3>
                <div className='col-auto'>
                    <input type='text' name='forEmail' className='form-control mb-3' ref={this.email} placeholder='email@example.com'/>
                </div>
                <div className='col-auto'>
                    <input type='password' name='forPassword' className='form-control mb-3' ref={this.password} placeholder='Password'/>
                </div>
                <button className='btn btn-primary' onClick={this.registerUser}>sign up</button>
            </div>
        )
        
        let login =
        (
            <div className='card col-6 m-3 mx-auto p-3'>
                <h3 className='text-center'>Login</h3>
                <div className='col-auto'>
                    <input type='text' name='forEmail' className='form-control mb-3' ref={this.email} placeholder='email@example.com'/>
                </div> 
                <div className='col-auto'>
                    <input type='password' name='forPassword' className='form-control mb-3' ref={this.password} placeholder='Password'/>
                </div>
                <button className='btn btn-primary' onClick={this.loginUser}>login</button>
            </div>
        )

        return (
            <div className='container my-2 p-3'>
                <h1 className='text-center'>Welcome to Dish Poll App</h1>

                <div className='card-center p-3'>
                    <h2 className='text-center'>Are you a new user?</h2>
                    {register}
                </div>

                <div className='card-center p-3'>
                    <h2 className='text-center'>Are you an existing user?</h2>
                    {login}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.payload
    }
}

export default connect(mapStateToProps, { registerAUser, loginAUser })(Auth);