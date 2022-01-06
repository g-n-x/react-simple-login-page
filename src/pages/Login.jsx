import InputText from '../components/InputText'
import '../styles/login-page.css'

export default function Login (props) {
  return (
    <div className="loginForm">
      <InputText
        type="text"
      />
      <InputText
        type="password"
      />
    </div>
  )
}
