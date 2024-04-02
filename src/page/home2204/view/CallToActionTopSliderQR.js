import React from 'react'
import jsontext from '../texts/Global.json'

const CallToActionTopSliderQR = () => {
  return (<>
    <div id='ctaqrslider-container'>
      <div id='ctaqrslider-content01'>
        <div id='slider-container'>
          <div id='slider-content'>
            <div id='banner' />             
            <div id='phone-container'/>
          </div>
        </div>
        <div id='qr-container'>
          <div id='qrcodeView'></div>
          <div id='qrtext'>{jsontext.header_text.scanqrcode}</div>
        </div>
      </div>
      <div id='talkinghappycontainer'>
        <div id='happyimg'/>
        <div id='left-hello'>{jsontext.header_text.Hello}</div>
      </div>
    </div>
  </>)
}

export default CallToActionTopSliderQR