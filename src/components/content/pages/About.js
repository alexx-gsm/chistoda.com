import React from 'react';
import { NavLink } from 'react-router-dom';

export const About = (quickMenu) => {
console.log(quickMenu.price);
  return (
    <div className="page-about content-card flex-row">
      <div className="content-card__caption flex-column">
        <span>О КОМПАНИИ</span>
      </div>
      <div className="content-card__body flex-column">
        <h2 className="page-title">О КОМПАНИИ</h2>
        {/*<!--START SCROLL -->*/}
        <div className="scrolled-content">
          <p className="page-paragraph">
            «ЧистоДА» - это молодая, динамично развивающаяся, клининговая компания. Выполняем различные виды клининговых
            услуг и всегда открыты для сотрудничества как с физическими, так и с юридическими лицами. Качество нашей
            работы, индивидуальный подход к клиенту вас приятно удивят!
            Квалифицированный штат наших сотрудников выполнит работу различного уровня сложности независимо от материала
            и площади качественно и в срок! Вы останетесь довольны!
          </p>
          <p className="page-paragraph">
            Сегодня, планируя масштабную уборку любого помещения, без услуг профессиональной компании почти не обойтись.
            Ведь клининговая компания гарантирует вам качество, экономию времени и средств. Мы работаем, а вы отдыхаете!
            Для начала сотрудничества вам достаточно оставить заявку на сайте или по телефону 56-77-46 и ознакомить нас
            с фронтом работ. У нас работают надежные люди, а в уборке используется профессиональное оборудование и
            безопасные химические средства. Мы за чистые жизненные пространства!
            Предлагаемый нами спектр клининговых услуг может быть расширен по индивидуальному заказу клиента.
          </p>

          <div className="page-section">
            <h3>Основные виды деятельности</h3>
            <p className="list-title">Уборка:</p>
            <ul className="page-list">
              <li>помещений (поддерживающая, генеральная, после ремонта, после строительства)</li>
              <li>прилегающей территории</li>
              <li>офисов</li>
              <li>квартир</li>
              <li>домов, коттеджей, таунхаусов</li>
            </ul>
            <p className="list-title">Мойка:</p>
            <ul className="page-list">
              <li>витражей</li>
              <li>окон</li>
              <li>стекла</li>
            </ul>
            <p className="list-title">Стрижка газонов</p>
            <ul className="page-list">
              <li>электрические газонокосилки</li>
              <li>бензиновые газонокасилки</li>
            </ul>
            <p className="list-title">Другое (по договоренности)</p>
            <ul className="page-list">
              <li>Список предоставляемых услуг постоянно расширяется</li>
              <li>Звоните! Договоримся!</li>
            </ul>
          </div>
          <div>
            <p className="page-paragraph">Сегодня, потребность в клининговых услугах это необходимость для многих
              физических и юридических лиц, ведь строятся новые торговые центры, здания, открываются торговые площадки,
              появляютмя новые строительные материалы, требующие профессионального подхода. Бешеный ритм современной
              жизни оставляет совсем немного времени для приятного отдыха, а времени на качественную уборку своего дома
              порой не остается вовсе. Мы та компания, которая готова помочь вам в любых жизненных ситуациях!</p>
            <p className="page-paragraph">Мы работаем с различными помещениями. Это может быть, как небольшая или
              просторная квартира, офис, бизнес-центр или дом. Осуществляем уборку различных территорий, а именно
              дворов, парков, скверов, тротуаров, детских и спортивных площадок, в том числе стрижку газонов. Также в
              наши услуги входит чистка стекол, окон, витражей, зеркал с помощью профессионального оборудования. В
              зимнее время необходимо очищать территорию от снега и наледи. При помощи мощных, но безопасных
              антигололедных реагентов мы качественно очистим тротуарную плитку, дорожки и тому подобно по вашей
              заявке.</p>
            <p className="page-paragraph">Ознакомьтесь с прайсом наших услуг. Мы ориентированы на клиента и
              заинтересованы оказывать услуги качественно, оперативно и по доступным ценам.</p>
          </div>

          <div className="quick-access">
            <ul className="quick-access__list">
              {/*<li><NavLink activeClassName="active" to={quickMenu.price}>ПРАЙС</NavLink></li>*/}
              <li><NavLink to='/prices'>ПРАЙС</NavLink></li>
              <li><NavLink to='/feedbacks'>ОТЗЫВЫ</NavLink></li>
              <li><NavLink to='/done'>НАША РАБОТА</NavLink></li>
              <li><NavLink to='/contacts'>КОНТАКТЫ</NavLink></li>
            </ul>
          </div>

        </div>
        {/* <!--END SCROLL -->*/}
      </div>
    </div>

  )
};
