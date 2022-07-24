import {React, useState} from 'react'
import axios from 'axios';
import { Form, Button } from "react-bootstrap";


export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "https://auth-app-mongodb-react.herokuapp.com/register",
            data: {
              email,
              password,
            },
          };

        axios(configuration)
        .then((_)=>{
            setRegister(true);
            setPassword("");
            setEmail("");
        })
        .catch((error)=>{
            error = new Error()
        })

    }

    return (
        <>
        <h2>S'inscrire</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
            
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email" 
                    />
                </Form.Group>

                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                </Form.Group>

            
                <Button 
                variant="primary" 
                type="submit"
                onClick={(e)=>handleSubmit(e)}
                >
                    S'inscrire
                </Button>
            </Form>

            {register && (
                <p> Vous êtes inscrit.</p>
            )}
        </>
    )
}