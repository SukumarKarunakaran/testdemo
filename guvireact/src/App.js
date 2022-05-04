import "./App.css";
import { useState } from "react";

export default function App() {

  // const people =["Sukumar", "Karunakaran", "Karen"];
  const profile = [
    {
      name:"SUKUMAR",
      pic:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/profile-icon.png"
    },
    {
      name:"Karunakaran",
      pic:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/profile-icon.png"
    },
    {
      name:"Karan",
      pic:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/profile-icon.png"
    }
  ];
  return (
    <div className="App">
      {/* <Msg
        name="SUKUMAR"
        pic="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/profile-icon.png"
      /> */}
      {/* {people.map(personName => <Welcome name={personName}/>)} */}
      {profile.map(value => <Msg name={value.name} pic={value.pic}/>)}
      
    </div>
  );
}

function Counter(){
  // let like = 10;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return(
    <div className="user-container">
      <button className="btn-like" onClick={()=> setLike(like+1) }> 👍   {like}</button> 
      <button className="btn-dislike" onClick={()=> setDisLike(disLike+1) }> 👎   {disLike}</button> 
      
    </div>
  );
}

// function Welcome(props) {
//   return (
//     <div>
//       {/* <img className="profile-pic" src={props.pic} alt="Profile-Pic" /> */}
//       <h1>Hi, {props.name}</h1>
//     </div>
//   );
// }

function Msg(props) {
  return (
    <div>
      <img className="profile-pic" src={props.pic} alt="Profile-Pic" />
      <h1>Hi, {props.name} </h1> <Counter />
    </div>
  );
}