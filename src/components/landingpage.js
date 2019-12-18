import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>

        <Grid className="landing-grid">

          <Cell col={12}>
            <div clasName="image-cropper">
              <img
                src="/images/profilepic.png"
                alt="avatar"
                className="avatar-img"
                />
            </div>
            <div className="banner-text">
              <h1>Thuc Phan</h1>
              <h2>UC San Diego Computer Science Student</h2>
              <hr/>
              <p> Swift | C++ | Java | React | HTML/CSS</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/thuc-phan-b22931126/" target="_blank">
                  <i className=" fa fa-linkedin icon" rel="noopener noreferrer" aria-hidden="true"/>
                </a>
                <a href="https://github.com/phancthuc" target="_blank">
                  <i className=" fa fa-github icon" rel="noopener noreferrer" aria-hidden="true"/>

                </a>
                <a href="https://www.youtube.com/channel/UCkhNghzgGAUC6C8WvWl8fAQ" target="_blank">
                  <i className=" fa fa-youtube icon" rel="noopener noreferrer" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >
      </div>
    )
  }
}
export default LandingPage;
