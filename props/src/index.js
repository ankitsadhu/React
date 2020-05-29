import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';


// function ncard(val){
//   return(
//     <Card
//     imgsrc = {val.imgsrc}
//     title = {val.title}
//     sname = {val.sname}
//     link = {val.link}
//   />
//   )
// }

ReactDOM.render(
< >
  <h1>List of top 5 Netflix Series</h1>
  {Sdata.map((val)=>{
    return(
        <Card
        key = {val.sname}
        imgsrc = {val.imgsrc}
        title = {val.title}
        sname = {val.sname}
        link = {val.link}
        />
    )
  })}
</>,
document.getElementById('root')
);