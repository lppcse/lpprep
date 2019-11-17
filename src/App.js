import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Disp from './Disp';
import Api from './Api';
import Graphr from './Graph';
import {connect} from 'react-redux';
import {anotherName} from './actions/myaction'

// function App(props) {
//   console.log(props);
//   return (
//    <div>
//       <h1>i'm App component {props.myname}</h1>
//       <Disp />
//       <Api />
//       <Graphr />

//       <button onClick={()=>{props.changeName()}}>Change Name </button>
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch)=>{
//   return {
//     changeName:()=>{dispatch(anotherName())}
//   }
// }

// const mapStateToProps = (state)=>{
//   return {
//     myname: state.name
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (App);

const iState = {
  name : "Ramesh",
  wish: ['eat', 'code', 'sleep']
}

const reducer = (state, action)=>{
  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      }
      default:  
        return state
  }
}



function App(props) {
 // console.log(props);
 const [data, dispatch] = useReducer(reducer, iState);
 const [data2, dispatch2] = useReducer(reducer, iState);

 const getName = (name)=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(res2=>{
      dispatch({type: 'CHANGE_NAME', payload: res2[0].name})
  })
}

  return (
   <div>
      <h1>i'm App component {props.myname}</h1>
      <Disp />
      <Api />
      <Graphr />
      <h1>{data.name}</h1>
      <h1>{data.wish[0]}</h1>

      <button onClick={()=>getName()}>change name</button>
      <h1>{data2.name}</h1>
      <h1>{data2.wish[1]}</h1>

      <button onClick={()=>{dispatch2({type: "CHANGE_NAME", payload: "hitesh"})}}>Change Name </button>
    </div>
  );
}

export default App;
