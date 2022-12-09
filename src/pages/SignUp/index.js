import { Link } from "react-router-dom";
import { SignUpArea } from "./styled";

const SignUp = () => {
    return (
        <SignUpArea>
            <h1>Sign Up</h1>
            <form>
                <input 
                    type="text"
                    placeholder="Full name"
                    required
                />
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
                <button>Sign Up</button>
            </form>
            <Link to='/signin'>Alredy have an account? Login</Link>
        </SignUpArea>
    )
}

export default SignUp;