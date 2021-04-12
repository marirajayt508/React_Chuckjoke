import React from "react";
import ReactDOM from 'react-dom';
import './App.css';

function FetchAPI() {
  fetch('https://api.chucknorris.io/jokes/categories')
  .then(response => response.json())
  .then(data => listofjokes(data));
}

function joke(category) {
  fetch('https://api.chucknorris.io/jokes/random?category='+category)
  .then(response => response.json())
  .then(data => joke1(data.value,category));
}

function joke1(item,category)
{
  var joketype=<div class="container"><br/><div id="box"><h1 class="text-danger">Joke category is {category}<hr/> </h1><h4  class="text-primary">{item}</h4><br/>
  <hr/><button class="btn btn-success" onClick={()=>{joke(category)}}>New Joke</button>&nbsp;
  <button class="btn btn-warning" onClick={FetchAPI}>Go Back</button><br/><br/>
  </div></div>
  ReactDOM.render(joketype,document.getElementById('root'));
}

function listofjokes(data)
{
  var myval=   <div class="container" id="box"><br/><h1 class="text-center text-danger">Chuck Norris Jokes</h1><h5 class="text-center">Choose Your Joke Category</h5><hr/>
  
    {data.map((item) => (  <div>
        <button class="btn btn-success btn-lg btn-block" onClick={()=>{joke(item)}}>{item}</button><br/><br/>
        </div>
    ))}

</div>
  ReactDOM.render(myval,document.getElementById('root'));
}

class Content1 extends React.Component {
  componentWillMount() {
  FetchAPI()
 }

  render() {
    return " "
  }
}

export default Content1;
