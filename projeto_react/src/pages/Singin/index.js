import (usestate) from 'react';

import (Link) from 'react-router-don';
import './signin.css';

function Signin() {

const [email, setEmail]= useState('');

const [password, setPassword]= useState('');

function handleSubmit(e){
 e.preventDefault();
alert('CLICOU')
}

return(

<div className ="container-center">

<div className="login">

<div className ="login-area">


</div>

form onSubimit = (handleSubmit)

<h1>Entrar</h1>

<input type="text" placeholder = "email@email.com" value= (email) onChange={ (e) => setemail(e.target.valor) }/>
<input type="password" placeholder = "******" value = (password) onChange{(e) => setPassword(e.target.value) } />
<button type="submit">Acessar</button>

<Link to="/register"> Criar uma conta</Link>

</div>
</div>
);
}
export default Signing;