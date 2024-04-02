import React from 'react'
import { IoPhonePortrait } from "react-icons/io5";
import { RiAndroidFill } from "react-icons/ri";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Button from '@material-ui/core/Button';
import jsontext from '../texts/Global.json'
import { FaApple } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Button02 = () => {
  return ( <div id="btnhot01">
   
  <div style={{fontSize:'20px', fontWeight:'bold', padding: '20px', color: 'transparent'}}>
      {jsontext.header_text.TrendHot} <FaFireAlt />!
  </div>
  <Button id="btn010102">
      <div><BsGlobeCentralSouthAsia id="iconsizetop" /></div>
      <div id="leftbtn0202">
      <div id="ftop01">{jsontext.header_text.WebVersionLink}</div>
      <div>{jsontext.header_text.WebVersionLinkSupport01}</div>
      </div>
  </Button>

  <Button id="btn0102">
      <div><IoPhonePortrait style={{fontSize:'45px'}} id="iconsizetop01" /></div>
      <div id="leftbtn0202">
        <div style={{fontSize: '17px'}} >{jsontext.header_text.Webv01}</div>
      </div>
  </Button>

  <Button id="btn0102">
      <div><BiLogoPlayStore id="iconsizetop01" /></div>
      <div id="leftbtn0202">
      <div id="ftop0101">{jsontext.header_text.WebVersionLink}</div>
      <div>{jsontext.header_text.WebVersionLinkSupport01}</div>
      </div>
  </Button>

  <Button style={{textAlign:'center', display:'grid'}} id="btn0102">
    <div style={{fontWeight:'bold', fontSize: '25px'}}>{jsontext.header_text.WebVersionLink}</div>
    <div>{jsontext.header_text.WebVersionLinkSupport01}</div>
  </Button>
</div>)
}

export default Button02