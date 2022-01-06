import Button from '../components/Button'
import InputText from '../components/InputText'
import '../styles/login-page.css'

export default function Login (props) {
  return (
    <div className="loginForm">
      <div>
        <InputText
          type="text"
        />
        <InputText
          type="password"
        />
        <Button>Login</Button>
      </div>
    </div>
  )
}
