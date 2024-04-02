import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import React from 'react';

const BottomSocialMedia = () => {
  const SocialData = [
    { id: 1, label: 'Youtube', icon: <FaYoutube /> },
    { id: 2, label: 'Twitter', icon: <FaSquareXTwitter /> },
    { id: 3, label: 'Reddit', icon: <FaReddit /> },
    { id: 4, label: 'Facebook', icon: <FaFacebook /> },
    { id: 5, label: 'Instagram', icon: <RiInstagramFill /> }
  ];

  return (
    <>
     <div id="socialborder0102">
      <div style={{display: 'flex',  width: 'fit-content', margin:'auto', gap: '10px', padding: '10px'}}>
        {SocialData.map(item => (
          <div style={{color: 'white', display: 'flex', gap: '10px', fontSize: '20px', fontWeight: 100}} key={item.id}>
            <div style={{marginTop: '3.5px'}}>{item.icon}</div>
            <div id="onclickiesocial">{item.label}</div>
          </div>
        ))}
      </div>
     </div>
    </>
  );
};

export default BottomSocialMedia;
