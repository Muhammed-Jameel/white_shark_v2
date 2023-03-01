// import React, {useRef, useState} from 'react'
// import { Alert, Button, Card, Form } from 'react-bootstrap'


// export default function Register() {

//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const passwordConfirmRef = useRef();
  
//     const [error, setError] = useState('')
//     const [loading, setLoading] = useState(false)

//     async function handleSubmit(e){
//         e.preventDefault()

//         if(passwordRef.current.value !== passwordConfirmRef.current.value
//             ){
//                 return setError('Passwords do not match')
//             }

//         try {
//             setError('')
//             setLoading(true)
//             await signup(emailRef.current.value, passwordRef.current.value)
//         } catch {
//             setError('Failed to create an account')
//         }
//         setLoading(false)
//     }


//   return (
//     <>
//     <Card>
//         <Card.Body>
            
//             <h2 className='text-center mb-4'>Sign-Up</h2>
//             {error && <Alert variant='danger'>{error}</Alert>}
//             <Form onSubmit={handleSubmit}>

//                 <Form.Group id="email">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type='email' ref={emailRef} required></Form.Control>
//                 </Form.Group>



//                 <Form.Group id="password">
//                     <Form.Label>Passowrd</Form.Label>
//                     <Form.Control type='password' ref={passwordRef} required></Form.Control>
//                 </Form.Group>



//                 <Form.Group id="password-confirm">
//                     <Form.Label>Passowrd</Form.Label>
//                     <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
//                 </Form.Group>

//                 <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>

//             </Form>
//         </Card.Body>
//     </Card>


//     <div>Already have an account? Login </div>
//     </>
//   )
// }

