import { useState } from 'react'
import bookLogo from './assets/books.png'
import LoginForm from './components/Login'
import Register from './components/Register'
import Layout from './components/Layout'
import Router from './components/Router/Router'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Layout token={token} setToken={setToken} >
        <Router token={token} setToken={setToken} />
      </Layout>
      <LoginForm token={token} setToken={setToken} />
      <Register token={token} setToken={setToken} />
    </>
  )
}

export default App
