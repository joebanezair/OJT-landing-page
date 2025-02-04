import React, { Component } from 'react';
import './view/style/tutorial.css';
import TemporaryDrawer from './TemporaryDrawer';
import logo from './source/logo.png';
import NavigatorJudge from './utils/navigatorJudge';
import createAppleIDImage from './md/source/create_apple_id.png';
import checkAppleIDImage from './md/source/img_web_two.png';
import nextPageImage from './md/source/img_web_three.png';
import editImage from './md/source/img_web_four.png';
import replaceCountryImage from './md/source/img_web_five.png';
import payWayImage from './md/source/img_web_six.png';
import searchLaiWanImage from './md/source/img_web_seven.png';
import h5Version1 from './page/home/image/btn-h-5-blue.png';
import h5Version2 from './page/home/image/btn-h-5-green.png';
import {
    h5_version_url_1 as h5VersionUrl1,
    h5_version_url_2 as h5VersionUrl2,
} from './config.json';

export default class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    componentDidMount() {
        if (document.location.toString().indexOf('tutorial/') === -1) {
            document.location.href += '/';
            document.location.reload();
            return;
        }
        this.setState({ show: true });
    }

    _renderPcNavigator = () => (
        <div className="tutorial_navigation_bar">
            <div className="row_center">
                <a href="/" label="laiwan">
                    <img src={logo} className="tutorial_logo" alt="logo" />
                </a>
                <a href="/" label="laiwan">
                    <p className="tutorial_nav_title">来玩</p>
                </a>
            </div>
            <div className="row_center">
                <a href="/">
                    <p className="tutorial_nav_subtitle">首页</p>
                </a>
                <a href="/glossary">
                    <p className="tutorial_nav_subtitle">德州术语表</p>
                </a>
            </div>
        </div>
    );

    render() {
        const { show } = this.state;

        if (!show) {
            return <div />;
        }

        return (
            <div>
                {NavigatorJudge.isMobile() ? (
                    <TemporaryDrawer className="temporary_drawer" />
                ) : (
                    this._renderPcNavigator()
                )}
                <div className="tutorial_content">
                    <div className="tutorial_container">
                        <p className="can_not_download_text">
                            &nbsp;&nbsp;&nbsp;&nbsp;苹果手机中国大陆账号暂时无法下载来玩，您可重新注册一个其他国
                            <br />
                            家或地区的苹果手机账号进行下载；也可不用下载，直接前往来玩的网页
                            <br />
                            版本进行娱乐。来玩网页版支持PC、苹果、安卓手机使用。
                            <br />
                            <br />
                            以下是来玩网页版地址，点击网页链接即可前往:
                        </p>
                        <div className="web_version">
                            <a href={h5VersionUrl1}>
                                <img
                                    className="web_button"
                                    src={h5Version1}
                                    alt="H5 版本一"
                                />
                            </a>
                            <a href={h5VersionUrl2}>
                                <img
                                    className="web_button"
                                    src={h5Version2}
                                    alt="H5 版本二"
                                />
                            </a>
                        </div>
                        <h2>一、注册一个新的AppleID并下载来玩 </h2>
                        <h4>
                            电脑打开网页：
                            <a href="https://appleid.apple.com/">
                                https://appleid.apple.com/
                            </a>
                            拉至页面底部，创建新的Apple ID
                        </h4>
                        <img src={createAppleIDImage} alt="laiwan" />
                        <h4>
                            按照注册要求填写好信息。（注意自己记录一下注册时填写的安全问题）
                        </h4>
                        <h4>
                            如果Apple
                            ID无法正常注册，可能是网络问题，请切换网络或者开关飞行模式后尝试
                        </h4>
                        <h2>二、在IOS设备的AppStore上登陆</h2>
                        <h4>
                            将刚刚注册好的中国大陆地区Apple
                            ID在你iOS设备上的AppStore上登录
                        </h4>
                        <h4>
                            在AppStore中输入新注册好的账号、密码。因为新账号第一次登录AppStore，在
                            点击登录后会弹出检查弹窗，点击【检查】如下图：
                        </h4>
                        <img src={checkAppleIDImage} alt="check_apple_id" />
                        <h4>选择付款方式为【无】然后点击【下一页】</h4>
                        <img src={nextPageImage} alt="next_page" />
                        <h4>完成后，将新账号退出登陆</h4>
                        <h2>三、切换国家</h2>
                        <h4>
                            再次打开网页：
                            <a href="https://appleid.apple.com/">
                                https://appleid.apple.com
                            </a>
                        </h4>
                        <h4>登陆刚刚注册好的账号，点击右上角【编辑】</h4>
                        <img src={editImage} alt="edit_page" />
                        <h4>
                            国外地址生成工具：
                            <a href="https://shenfendaquan.com/Index/index/meiguo_zhenshi_dizhi">
                                https://shenfendaquan.com
                            </a>
                        </h4>
                        <h4>
                            <p>
                                将国家和地区更改成美国，
                                并填入对应信息。信息可以根据上方国外地址生成工具获取
                            </p>
                        </h4>
                        <h4>
                            {' '}
                            选择好要更改的国家或地区后，会有下图的弹窗，点击【继续更新】
                        </h4>
                        <img src={replaceCountryImage} alt="replace_country" />
                        <h4>然后就可以直接将付款方式选择为【无】</h4>
                        <img src={payWayImage} alt="pay_way" />
                        <h4>
                            最后剩下的信息按照提前准备好的地址信息填写好就可以了,然后点击右上角的【存储】
                        </h4>
                        <h2>四、下载来玩【GoPlay360】</h2>
                        <h4>
                            登录新注册的Apple
                            ID，这时的AppStore会转换为对应国家的语言。
                        </h4>
                        <h4>
                            在搜索栏目搜索【GoPlay360】，点击【GET】进行下载
                        </h4>
                        <h4>
                            <p>
                                注意：如果您之前用中国区大陆账号下载过【来玩】，请卸载后重新安装
                            </p>
                        </h4>
                        <img src={searchLaiWanImage} alt="search_laiwan" />
                    </div>
                </div>
            </div>
        );
    }
}
