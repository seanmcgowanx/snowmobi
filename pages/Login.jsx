import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    function handleSubmit(e) {
        setError(null)
        setStatus("submitting")
        e.preventDefault()
        loginUser(loginFormData) ? setStatus("idle") : (setError("No existing users with those credentials"), setStatus("idle"))
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state?.message && <h3 className="login-first">{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"}>Log in</button>
                {error && <h3 className="login-first">{error}</h3>}
                <h3 className="login-tip">Click Log in with <u>no credentials</u> to see demo account!</h3>
            </form>
        </div>
    )

}