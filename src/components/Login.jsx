import React from 'react'

const Login = ({url}) => {
    return (
        <button 
        style = {{
            outline: 'none',
            border: 'none',
            padding: '20px 60px',
            fontSize: '32px',
            backgroundColor: 'green',
            color: 'white'
        }}
        onClick={() => window.location = url}>
            Login with Spotify
        </button>
    )
}

export default Login
