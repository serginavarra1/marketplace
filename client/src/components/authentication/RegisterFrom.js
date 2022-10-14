import { Link } from 'react-router-dom'

const RegisterFrom = () => {
    return (
        <>
            <div className="auth-title">
                <h1>REGISTER</h1>
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
                    <button type="submit">Register</button>
                </div>
            </form>
            <div className="auth-link">
                <Link to='/login'>Allready have an account? login here</Link>
            </div>
        </>
    );
}

export default RegisterFrom;