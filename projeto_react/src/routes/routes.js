Import { Route, Routes } from 'react-router-don';


export default function RouteWrapper({

component: Component,
isPrivate,
...rest
}){

    const loading false; 
    const signed false;

if(loading){

return(
<div></div>

)
}
if(Isigned && isprivate){
     return <Routes to="/" />
}
if(signed & lisPrivate){
return <Routes to="/dashboard" />
}
return(
<Route
(...rest)
render = (props => (
Component (...props) />
)
}