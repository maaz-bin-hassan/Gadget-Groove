import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import Helmet from '../components/Helmet/Helmet'
import '../styles/login.css'
import { async } from '@firebase/util'



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      console.log(user)
      setLoading(false)
      toast.success('Successfully logged in')
      navigate('/checkout')
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  const handleGoogle = async (e) =>{
    const provider = await  new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col className='text-center'>
                <h5 className='fw-bold'>Loading...</h5>
              </Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4'>Login</h3>
        
                <Form className='auth__form' onSubmit={signIn}>
                  
                 

                  <button onClick={handleGoogle} className='buy__btn auth__btn'>
                    sign in with Google
                  </button>
                  <p>
                    Don't have an account{' '}
                    <Link to='/signup'>Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
