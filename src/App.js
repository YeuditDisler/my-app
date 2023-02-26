import './App.css';
import React, { Component,useState } from 'react';

// function Color()
// {
//     let color="red";
//     return <div>
//     <h1>Color: {color}</h1>
// </div>   
// }
// function Rochav()
// {
//     let rochav="10";
//     return <div>
//     <h1>Rochav: {rochav}</h1>
// </div>   
// }
// function Orech()
// {
//     let orech="20";
//     return<div>

//     <h1>Orech: {orech}</h1>
// </div>  
// }
// class Chair extends Component{
//   render(){
//     let height="180";
//     let color="green";
// return( <div>
// <h1>Chair</h1>
// <h2>the color is {color}</h2>
// <h2>the height is {height}</h2>
// </div>
// );
//   }
// }
// class Table extends Component{
//   render(){
//     let height="250";
//     let color="brown";
// return( <div>
// <h1>Table</h1>
// <h2>the color is {color}</h2>
// <h2>the height is {height}</h2>
// </div>
// );
//   }
// }
// class Closet extends Component{
//   render(){
//     let height="300";
//     let color="red";
// return( <div>
// <h1>Closet</h1>
// <h2>the color is {color}</h2>
// <h2>the height is {height}</h2>
// </div>
// );
//   }
// }
// function FirstName(props)
// {
// return(
//    <div>
//         <h1>first name </h1>
//         <div>{props.name}</div>
//     </div>
// )
// }
// function Lastname(props)
// {
// return(
//    <div>
//         <h1>last name </h1>
//         <div>{props.lastName}</div>
//     </div>
// )
// }
// function Age(props)
// {
// return(
//    <div>
//         <h1>age </h1>
//         <div>{props.age}</div>
//     </div>
// )
// }
// function City(props)
// {
//   return(
//     <div>
//       <h1>city</h1>
//       <div>{props.city}</div>
//     </div>
//   )
// }
// function Order()
// {
//   return(
//     <div>
//     <h1>The order is</h1>
//     <div><Closet/></div>
//     <div><Chair/></div>
//     <div><Table/></div>
//     <h1>Send to</h1>
//     <div ><FirstName name="Yehudit"/></div>
//     <div><Lastname lastName="Dissler"/></div>
//     <div><Age age="10"></Age></div>
//     <div><City city="Modiin Ilit"></City></div>
//     </div>
//   )
// }
// function Box(){
//   const[boxClass,setBox]=useState('red');
//   function changeBox(){
//     setBox('green');
//   }
//   return(
// <div>
//   <div className={boxClass} onClick={changeBox}></div>
// </div>
//   )
// }
function Count(){
  const[count, setCount]=useState(0);
  const changeCount=()=>{
  setCount(count+1)
  }
  return(
    <>
<p>you clicked {count} times</p>
<button onClick={changeCount}>click me</button>
<Word count={count}/>

    </>
  )
}
function Word(props){
  const[word, setWord]= useState("hello");
const changeWord=()=>{
if(word=="hello"){
  setWord("good bye");
}
else{
  setWord("hello");
}

}
let theClass="";
if(props.count>3){
theClass="yellow"
}
  return(
    <>
    <h1 className={theClass}>  {word}</h1>
    <button onClick={changeWord}>change</button>
 </> )
}
function App() {
  return (
    <div>
  {/* <Order/> */}
    {/* <Box/> */}
    <Count/>
    </div>
  );
}
export default App;
