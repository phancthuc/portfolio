import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

class App extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		hover: false
  	}
  }

  toggleHover() {
  	this.setState({hover: !this.state.hover})
  }

  render(){

      var linkStyle={
        color:'black',
        opacity: '0.6',
        fontWeight: '900',
        textTransform: 'uppercase',
        margin: '10px',
        fontSize: '10px',
        lineHeight: '28px',
        height: '30px',
        width: '100px',
        textAlign: 'center',
        padding: '5px',
      };
      var homeStyle={
        color:'black',
        opacity: '0.6',
        fontWeight: '900',
        textTransform: 'uppercase',
        margin: '10px',
        fontSize: '10px',
        lineHeight: '28px',
        height: '30px',
        width: '50px',
        textAlign: 'center',
        padding: '5px',
      };
      return (
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" scroll>
                <img src="/images/logotitle.png"/>
                  <Navigation>
                      <Link className="btn-hover color-1 home-btn" style={homeStyle} to="/">
                        <i className=" fa fa-home icon" style={{fontSize: '20px', lineHeight: '30px'}} rel="noopener noreferrer" aria-hidden="true"/>
                      </Link>
                      <Link className="btn-hover color-1" style={linkStyle} to="/resume">Resume</Link>
                      <Link className="btn-hover color-1" style={linkStyle} to="/aboutme">About Me</Link>
                      <Link className="btn-hover color-1" style={linkStyle} to="/projects">Projects</Link>
                      <Link className="btn-hover color-1" style={linkStyle} to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
        </div>
      );
    }
}

export default App;
