/* ------------React----------------- */
import { Table, Grid, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import storehash from './storehash';
/* -------------web3----------------- */
/* overrides metamask v0.2 for our v 1.0 */

// import Web3 from 'web3';
// const web3 = new Web3(window.web3.currentProvider);

/* -------------IPFS--------------- */
const IPFS = require('ipfs-api');
/* infura 사용 */
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

/* local 사용 */
// const ipfs = new IPFS('localhost', '5001', {protocol: 'http'});
/* -------------------------------- */

class App extends Component {
  /* state 선언 */
  state = {
    ipfsHash: null,
    buffer: '',
    transactionHash: '',
    txReceipt: '',
    filename: '',
    cid: ''
  };
  /* file input event */
  captureFile = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    // this.setState.filename
    let reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => this.convertToBuffer(reader)
  };

  onCID = (event) => {
    this.setState({
      cid: event.target.value
    });
  };
  /* File change to buffer */
  convertToBuffer = async (reader) => {
    //file is converted to a buffer to prepare for uploading to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    this.setState({ buffer });

  };
  /* refresh button event */
  onRefresh = async () => {
    try {
      this.setState({ blockNumber: "waiting.." });
      this.setState({ gasUsed: "waiting..." });

      // get Transaction Receipt in console on click
      // await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt) => {
      //   console.log(err, txReceipt);
      //   this.setState({ txReceipt });
      // }); //await for getTransactionReceipt

      await this.setState({ blockNumber: this.state.txReceipt.blockNumber });
      await this.setState({ gasUsed: this.state.txReceipt.gasUsed });
    }
    catch (error) {
      console.log(error);
    }
  }

  onUpload = async (event) => {
    event.preventDefault();

    // const accounts = await web3.eth.getAccounts();

    // console.log('Sending from Metamask account: ' + accounts[0]);

    //obtain contract address from storehash.js
    // const ethAddress = await storehash.options.address;
    // this.setState({ ethAddress });

    /* Set hash "state" */
    await ipfs.add(this.state.buffer, (err, ipfsHash) => {
      console.log(err, ipfsHash);
      this.setState({ ipfsHash: ipfsHash[0].hash });

      // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
      // console.log(accounts[0]);
      // storehash.methods.sendHash(this.state.ipfsHash).send({
      //   from: accounts[0]
      // }, (error, transactionHash) => {
      //   console.log(transactionHash);
      //   this.setState({ transactionHash });
      // }); //storehash 
    }) //await ipfs.add 
  }; //onSubmit 

  /* Download event */
  onGet = async (event) => {
    event.preventDefault();
    console.log(this.state.cid);
    ipfs.get(this.state.cid, (err, files) => {
      files.forEach((file) => {
        console.log(file.path)
        this.createAndDownloadBlobFile(file.content, this.state.cid);
      })
    })
  };

  /* Download file */
  createAndDownloadBlobFile = (body, filename) => {
    const blob = new Blob([body]);
    const fileName = `${filename}`;
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, fileName);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };
  /* render section */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> ETH + IPFS upload simple example dapp (ETHCON KOREA 2019)</h1>
        </header>

        <hr />

        <Grid>
          <h3>upload file to IPFS</h3>
          <Form onSubmit={this.onUpload}>
            <input
              type="file"
              onChange={this.captureFile}
            />
            <Button
              bsStyle="primary"
              type="submit">
              Send it
             </Button>
          </Form>
          <hr />
          <Button class="send" onClick={this.onRefresh}> refresh </Button>

          <Table bordered responsive>
            <thead>
              <tr>
                <th>Transaction Data</th>
                <th>Values</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>File Name</td>
                <td></td>
              </tr>
              <tr>
                <td>IPFS Hash</td>
                <td>{this.state.ipfsHash}</td>
              </tr>
              <tr>
                <td>ETH CONTRACT ADDR</td>
                <td>{this.state.ethAddress}</td>
              </tr>

              <tr>
                <td>Tx Hash</td>
                <td>{this.state.transactionHash}</td>
              </tr>
            </tbody>
          </Table>
          HASH
          <Form onSubmit={this.onGet}>
            <input
              value={this.state.cid}
              onChange={this.onCID}
            />
            <Button
              bsStyle="primary"
              type="submit">
              Get it!
             </Button>
          </Form>
          <hr />
        </Grid>
      </div>
    );
  }
}

export default App;
