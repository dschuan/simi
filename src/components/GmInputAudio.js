import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './input.css';
import MaterialIcon from 'material-icons-react';
import { ReactMic, saveRecording } from 'react-mic';
//import sampleAudio                 from './sample_audio.webm';
//import ReactGA                     from 'react-ga';


class GmInputAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "When you fell from heaven pain not?",//props.answer// props.score, // array
      isRecording: false,
      blobObject:null,
    }

  }

  toggleRecording = () => {
    if (this.state.isRecording==true){
      this.setState({
        isRecording: false,
      });
    } else {
      this.setState({
        isRecording: true,
      });
    }
  }

  onSave=(blobObject) => {
    var fd = new FormData();
    var url = "http://192.168.43.8:5000/uploadfile";
    fd.append('file', blobObject, "voice.webm");
    console.log("Sending file");

    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.send(fd);


    // fetch('http://192.168.43.8:5000/')
    // .then(results => {
    //   results.json();
    // }).then(function(data){
    //   console.log('Get succeeded', data);
    // });
    //
    // fetch('http://192.168.43.8:5000/uploadfile', {
    //   method: 'POST',
    //   body: fd
    // })
    // .then((resp) => resp.json())
    // .then(function (data) {
    //   console.log('Request succeeded with JSON response', data);
    // })
    // .catch(function (error) {
    //   console.log('Request failed', error);
    // });

    console.log("fetch command executed")

  }

  onStart=() => {
    console.log('You can tap into the onStart callback');
  }

  onStop= (blobObject) => {
    this.setState({
      blobURL : blobObject.blobURL
    });
  }

  onData(recordedBlob){
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  render() {



    return (

      <div className='background'>
        <h1 className="toptext center black">{this.state.answer}</h1>
        <ReactMic
            className="oscilloscope"
            record={this.state.isRecording}
            backgroundColor="#ffbf00"
            visualSetting="sinewave"
            audioBitsPerSecond= {128000}
            onStop={this.onStop}
            onStart={this.onStart}
            onSave={this.onSave}
            onData={this.onData}
            strokeColor="#ffffff" />

        <audio className="center" ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
        <h5 className="center black">{this.state.blobURL}</h5>
        <button onClick={this.toggleRecording} type="button" className={this.state.isRecording ? 'recordbtn recordon center' : 'recordbtn recordoff center'}>
          <MaterialIcon icon="mic_none" size={60} color='#f2f2f2' />
        </button>
      </div>
    );
  }
}

export default GmInputAudio;
