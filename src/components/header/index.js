import React, { Component } from 'react';
import { MdMenu } from 'react-icons/md';
import '../../styles/components/header.css';
import { Link } from "react-router-dom";
import MenuOption from './MenuOption';
import { MENU } from '../../constants';

class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      openMenu: false
    }
  }
  render(){
    return (
    <div history={this.props.history}>
      <div className="header-container">
        <div className="items-header">
          <p className="title-home opacity" onClick={()=>this.props.history.push('/dashboard')}>
            <span className="title-ligth">BOT </span>TRADING.
          </p>
        </div>
          {
            MENU.map((option, key) => {
              return (
                <MenuOption
                  text={option.text}
                  route={option.route}
                  key={key}
                />
              )
            })
          }
        <div className="items-header-menu opacity" onClick={()=> this.setState({openMenu : !this.state.openMenu})}>
          <MdMenu size={30}/>
        </div>
      </div>
      {
        this.state.openMenu === true ?
        <div className="header-responsive">
          <p className="items-text-header-responsive opacity" onClick={()=>this.props.history.push('/dashboard')}>HOME</p>
          <Link
            to="settings"
          >
            SETTINGS
          </Link>
          <p className="items-text-header-responsive opacity" onClick={()=>this.props.history.push('/')}>LOG OUT</p>
        </div>
        :
        null
      }
    </div>
  )
}
}
export default Header
