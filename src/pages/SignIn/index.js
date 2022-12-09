import { Link } from "react-router-dom";
import { SignInArea } from "./styled";

const SignIn = () => {
    return (
        <SignInArea>
            <h1>Login</h1>
            <form>
                <input 
                    type="email"
                    placeholder="Email"
                    required
                />
                <input 
                    type="password"
                    placeholder="Password"
                    required
                />
                <button>Login</button>
            </form>
            <Link to='/signup'>Don't have an account? Create an account</Link>
        </SignInArea>
    )
}

export default SignIn;