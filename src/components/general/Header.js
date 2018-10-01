import React, { Component } from 'react';
import { MdMenu } from 'react-icons/md';
import '../../styles/components/header.css';

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
          <p className="title-home opacity" onClick={()=>this.props.history.push('/dashborad')}>
            <span className="title-ligth">BOT </span>TRADING.
          </p>
        </div>
        <div className="items-header">
          <p className="items-text-header-active opacity" onClick={()=>this.props.history.push('/dashborad')}>HOME</p>
        </div>
        <div className="items-header">
          <p className="items-text-header opacity" onClick={()=>this.props.history.push('/')}>LOG OUT</p>
        </div>
        <div className="items-header-menu opacity" onClick={()=> this.setState({openMenu : !this.state.openMenu})}>
          <MdMenu size={30}/>
        </div>
      </div>
      {
        this.state.openMenu === true ?
        <div className="header-responsive">
          <p className="items-text-header-responsive opacity" onClick={()=>this.props.history.push('/dashborad')}>HOME</p>
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
