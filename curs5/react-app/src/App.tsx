// import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Masina from './components/Masina'
import MyForm from './components/MyForm';
import Salut from './components/Salut'

function App() {
 const carInfo ={ name: 'Ford', model: 'Mustang' };

  return (
     <>
     <Salut nume='Ionut' curs='React'/>
     <Salut nume='Mihai'/>
     <Salut nume='Cornel'/>
     <Masina car={carInfo}/>
     <Form />
     <MyForm />
     </>
  )
}

export default App
