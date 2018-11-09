import React from 'react';
import HeaderContainer from './HeaderContainer';
import Option from './Option';
import Title from '../general/Title';
import { MENU } from '../../constants';

// <div className="items-header-menu opacity" onClick={()=> this.setState({openMenu : !this.state.openMenu})}>
//   <MdMenu size={30}/>
// </div>

// {
//   this.state.openMenu === true ?
//   <div className="header-responsive">
//     <p className="items-text-header-responsive opacity" onClick={()=>this.props.history.push('/dashboard')}>HOME</p>
//     <Link
//       to="settings"
//     >
//       SETTINGS
//     </Link>
//     <p className="items-text-header-responsive opacity" onClick={()=>this.props.history.push('/')}>LOG OUT</p>
//   </div>
//   :
//   null
// }

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      openMenu: false
    };
  }

  render() {
    return (
      <div>
        <HeaderContainer>
          <Title
            link="dashboard"
            mediumFont={true}
            opacity={true}
            textTransform="uppercase"
            thickText="trading"
            thinText="bot"
          />
          {
            MENU.map((option, key) => {
              return (
                <Option
                  key={key}
                  active={this.props.selectedOption === option.route}
                  opacity={true}
                  route={option.route}
                  text={option.text}
                />
              )
            })
          }
        </HeaderContainer>
      </div>
    );
  }
}

export default Header;
