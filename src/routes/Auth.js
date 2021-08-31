import React, {useState} from "react";
import authService from "../firebase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        // 아래와 같은 뜻
        // const name = event.target.name;
        // const value =  event.target.value;
        // 아래와도 같은 뜻
        // const {name, value} = event.target;
        
        if(name === "email"){
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value={newAccount ? "Create Account" : "Log In"} />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
}
export default Auth;