
import React from "react";
// import { render } from "react-dom";
import './Timer.css'
export default class Timer extends React.Component {
 state = {
   time: 0,
   interval: 0
 };
 convert = mis => {
   let s = mis / 1000;
   let hours = Math.floor(s / (60 * 60));
   let restm = Math.floor(s % (60 * 60));
   let minutes = Math.floor(restm / 60);
   let rests = Math.floor(restm % 60);
   return (
    
    <div>
    <div className="value">
      <span >{String(hours).padStart(2, "0")}:</span>

      <span>{String(minutes).padStart(2, "0")}:</span>

      <span>{String(rests).padStart(2, "0")}</span>
    </div>
    <div className="name">
      <p className="hours"> Hour </p>
      <p className="minute"> Minute </p>
      <p> Second </p>

    </div>
  </div>
   )                    
 };
 
 start = () => {
   if (this.state.interval) {
     clearInterval(this.state.interval);
     this.setState({
       interval: 0
     });
   } else {
     const interval = setInterval(() => {
       this.setState({
         time: this.state.time + 1000
       });
     }, 1000);
     this.setState({
       interval
     });
   }
 };
 reset = () => {
   clearInterval(this.state.interval);
   this.setState({
     time: 0,
     interval: 0
   });
 };
 render() {
   console.log(this.state.interval);
   return (
     <>
       <h1 className="titre">Timer</h1>
       <h1>{this.convert(this.state.time)}</h1>
       <button className="start" onClick={this.start}>
         {this.state.interval ? "pause" : "start"}
       </button>
       <button className="reset" onClick={this.reset}>Reset</button>
     </>
   );
 }
}










