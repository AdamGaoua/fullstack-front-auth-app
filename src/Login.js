import axios from 'axios';
import {React, useState} from 'react'
import { Form, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import Cookies from "universal-cookie";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const cookies = new Cookies();
   

    const handleSubmit= (e)=>{
        e.preventDefault();
        const configuration = {
            method:"post",
            url: "https://auth-app-mongodb-react.herokuapp.com/login",
            data: {
                email,
                password
            },
        };

        axios(configuration)
        .then((response)=>{
            setLogin(true);
            setPassword("");
            setEmail("");
            cookies.set("TOKEN", response.data.token, {
                path: "/",
              });
            Redirect('/auth');
        })
        .catch((error)=>{
            error = new Error();
        })
    }
    return (
        <>
        <h2>Login</h2>
        
        <Form onSubmit={(e)=>handleSubmit(e)}>
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Adresse email</Form.Label>
                <Form.Control 
                type="email" 
                name="email"
                value={email}  
                onChange={(e)=> setEmail(e.target.value)}              
                placeholder="Email"
                />
            </Form.Group>

            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control 
                type="password" 
                name="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Mot de passe" 
                />
            </Form.Group>

            
            <Button 
            variant="primary" 
            type="submit"
            onClick={(e)=>handleSubmit(e)}>
                Valider
            </Button>
        </Form>

        {login && 
        <p> Vous êtes connecté</p>}
        </>
    )
}