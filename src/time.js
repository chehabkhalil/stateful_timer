import React, {Component} from 'react';
import './App.css';
import './App'
import Indication from "./indication";
//import Button from "./Button"

class StaticTimer extends Component {

    constructor(props) {
        super(props);
        this.h=Math.floor(this.props.start/3600).toString();
        this.m=Math.floor((this.props.start%3600)/60).toString();
        this.s=Math.floor(this.props.start%60).toString(); 
        this.state = { 
            timerms:this.props.start,
            status: "initial"
        }
        setInterval(
            () => {
              this.setState(
                (this.state.status==="Stop" && this.state.timerms>0)?(this.setState({ timerms: this.state.timerms - 1 }) &&
                this.conversion()):  clearInterval(this.state.timerms)
              )
             
            },
            1000
            
          )
           
           
    }
       
           start = () => { this.setState({ status: "Start" });  }
           stop = () => { this.setState({ status: "Stop" });  }
           reset = () => { this.setState({ status: "initial", timerms:this.props.start });  }

        render() { 
                
            if (this.state.status==="initial")
            {

                return ( 
                    <div>
                        <div className="Time">
                        <div>{(this.h.length>=2 ?this.h:"0"+this.h)}</div>:<div>{(this.m.length>=2 ?this.m:"0"+this.m)}</div>:<div>{(this.s.length>=2 ?this.s:"0"+this.s)}</div>
                        </div>
                        <Indication/>
                        <div className="Buttons">
                           <button className="Btn_start" onClick={this.stop} >Start</button>
                           <button className="Btn_reset" onClick={this.reset}>Reset</button>
                         </div>
                    </div>
                     );
            } else if(this.state.status==="Start"){
                let h= Math.floor(this.state.timerms/3600).toString();
                let m=Math.floor((this.state.timerms%3600)/60).toString();
                let s=Math.floor(this.state.timerms%60).toString(); 
               return(<div>
                <div className="Time">
                <div>{(h.length>=2 ?h:"0"+h)}</div>:<div>{(m.length>=2 ?m:"0"+m)}</div>:<div>{(s.length>=2 ?s:"0"+s)}</div>
                </div>
                <Indication/>
                <div className="Buttons">
                   <button className="Btn_start" onClick={this.stop} >Start</button>
                   <button  className="Btn_reset" onClick={this.reset}>Reset</button>
                 </div>
            </div>);
            }
            else if(this.state.status==="Stop"){ 
                 let h= Math.floor(this.state.timerms/3600).toString();
                let m=Math.floor((this.state.timerms%3600)/60).toString();
                let s=Math.floor(this.state.timerms%60).toString(); 
               return(<div>
                <div className="Time">
                <div>{(h.length>=2 ?h:"0"+h)}</div>:<div>{(m.length>=2 ?m:"0"+m)}</div>:<div>{(s.length>=2 ?s:"0"+s)}</div>
                </div>
                <Indication/>
                <div className="Buttons">
                   <button className="Btn_stop" onClick={this.start} >Stop</button>
                   <button className="Btn_reset" onClick={this.reset}>Reset</button>
                 </div>
            </div>);  }
            }
        } 
export default StaticTimer;