import { PropsWithChildren } from 'react'
import logo from '../../assets/logo.svg'
import './Auth.css'

function Auth({ children }: PropsWithChildren<{}>) {
  return (
    <div className="auth-page">
      <img className="auth__logo" src={logo} alt="" />
      {children}
    </div>
  )
}

export default Auth
