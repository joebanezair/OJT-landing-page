import { IoPhonePortrait } from "react-icons/io5";
import React from 'react'
import { RiAndroidFill } from "react-icons/ri";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Button from '@material-ui/core/Button';
import jsontext from '../texts/Global.json'
import { FaApple } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Button01 = () => {


return ( <div id="btnhot01">
<div style={{fontSize:'20px', fontWeight:'bold', padding: '20px', color: 'gold'}}>
    {jsontext.header_text.TrendHot} <FaFireAlt />!
</div>
<Button id="btn0101">
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
    <div><FaApple id="iconsizetop01" /></div>
    <div id="leftbtn0202">
    <div id="ftop0101">{jsontext.header_text.Apple}</div>
    <div>{jsontext.header_text.AppleBot}</div>
    </div>
</Button>

<Button id="btn0102">
    <div><FaCloudDownloadAlt id="iconsizetop01" /></div>
    <div id="leftbtn0202">
    <div id="ftop0101">{jsontext.header_text.Android}</div>
    <div>{jsontext.header_text.AndroidBot}</div>
    </div>
</Button>

<div style={{fontSize:'15px', fontWeight:'normal', paddingLeft: '20px', paddingTop: '0px', color: 'gold'}}>
  {jsontext.header_text.Bbot}  
</div>
</div>)
}

export default Button01