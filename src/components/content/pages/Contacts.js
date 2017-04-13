import React from 'react';
import FaOdnoklassnikiSquare from 'react-icons/lib/fa/odnoklassniki-square';
import FaOdnoklassniki from 'react-icons/lib/fa/odnoklassniki';
import FaVk from 'react-icons/lib/fa/vk';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaWhatsapp from 'react-icons/lib/fa/whatsapp';

export const Contacts = () => (
    <div className="page-contacts content-card flex-row">
        <div className="content-card__caption flex-column">
            <span>КОНТАКТЫ</span></div>
        <div className="content-card__body flex-column">

          <div className="bg-map">
            <div className="contacts-info__wrapper">
              <div className="contacts-info">
                <h3 className="info-title">ОФИС</h3>
                <ul className="info-info">
                  <li>г.Барнаул,</li>
                  <li>пр-т. Социалистический, д.109, оф.301</li>
                </ul>
                <h3 className="info-title">ТЕЛЕФОНЫ</h3>
                <ul className="info-info">
                  <li>8-800-222-2923</li>
                  <li>8-929-395-10-95</li>
                  <li>8 (3852) 56-77-46</li>
                </ul>
                <h3 className="info-title">СОЦ.СЕТИ</h3>
                <ul className="info-info">
                  <li><a href="https://www.ok.ru/group/53606579962094" target="blank"><FaOdnoklassnikiSquare size={26}/>Одноклассники</a></li>
                  <li><a href="https://vk.com/chistodacom" target="blank"><FaVk size={26} />В Контакте</a></li>
                  <li><a href="https://www.instagram.com/chistoda22" target="blank"><FaInstagram size={26} />Инстаграм</a></li>
                  <li><FaWhatsapp size={26} /></li>
                </ul>
                <h3 className="info-title">ПОЧТА</h3>
                <ul className="info-info">
                  <li><a href="mailto:info@chistoda.com" target="blank">info@chistoda.com</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
    </div>
);