import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import closeIcon from '../assets/close.png';
import logo from '../assets/logo.png';

import styles from './PopUp.module.scss';

const Popup = ({ setOpened, opened }) => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <div className={cn(styles.overlay )}> */}
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        {/* <div className={styles.overlay}> */}
        <div className={styles.drawer}>
          <div className={styles.top}>
            <img onClick={() => setOpened(false)} className={styles.top_closeIcon} src={closeIcon} alt="closeIcon" />
            <div className={styles.top_logo}>
              <img src={logo} alt="logo" />
              <NavLink to="/" onClick={() => setOpened(false)}>
                DESIGN ISRAEL
              </NavLink>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.middle_top}>
              <NavLink to="/services" onClick={() => setOpened(false)} className={styles.middle_services}>
                Services
              </NavLink>
              <NavLink to="/cases" onClick={() => setOpened(false)} className={styles.middle_services}>
                Cases
              </NavLink>
            </div>
            <hr />
            <div className={styles.middle_left}>
              <Link to="/animation" onClick={() => setOpened(false)}>
                {t('popup_2dan')}
              </Link>
              <Link to="/animation" onClick={() => setOpened(false)}>
                {t('popup_3dan')}
              </Link>
              <Link to="/3dvisualization" onClick={() => setOpened(false)}>
                {t('popup_3d')}
              </Link>
              <Link to="/logos" onClick={() => setOpened(false)}>
                {t('popup_logos')}
              </Link>
              <Link to="/logos" onClick={() => setOpened(false)}>
                {t('popup_corp')}
              </Link>
              <Link to="/retouching" onClick={() => setOpened(false)}>
                {t('popup_photo')}
              </Link>
              <Link to="/webdevelopment" onClick={() => setOpened(false)}>
                {t('popup_web')}
              </Link>
            </div>
            {/* <div className={styles.middle_center}>
              <div>{t('popup_agency')}</div>
              <div>{t('popup_career')}</div>
              <div>{t('popup_reviews')}</div>
            </div> */}
            <div className={styles.middle_right}>
              <div className={styles.middle_project}>{t('popup_discuss')}</div>
              <div className={styles.middle_mail}>{t('form_email_work')}</div>
              <div className={styles.middle_phone}>{t('form_phone')}</div>
              <a href="#" className={styles.button}>
                {t('header_client')}
              </a>
              <div className={styles.middle_cooperation}>{t('popup_coop')}</div>
              <div className={styles.middle_lastmail}>{t('form_email_work')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
