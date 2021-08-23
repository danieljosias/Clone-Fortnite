import React, {Component} from 'react';
import firebase from '../firebase';
import Login from './login/index';
import NavBar from '../components/navbar/navbar';

interface MyState{
  state: string,
}

interface UserTypes{
  user: any,
}

class index extends React.Component<MyState,UserTypes>{

    constructor(props){
        super(props);
        this.state = {
          user: undefined,
        }
    
        this.authListener = this.authListener.bind(this);
    
      }
      
      componentDidMount(){
        this.authListener();
      }
    
      authListener(){
        firebase.auth().onAuthStateChanged((user) =>{
          if (user){
            this.setState({ user });
    
          }else{
            this.setState({ user: undefined });
          }
        })
    
      }

    render(){
        return (
            <div>
              { this.state.user ? (<NavBar />) : (<Login />) }
            </div>
        )
    }
}

export default index;
