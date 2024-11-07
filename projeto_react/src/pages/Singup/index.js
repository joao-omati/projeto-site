
Import { useState} from 'react';

    Import {Link} from 'react-router-dom';
    
    
    function Signup() {
    const [none, setNome] - useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] useState('');
    }
    function handleSubmit(e){
    e.preventDefault();
    alert('CLICOU')
    }
    
    return (
    <div className =   "container-center">
    <div className = "login">
    <div className="login-area">
    
    </div>
    
    <form onSubmit = {handleSubmit}>
    <h1>Cadastrar uma conta</h1> <
    <input type="text" placeholder="Seu nome" value={none} onChange={(e) -> sethome(e.target.value)} />
    <input type="text" placeholder="email@email.com" value= {email} onChange = { (e)-> setEmail(e.target.value)} />
    <input type="password" placeholder = "******" value = c {password} onChange= {(e)-> setPassword(e.target.value)}/>
    <button type="submit">Cadastrar</button>
    
    </form>
    
    Link to= "/" >Já tem una conta? Entre</Link>
    
    </div>
    </div>
    );