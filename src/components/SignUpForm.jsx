import { useState } from "react"

function SignUpFrom() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('Eligible function')
  }


  return (
    <>
      <h2>Sign Up</h2>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <label>Username: 
          <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
        </label>
        <label>Password: 
          <input type="text" value={password} onChange={event => setPassword(event.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpFrom