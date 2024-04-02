import React from 'react'
import '../style/home2204.css'
import Button from '@material-ui/core/Button';
import jsontext from '../texts/Global.json'
import { GiCardAceClubs } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";

import { IoGameController } from "react-icons/io5";
import { RiGamepadFill } from "react-icons/ri";
import { RiGameFill } from "react-icons/ri";

const CallToActionTop = () => {

  const TopLeftCallToAction = [
    { id: 1, label: jsontext.topcta.howtoplay, icon: <GiCardAceClubs id='icon-01style' style={{marginRight: 8}}/>  },
    { id: 2, label: jsontext.topcta.aboutus, icon: <FaInfoCircle id='icon-01style' style={{marginRight: 8}}/>  },
    { id: 3, label: jsontext.topcta.contact, icon: <RiContactsFill id='icon-01style' style={{marginRight: 8}}/>  }
  ];
  const SignInSignUp = [
    {id: 1, label: <><RiGameFill style={{marginRight: 8}}/> {jsontext.topcta.signin}</>, onClick: ()=>{
        alert("hello")
    } },
    {id: 2, label: <><IoGameController style={{marginRight: 8}}/> {jsontext.topcta.signup}</>, onClick: ()=>{
        alert("hello")
    }},
  ]
  return (<div id='call-to-action-customer-service'>
    <div id='cta-left'>
      {TopLeftCallToAction.map(button => (
        <><button key={button.id} id='btn-cta-01'>
          <div>{button.icon}</div>
          <div>{button.label}</div>
        </button></>
      ))}
    </div>
    <div id='cta-right'>
      {SignInSignUp.map(btndata =>(
        <><Button key={btndata.id} id='btn-cta-02' onClick={btndata.onClick}>{btndata.label}</Button></>
      ))}
    </div>
  </div>)
}

export default CallToActionTop