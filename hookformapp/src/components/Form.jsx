import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
    <div className='row'>
        <h1>Form to win a Million Dollars!</h1>

        {/* form submission */}
        <form action="" className='col-4 mx-auto'>
            <div className='form-group'>
                {user.firstName && user.firstName.length < 2 ? <p className='text-danger'>First Name must be at least 2 characters</p> : null}
                <label htmlFor="firstName" className='form-label'>First Name:</label>
                <input type="text" name="firstName" id='firstName' className='form-control' onChange={changeHandler}/>
            </div>
            <div className='form-group'>
                {user.lastName && user.lastName.length < 2 ? <p className='text-danger'>Last Name must be at least 2 characters</p> : null }
                <label htmlFor="lastName" className='form-label'>Last Name:</label>
                <input type="text" name="lastName" id='lastName' className='form-control' onChange={changeHandler}/>
            </div>
            <div className='form-group'>
                {user.email && user.email.length < 2 ? <p className='text-danger'>Email must be at least 2 characters</p> : null}
                <label htmlFor="email" className='form-label'>Email:</label>
                <input type="email" name="email" id='email' className='form-control' onChange={changeHandler}/>
            </div>
            <div className='form-group'>
                {user.password && user.password.length < 8 ? <p className='text-danger'>Password must be at least 8 characters</p> : null }
                <label htmlFor="password" className='form-label'>Password:</label>
                <input type="password" name="password" id='password' className='form-control'onChange={changeHandler}/>
            </div>
            <div className='form-group'>
                {user.confirmPassword && user.confirmPassword !== user.password ? <p className='text-danger'>Passwords must match</p> : null}
                <label htmlFor="confirmPassword" className='form-label'>Confirm Password:</label>
                <input type="password" name="confirmPassword" id='confirmPassword' className='form-control'onChange={changeHandler}/>
            </div>
        </form>

        {/* Form Data */}
        <h2>Form Data</h2>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Confirm Password: {user.confirmPassword}</p>

    </div>
    )
}

export default Form