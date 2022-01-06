import Button from '../components/Button'
import InputText from '../components/InputText'
import Label from '../components/Label'
import '../styles/login-page.css'
import NatureLogo from '../assets/nature.png'

export default function Login (props) {
  return (
    <div className="loginForm">
      <div>
        <img src={NatureLogo} alt="nature logo" width="150"/>
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
        <p>Forgot your password? <a href="/">Click here</a>.</p>
        <div style={
          {
            alignSelf: 'flex-end',
            flexDirection: 'row',
            background: 'transparent'
          }
        }>
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  )
}
