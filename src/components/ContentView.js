import React from 'react';

export default function ContentView(text){
    const txt = text.text.toString();
    if(txt.startsWith("http")){
      return(
        <a href={txt} target="_blank" rel="noopener noreferrer" style={{color:'#1F51FF'}}>{txt}</a> 
      )
    }
    return(
      <div>{txt}</div>
    )
  }