import { PropsWithChildren } from 'react'
import logo from '../../assets/logo.svg'
import './Auth.css'

function Auth({ children }: PropsWithChildren<{}>) {
  return (
    <main className="auth-page">
      <img className="auth__logo" src={logo} alt="" />
      {children}
    </main>
  )
}

export default Auth
