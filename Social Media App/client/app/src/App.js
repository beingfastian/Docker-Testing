import React from 'react'
import {Container} from "@material-ui/core"

import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from "./components/Auth/Auth"

export default function App() {
  return (
    <BrowserRouter>
    <Container maxWidth='lg'>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/"><Home></Home></Route>
      <Route exact path="/auth"><Auth></Auth></Route>
    </Switch>
    </Container>
    </BrowserRouter>
  )
}
