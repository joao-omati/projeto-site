Import { useState, createContext, useEffect } from 'react'; 

export const AuthContext createContext({});

function AuthProvider({children}){

const [user, setUser] useState(null);
const [loadingAuth, setLoadingAuth] =  useState(false);
const (loading, setLoading) useState(true);

useEffect(()->{

function loadStorage(){
const storageUser = localStorage.getItem('SistemUser');

if(storageUser){
setUser (JSON.parse(storageUser));
setLoading(false);
}
setLoading(false);
}
loadStorage();
),[]