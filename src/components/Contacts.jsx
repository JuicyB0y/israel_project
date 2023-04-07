import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Contacts.module.scss';

import logo from '../assets/Logo_white.png';
import insta from '../assets/insta_white.svg';
import telegram from '../assets/telegram_white.svg';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.form__wrapper}>
      <div className={styles.form__element}>
        <h4 className={styles.form__contact}>{t('form_contact')}</h4>
        <div className={styles.form__discuss}>{t('form_discuss')}</div>
        <div className={styles.form__email}>{t('form_email_work')}</div>
        <div className={styles.form__phone}>{t('form_phone')}</div>

        <a className={styles.contactImg} href="https://instagram.com/designisraell?igshid=YmMyMTA2M2Y=" target="_blank">
          <img src={insta} alt="image" />
          <p>design_israel</p>
        </a>
        <Link className={styles.contactImg} to="#">
          <img src={telegram} alt="image" />
          <p>design_israel</p>
        </Link>

        <div className={styles.form__coop}>{t('form_cooperation')}</div>
        <div className={styles.form__email}>{t('form_email_work')}</div>
      </div>
      <div className={styles.form__bottom}>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
