import Button from '../components/Button'
import InputText from '../components/InputText'
import Label from '../components/Label'
import '../styles/login-page.css'

export default function Login (props) {
  return (
    <div className="loginForm">
      <div>
        <Label for="username">username</Label>
        <InputText
          id="username"
          type="text"
        />
        <Label for="password">password</Label>
        <InputText
          id="password"
          type="password"
        />
        <Button>Login</Button>
      </div>
    </div>
  )
}
