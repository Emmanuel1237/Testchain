import React, { Component } from 'react';
import tokenlogo from '../token.png'
import ethlogo from '../ether.png'


class BuyForm extends Component {  

  constructor(props) {  // store bc data in react state
    super(props);
    this.state = {
      Output: '0'
      }
    }

 
  render() {          
    return (
 <form className="mb-3" onSubmit={(event)=>{
        event.preventDefault()
        let etherAmount
        etherAmount=this.input.value.toString()
        etherAmount=window.web3.utils.toWei(etherAmount,'Ether')
        this.props.buyTokens(etherAmount)
       {/*console.log("purchasing Tokens...")*/}
      }}>
       <div>
         <label className="float-left"><b>Input</b></label>
         <span className="float-right text-muted">
          Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}
         </span>
        </div>
        <div className="input-group mb-4">
          <input
           type="text"
           onChange = {(event)=> {
            {/*console.log("changing...")*/}
            const etherAmount = this.input.value.toString()
            this.setState({
              Output: etherAmount * 100
            })
           {/*} console.log(this.state.Output)*/}
           }}
           ref={(input) => {this.input = input }}
           className="form-control form-control-lg"
           placeholder="0"
           required />
         <div className="input-group-append">
          <div className="input-group-text">
           <img src={ethlogo} height='32' alt=""/>
           &nbsp;&nbsp;&nbsp; ETH
           </div>
          </div>
        </div>
        <div>
          <label className="float-left"><b>Output</b></label>
          <span className="float-right text-muted">
            Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
            </span>
          </div>
          <div className="input-group mb-2">
           <input
             type="text"
             className="form-control form-control-lg"
             placeholder="0"
             value={this.state.Output}
             disabled
             />
             <div className="input-group-append">
              <div className="input-group-text">
              <img src={tokenlogo} height='32' alt=""/>
              &nbsp; DApp
            </div>
          </div>
        </div>
        <div className="mb-5">
            <span className="float-left text-muted">Exchange Rate</span>
            <span className="float-right text-muted">1 ETH = 100 DApp</span>
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-lg">SWAP!</button>
        </form>
      );
  }
}

export default BuyForm;