import React from 'react';
import useFrom from 'react-hook-form';
import { connect } from 'react-redux';
import { registerUser } from '../../authAction/authActions'
const Register = (props) => {

    const { user } = props.auth;

    const { register, handleSubmit, errors } = useFrom();
    const onSubmit = data => {
        console.log(data)
        fetchPosts(data);
    }
    const fetchPosts = (data) => {
        console.log("Data POSt", data);
        props.registerUser(data)
        // console.log('Posting request to GitHub API...');
        // fetch(`http://localhost:5000/api/users/userRegister`,
        //     {
        //         method: 'post',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(data)
        //     })
        //     .then((res) => {
        //         console.log('Created Gist Res:', res);
        //         return res.json();
        //     }).then((data) => {
        //         console.log('Created Gist Data:', data);
        //         console.log('Created Gist:', data.html_url);
        //     })
    }
    return (
        <React.Fragment>
            <div className="register">
               
                <div className="container">
                    <div className="row">
                    {user ? user.name : "null"}
                        <div className="col-md-8 m-auto justify-content-center">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your DevConnector account
                            </p>
                            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        // className={classnames('form-control form-control-lg', {
                                        //     'is-invalid': errors.name
                                        // })}
                                        placeholder="Name"
                                        name="name"
                                        ref={register({ required: true })}
                                    // value={this.state.name}
                                    // onChange={this.onChange}
                                    />
                                    {errors.name && 'name is required.'}
                                    {/* {errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )} */}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        // className={classnames('form-control form-control-lg', {
                                        //     'is-invalid': errors.email
                                        // })}
                                        placeholder="Email Address"
                                        name="email"
                                        ref={register({ required: true })}
                                    // value={this.state.email}
                                    // onChange={this.onChange}
                                    />
                                    {errors.email && 'Emmail Id is required.'}
                                    {/* {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )} */}
                                    {/* <small className="form-text text-muted">
                                        This site uses Gravatar so if you want a profile image, use
                                        a Gravatar email
                                    </small> */}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        // className={classnames('form-control form-control-lg', {
                                        //     'is-invalid': errors.password
                                        // })}
                                        placeholder="Password"
                                        name="password"
                                        ref={register}
                                    // value={this.state.password}
                                    // onChange={this.onChange}
                                    />
                                    {errors.password && 'Password is required.'}
                                    {/* {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )} */}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        // className={classnames('form-control form-control-lg', {
                                        //     'is-invalid': errors.password2
                                        // })}
                                        placeholder="Confirm Password"
                                        name="password2"
                                        ref={register}
                                    // value={this.state.password2}
                                    // onChange={this.onChange}
                                    />
                                    {/* {errors.password2 && (
                                        <div className="invalid-feedback">{errors.password2}</div>
                                    )} */}
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

const mapStateToProps = (stata) => ({
    auth: stata.auth
})

export default connect(mapStateToProps, { registerUser })(Register);