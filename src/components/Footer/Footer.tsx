import vk from "../../assets/SVG/Messangers/VK.svg";
import twitter from "../../assets/SVG/Messangers/Twiiter.svg";
import telegram from "../../assets/SVG/Messangers/Telegram.svg";
import apple from "../../assets/SVG/Apps/Apple.svg";
import google from "../../assets/SVG/Apps/Google.svg";
import style from "./Footer.module.scss";
import Image from "next/image";
import React from "react";
import { FormattedMessage } from "react-intl";
import { BsEnvelope, BsMegaphone, BsTelephone } from "react-icons/bs";
import MyButton from "../UI/MyButton/MyButton";

/** Component Footer */
const Footer = () => {
    return (
        <footer className={style.Footer}>
            <div className={style.Footer__about}>
                <div className="Footer__company">
                    <h4>
                        <FormattedMessage id="AboutUs" />
                    </h4>
                    <p>
                        <FormattedMessage id="AboutCompany" />
                    </p>
                    <p>
                        <FormattedMessage id="ProgrammBetaTesting" />
                    </p>
                    <p>
                        <FormattedMessage id="InformationForPartners" />
                    </p>
                    <p>
                        <FormattedMessage id="AdvertisingPlacement" />
                    </p>
                    <p>
                        <FormattedMessage id="TermsOfUse" />
                    </p>
                    <p>
                        <FormattedMessage id="PrivacyPolicy" />
                    </p>
                    <p>
                        <FormattedMessage id="Compliance" />
                    </p>
                </div>
                <div className={style.Footer__sections}>
                    <h4>
                        <FormattedMessage id="Section" />
                    </h4>
                    <p>
                        <FormattedMessage id="MyIvi" />
                    </p>
                    <p>
                        <FormattedMessage id="WhatNew" />
                    </p>
                    <p>
                        <FormattedMessage id="Films" />
                    </p>
                    <p>
                        <FormattedMessage id="Serials" />
                    </p>
                    <p>
                        <FormattedMessage id="Cartoons" />
                    </p>
                    <p>TV+</p>
                    <p>
                        <FormattedMessage id="WhatToSee" />
                    </p>
                    <span className={style.Footer__span}>
                        <FormattedMessage id="CertificateActivation" />
                    </span>
                </div>
                <div className={style.Footer__service}>
                    <h4>
                        <FormattedMessage id="Support" />
                    </h4>
                    <p>
                        <FormattedMessage id="WeAreAlwaysReadyToHelpYou" />
                        <br />
                        <FormattedMessage id="OurOperatorsAreOnline" />
                    </p>
                    <MyButton type="footer">
                        <FormattedMessage id="WriteInChat" />
                    </MyButton>
                    <div className={style.Footer__buttons}>
                        <MyButton type="footer" size="mini">
                            <BsTelephone/>
                        </MyButton>
                        <MyButton type="footer" size="mini">
                            <BsEnvelope/>
                        </MyButton>
                    </div>
                    <h4>ask.ivi</h4>
                    <p>
                        <FormattedMessage id="AnswersOnQuestions" />
                    </p>
                </div>
                <div className={style.Footer__advertising}>
                    <div className={style.Footer__square}>
                        <BsMegaphone/>
                    </div>
                    <div>
                        <p>
                            <FormattedMessage id="WatchMovies" />
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.Footer__apps}>
                <div className={style.Apps}>
                    <MyButton size="large" type="footer">
                        <Image alt="" src={apple} />
                        <div>
                            <p>
                                <FormattedMessage id="DownloadIn" />
                            </p>
                            <span>App Store</span>
                        </div>
                    </MyButton>
                    <MyButton size="large" type="footer">
                        <Image alt="" src={google} />
                        <div>
                            <p>
                                <FormattedMessage id="AvailableIn" />
                            </p>
                            <span>Google Play</span>
                        </div>
                    </MyButton>
                </div>
                <div className={style.Social}>
                    <MyButton type="footer" figure="circle">
                        <Image alt="" src={vk} />
                    </MyButton>
                    <MyButton type="footer" figure="circle">
                        <Image alt="" src={twitter} />
                    </MyButton>
                    <MyButton type="footer" figure="circle">
                        <Image alt="" src={telegram} />
                    </MyButton>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
