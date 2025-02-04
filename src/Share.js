/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import axios from 'axios';
import './view/style/mobile.css';
import logo from './source/logo.png';
import config from './config.json';
import googleStore from './source/btn_googel.png';
import local from './source/btn_local_download.png';
import getAndroidVersion from './utils/GetAndroidVersion';
import wechatPrompt from './source/img-prompt.png';
import {
    androidStagingUrl, androidProductionUrl, googleStoreLink,
} from './constant/Constant';
import DownloadModalForIOS from './page/home/view/DownloadIOSModal';

export default class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localLink: '',
            isPhone: false,
            isWechatBrowser: false,
        };
    }

    async componentDidMount() {
        this._isWechatBrowser();
        const url = window.location.href;
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (url.indexOf('share') !== -1) {
            if (/(iPhone|iPad|iPod|iOS)/i.test(userAgent)) {
                this.setState({ isPhone: true });
            }
        }
        const localLink = await this._getAndroidAddress();
        this.setState({ localLink });
    }

    _isWechatBrowser = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('micromessenger') !== -1) {
            this.setState({ isWechatBrowser: true });
        }
    }

    _isAvailableAndroidVersion = () => {
        const version = getAndroidVersion();
        if (version[0] > 7) {
            return true;
        }
        if (version[0] >= 7 && version[2] >= 1) {
            return true;
        }
        return false;
    }

    _getAndroidAddress = () => {
        try {
            let url = '';
            if (config.server_type === 'staging') {
                url = androidStagingUrl;
            } else {
                url = androidProductionUrl;
            }
            return new Promise((reslove) => {
                axios(url).then((res) => {
                    if (res.data.ok) {
                        reslove(res.data.result.download_url);
                    } else {
                        console.log('请求地址失败');
                    }
                });
            });
        } catch (error) {
            return new Error(error);
        }
    }

    _renderNavigationBar = () => (
        <div className="mobile_navigation_bar">
            <div className="mobile_row_center">
                <img src={logo} className="mobile_logo" />
                <p className="mobile_nav_title">来玩</p>
            </div>
        </div>
    )

    _renderTitleContet = () => (
        <div className="mobile_title_content">
            <p className="mobile_title">来玩APP</p>
            <p className="mobile_title">德州扑克约局神器</p>
            <p className="mobile_title">斗地主私人房间</p>
        </div>
    )

    _renderDownloadContent = () => {
        const { isPhone, localLink } = this.state;
        return (
            <div className="mobile_download_content">
                <div className="mobile_img_content">
                    {isPhone ? (
                        <DownloadModalForIOS />
                    ) : null}
                    {!isPhone ? (
                        <a href={googleStoreLink}>
                            <img src={googleStore} />
                        </a>
                    ) : null}
                    {!isPhone ? (
                        <a href={localLink}>
                            <img src={local} />
                        </a>
                    ) : null}
                </div>
            </div>
        );
    }

    _renderWechatPrompt = () => (
        <div className="wechat_prompt">
            <img src={wechatPrompt} />
        </div>
    )

    render() {
        const { isWechatBrowser } = this.state;
        return (
            <div className="page">
                { !isWechatBrowser ? this._renderNavigationBar() : this._renderWechatPrompt()}
                <div className="mobile_download">
                    {this._renderTitleContet()}
                    {!isWechatBrowser ? this._renderDownloadContent() : null}
                </div>
            </div>
        );
    }
}
