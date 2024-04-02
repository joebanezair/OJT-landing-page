import { MdDesktopMac } from "react-icons/md";
import { RiAndroidFill } from "react-icons/ri";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Button from '@material-ui/core/Button';
import React from 'react'
import jsontext from '../texts/Global.json'
import { FaApple } from "react-icons/fa";
import Button01 from "./Button01";
import Button02 from "./Button02";

const DownloadPage = () => {
  return (<>
   <div id='hello-banner'>
     <div style={{textAlign: 'center', paddingBottom: '30px'}}>
      <div id='header01'>{jsontext.header_text.Holdem}</div>
      <div id='header02'>{jsontext.header_text.HoldemBot}</div>
     </div>
     <div id='hellowbtns'>
       <div style={{margin: 'auto', width:'fit-content', display: 'flex', gap: '20px'}}>
        <Button01 />
        <Button02 />
       </div>
     </div>
   </div>
  </>)
}

export default DownloadPage