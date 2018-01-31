import React from 'react';
import { Player } from 'video-react';
import {Menu} from '../../Menu/Menu'


const sources = {
  BatmanvSuperman: 'http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4',
};

export class Stream extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources['BatmanvSuperman'],
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }
    render () {
        return(
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                {<Menu /> }
              </div>
              <div className="col-md-6">
                <div className="row">
                  <h1>Batman v Superman: Dawn of Justice</h1>
                </div>
                <div className="row">
                  <Player ref="player">
                    <source src={this.state.source} />
                  </Player>
                </div>
                <div className="row">
                  <div className="py-3">
                    <button onClick={this.play} className="mr-3">play</button>
                    <button onClick={this.pause} className="mr-3">pause</button>
                    <button onClick={this.changeCurrentTime(30)} className="mr-3">+30</button>
                    <button onClick={this.changeCurrentTime(-30)} className="mr-3">-30</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div>
        )
      }
}
export default Stream;