import { Link } from 'react-router-dom'

const LoginFrom = () => {
    return (
        <>
            <div className="auth-title">
                <h1>LOGIN</h1>
            </div>
            <form action="/" method="POST">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Username</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="username"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"/>
                </div>
                <div className="submit-button">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div className="auth-link">
                <Link to='/register'>You don't have an account? register here</Link>
            </div>
        </>
    );
}

export default LoginFrom;