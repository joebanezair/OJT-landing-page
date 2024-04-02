import React from 'react'
import Button from '@material-ui/core/Button';
import jsontext from '../texts/Global.json';
import { BsTranslate } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoBookmarks } from "react-icons/io5";

const NavigationBar = () => {

  const homepageGlossary = [
    {id: 1, label: <><GoHomeFill id='iconnav'/> {jsontext.header_text.home}</>},
    {id: 2, label: <><IoBookmarks id='iconnav'/> {jsontext.header_text.glossary}</> }
  ]

  return (
    <div id='cta-navigation-container'>
     <div id='ctalogo-home'>
       <div id='ctabtn-home'>
         <div id='home-icon'></div>
         <div id='home-text'>{jsontext.header_text.home}</div>
       </div>
     </div>
     <div id='ctaothercomponents'>
      <div id='btncontainer'>
        {homepageGlossary.map(btndata =>(
          <button key={btndata.id} id='ctabtnright02'>
          {btndata.label} 
          </button>
        ))}
      </div>
     </div>
    </div>
  )
}

export default NavigationBar