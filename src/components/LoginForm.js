import React from 'react';
import { useState } from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Đăng nhập</h2>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                <div className='form-group'>
                    <label className='email' htmlFor='email'>Tên đăng nhập: <br/></label>
                    <input className='IPemail' type="email" name='email' id='email'  onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className='form-group'>
                    <label className='password' htmlFor='password'>Mật khẩu: <br/></label>
                    <input className='IPpassword' type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <div className='forgot'>
                    Quên mật khẩu
                </div>
                <div>
                <input className='btnLogin' type="submit" value="Đăng nhập" />
                </div>
            </div>
        </form>
    )
}

export default LoginForm
