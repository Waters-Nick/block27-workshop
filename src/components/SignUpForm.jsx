import { useState } from "react"

function SignUpFrom() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          header: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: "some-username",
            password: "secrets-are-no-fun-2"
          })
        });
      const result = await response.json();
      console.log(result);

    } catch (err) {
      setError(error.message);
    }
  }


  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

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