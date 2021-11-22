<template>
  <div class="">
    <Header :showBreadcrumbs="false" :breadcrumbsHeader="''" :breadcrumbsItems="[]" />
    <div class="pageContent">
      <div class="aboutService">
        <span class="aboutServiceHeader">
          Платформа для создания сайтов
        </span>
        <div >
          {{
            reCaptcha
          }}
        </div>
        <span class="aboutServiceDesc">
          Создайте сайт или блог, откройте интернет-магазин даже если вы этого не делали
        </span>
        <span class="createSite">
          Создать сайт
        </span>
      </div>
      <div class="offers">
        <div class="offer">
          <span class="offerHeader">
            Суперцена на .XYZ
          </span>
          <span class="offerDesc">
            Теперь всего 85 рублей!
          </span>
          <span class="selectDomain">
            Подключить
          </span>
        </div>
        <div class="offer">
          <span class="offerHeader">
            Суперцена на .XYZ
          </span>
          <span class="offerDesc">
            Теперь всего 85 рублей!
          </span>
          <span class="selectDomain">
            Выбрать домен
          </span>
        </div>
      </div>
      <div class="domainsRegister">
        <span class="domainsRegisterHeader">
          Регистрация доменов
        </span>
        <div class="domainsRegisterInfo">
          <span class="domainsRegisterInfoItem domainsRegisterInfoItemHeader">
            3 300 000 доменов на обслуживании, № 1 в России
          </span>
          <div class="domainsRegisterInfoItem">
            <span class="domainsRegisterInfoItemAction">
              Продлить
            </span>
            <span class="domainsRegisterInfoItemAction">
              Перенести в REG.RU
            </span>
            <span class="domainsRegisterInfoItemAction">
              Регистрация списком
            </span>
          </div>
        </div>
        <div class="input-group inputRailwayDatePicker">
          <input v-model="domain" type="text" placeholder="Введите домены или слово" class="form-control w-50" />
          <span  class="input-group-text btn btn-success" id="basic-addon1" @click="selectDomains()" >Подобрать</span>
        </div>
        <div class="domainsZones">
          <div class="domainZone">
            <input type="checkbox" v-model="domainsZones" />
            <label class="domainZoneLabel">
              .RU
            </label>
          </div>
          <div class="domainZone">
            <input type="checkbox" v-model="domainsZones" />
            <label class="domainZoneLabel">
              .РФ
            </label>
          </div>
          <div class="domainZone">
            <input type="checkbox" v-model="domainsZones" />
            <label class="domainZoneLabel">
              .COM
            </label>
          </div>
          <div class="domainZone">
            <input type="checkbox" v-model="domainsZones" />
            <label class="domainZoneLabel">
              .РУС
            </label>
          </div>
          <div class="domainZone">
            <input type="checkbox" v-model="domainsZones" />
            <label class="domainZoneLabel">
              .MOSCOW
            </label>
          </div>
          <div class="domainZone">
            <input type="checkbox" v-model="domainsZones" />
            <label class="domainZoneLabel">
              .ORG
            </label>
          </div>
          <div class="domainZone">
            <input type="checkbox" v-model="domainsZones" />
            <label class="domainZoneLabel">
              .XYZ
            </label>
          </div>
          <div class="domainZone">
            <input type="checkbox" v-model="domainsZones" />
            <label class="domainZoneLabel">
              .SHOP
            </label>
          </div>
          <div class="domainZone">
            <label class="domainZoneLabel">
              еще 742 зоны
            </label>
          </div>
        </div>
        <div class="domainsActions">
          <div class="domainsAction notLastDomainsAction">
            <span class="domainsActionHeader">
              Скидки до 97%
            </span>
            <span class="domainsActionContent">
              Актуальные акции
            </span>
          </div>
          <div class="domainsAction notLastDomainsAction">
            <span class="domainsActionHeader">
              Бесплатно
            </span>
            <span class="domainsActionContent">
              SSL-сертификат к домену и хостингу
            </span>
          </div>
          <div class="domainsAction">
            <span class="domainsActionHeader">
              Подарок
            </span>
            <span class="domainsActionContent">
              с каждым доменом
            </span>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
      <div class="carousel">

      </div>
      <div>

      </div>
      <div class="weAreSimple">
        <span class="weAreSimpleHeader">
          Почему мы? Это просто
        </span>
        <div class="weAreSimpleContent">
          <div class="weAreSimpleContainer">
            <div class="weAreSimpleContentItem">
              <span class="weAreSimpleContentItemHeader">
                №1
              </span>
            </div>
            <span>
              регистратор и хостинг - провайдер в России
            </span>
          </div>
          <div class="weAreSimpleContainer">
            <div class="weAreSimpleContentItem">
              <span class="weAreSimpleContentItemHeader">
                39 млн
              </span>
            </div>
            <span>
              оказанных услуг
            </span>
          </div>
          <div class="weAreSimpleContainer">
            <div class="weAreSimpleContentItem">
              <span class="weAreSimpleContentItemHeader">
                3.3
              </span>
            </div>
            <span>
              млн доменов на обслуживании
            </span>
          </div>
          <div class="weAreSimpleContainer">
            <div class="weAreSimpleContentItem">
              <span class="weAreSimpleContentItemHeader">
                2.2
              </span>
            </div>
            <span>
              млн более 2.2 млн клиентов
            </span>
          </div>
          <div class="weAreSimpleContainer">
            <div class="weAreSimpleContentItem">
              <span class="weAreSimpleContentItemHeader">
                24/7
              </span>
            </div>
            <span>
              профессиональная поддержка
            </span>
          </div>
        </div>
      </div>
      <div id="carouselExampleIndicators" class="ourClients carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="ourClientsItem">
              <span class="ourClientsItemHeader">
                Наши клиенты
              </span>
              <div class="ourClientsList">
                <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_mailru.svg" class="d-block w-100 ourClientsListItem" alt="mailru group" />
                <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_groupib.svg" class="d-block w-100 ourClientsListItem" alt="group ib" />
                <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_avito.svg" class="d-block w-100 ourClientsListItem" alt="avito" />
                <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_vdud.svg" class="d-block w-100 ourClientsListItem" alt="влудь" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <span class="ourClientsItemHeader">
              Наши клиенты
            </span>
            <div class="ourClientsList">
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_kasper.svg" class="d-block w-100 ourClientsListItem" alt="kaspersky" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_abbyy.svg" class="d-block w-100 ourClientsListItem" alt="abbyy" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_seven-airlines.svg" class="d-block w-100 ourClientsListItem" alt="s7 airlines" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_auchan.svg" class="d-block w-100 ourClientsListItem" alt="auchan retail" />
            </div>
          </div>
          <div class="carousel-item">
            <span class="ourClientsItemHeader">
              Наши клиенты
            </span>
            <div class="ourClientsList">
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_alfabank.svg" class="d-block w-100 ourClientsListItem" alt="альфа банк" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_gpm.svg" class="d-block w-100 ourClientsListItem" alt="гом ртв" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_europeplus.svg" class="d-block w-100 ourClientsListItem" alt="европа плюс" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_mosgortelecom.svg" class="d-block w-100 ourClientsListItem" alt="мосгор телеком" />
            </div>
          </div>
          <div class="carousel-item">
            <span class="ourClientsItemHeader">
              Наши клиенты
            </span>
            <div class="ourClientsList">
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_jooble.svg" class="d-block w-100 ourClientsListItem" alt="jooble" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_tilda.svg" class="d-block w-100 ourClientsListItem" alt="tilda publishing" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_invitro.svg" class="d-block w-100 ourClientsListItem" alt="инвитро" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_friday.svg" class="d-block w-100 ourClientsListItem" alt="Пятница" />
            </div>
          </div>
          <div class="carousel-item">
            <span class="ourClientsItemHeader">
              Наши клиенты
            </span>
            <div class="ourClientsList">
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_first-bit.svg" class="d-block w-100 ourClientsListItem" alt="первый бит" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_bankiru.svg" class="d-block w-100 ourClientsListItem" alt="банки ру" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_sovcombank.svg" class="d-block w-100 ourClientsListItem" alt="совком банк" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_rabotaru.svg" class="d-block w-100 ourClientsListItem" alt="работа ру" />
            </div>
          </div>
          <div class="carousel-item">
            <span class="ourClientsItemHeader">
              Наши клиенты
            </span>
            <div class="ourClientsList">
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_uesp.svg" class="d-block w-100 ourClientsListItem" alt="единная электронная торговая площадка" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_regnum.svg" class="d-block w-100 ourClientsListItem" alt="regnum" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_iledebeaute.svg" class="d-block w-100 ourClientsListItem" alt="иль дэ боте" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_ivideon.svg" class="d-block w-100 ourClientsListItem" alt="ivideon" />
            </div>
          </div>
          <div class="carousel-item">
            <span class="ourClientsItemHeader">
              Наши клиенты
            </span>
            <div class="ourClientsList">
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_apteka.svg" class="d-block w-100 ourClientsListItem" alt="аптека ру" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_avto.svg" class="d-block w-100 ourClientsListItem" alt="авто спец центр" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_kupikupon.svg" class="d-block w-100 ourClientsListItem" alt="купи купон для себя и друзей" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_biglion.svg" class="d-block w-100 ourClientsListItem" alt="biglion" />
            </div>
          </div>
          <div class="carousel-item">
            <span class="ourClientsItemHeader">
              Наши клиенты
            </span>
            <div class="ourClientsList">
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_pravo.svg" class="d-block w-100 ourClientsListItem" alt="право ру" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_lenkom.svg" class="d-block w-100 ourClientsListItem" alt="ленком" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_donstroi.svg" class="d-block w-100 ourClientsListItem" alt="донстрой" />
              <img src="https://www.reg.ru/i/company/clients/b-clients__image_type_e-moskva.svg" class="d-block w-100 ourClientsListItem" alt="электронная москва" />
            </div>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div id="carouselExampleIndicators" class="ourComments carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="ourCommentContainer">
              <div class="ourCommentContainerItem">
                <span class="ourCommentContainerItemHeader">
                  Отзывы клиентов
                </span>
                <span>
                  Мой сайт на этом хостинге уже третий год, у них же регистрировал доменное имя. Полностью доволен, нареканий нет, надежный и быстрый, ни разу не было такого, что сайт недоступен или тормозит. Масса полезных связанных сервисов. Наверное единственный незначительный минус - цена, она не такая низкая, как у других хостеров, однако для меня всегда лучше заплатить чуть больше, но быть уверенным в том, что никаких проблем не возникнет. Если резюмировать, то это взрослый, состоявшийся хостинг для взрослых, серьезных людей.
                </span>
              </div>
              <img src="https://www.reg.ru/dist/b-icon_feedback_man.ebe7f49e5c1007d9be7c2268da42b44e.svg" alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ourCommentContainer">
              <div class="ourCommentContainerItem">
                <span class="ourCommentContainerItemHeader">
                  Отзывы клиентов
                </span>
                <span>
                  Доброго дня! Меня зовут Виталий, я веб-мастер. Стаж работы 6 лет. У меня около 30 активных сайтов на разных хостингах. REG.RU самый лучший из всех, которые я знаю. По всем показателям. Это проверено временем. Поэтому все новые проекты я делаю уже тут. А также участвую в партнёрской программе. От души благодарю всю команду за вашу замечательную, компетентную и достойную работу!
                </span>
                <span>
                  Виталий на http://ru.hostings.info/reg-ru.html
                </span>
              </div>
              <img src="https://www.reg.ru/dist/b-icon_feedback_man.ebe7f49e5c1007d9be7c2268da42b44e.svg" alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ourCommentContainer">
              <div class="ourCommentContainerItem">
                <span class="ourCommentContainerItemHeader">
                  Отзывы клиентов
                </span>
                <span>
                  Нравится в Reg.Ru, что действительно есть из чего выбрать – хостинг действительно гибкий в плане требований пользователя. Самые разные варианты тарифных планов по разным ценам. Плюс гарантированный возврат оплаты по требованию – неплохое впечатление. Посмотрим, как дальше покажет себя в плане надежности, но пока вроде все хорошо, а если там раз в полгода обвалится, так и на солнце есть пятна.
                </span>
                <span>
                  Владимир на https://hosters.ru/
                </span>
              </div>
              <img src="https://www.reg.ru/dist/b-icon_feedback_man.ebe7f49e5c1007d9be7c2268da42b44e.svg" alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ourCommentContainer">
              <div class="ourCommentContainerItem">
                <span class="ourCommentContainerItemHeader">
                  Отзывы клиентов
                </span>
                <span>
                  Нравится в Reg.Ru, что действительно есть из чего выбрать – хостинг действительно гибкий в плане требований пользователя. Самые разные варианты тарифных планов по разным ценам. Плюс гарантированный возврат оплаты по требованию – неплохое впечатление. Посмотрим, как дальше покажет себя в плане надежности, но пока вроде все хорошо, а если там раз в полгода обвалится, так и на солнце есть пятна.
                </span>
                <span>
                  Владимир на https://hosters.ru/
                </span>
              </div>
              <img src="https://www.reg.ru/dist/b-icon_feedback_man.ebe7f49e5c1007d9be7c2268da42b44e.svg" alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ourCommentContainer">
              <div class="ourCommentContainerItem">
                <span class="ourCommentContainerItemHeader">
                  Отзывы клиентов
                </span>
                <span>
                  Нравится в Reg.Ru, что действительно есть из чего выбрать – хостинг действительно гибкий в плане требований пользователя. Самые разные варианты тарифных планов по разным ценам. Плюс гарантированный возврат оплаты по требованию – неплохое впечатление. Посмотрим, как дальше покажет себя в плане надежности, но пока вроде все хорошо, а если там раз в полгода обвалится, так и на солнце есть пятна.
                </span>
                <span>
                  Владимир на https://hosters.ru/
                </span>
              </div>
              <img src="https://www.reg.ru/dist/b-icon_feedback_man.ebe7f49e5c1007d9be7c2268da42b44e.svg" alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ourCommentContainer">
              <div class="ourCommentContainerItem">
                <span class="ourCommentContainerItemHeader">
                  Отзывы клиентов
                </span>
                <span>
                  Нравится в Reg.Ru, что действительно есть из чего выбрать – хостинг действительно гибкий в плане требований пользователя. Самые разные варианты тарифных планов по разным ценам. Плюс гарантированный возврат оплаты по требованию – неплохое впечатление. Посмотрим, как дальше покажет себя в плане надежности, но пока вроде все хорошо, а если там раз в полгода обвалится, так и на солнце есть пятна.
                </span>
                <span>
                  Владимир на https://hosters.ru/
                </span>
              </div>
              <img src="https://www.reg.ru/dist/b-icon_feedback_man.ebe7f49e5c1007d9be7c2268da42b44e.svg" alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="ourCommentContainer">
              <div class="ourCommentContainerItem">
                <span class="ourCommentContainerItemHeader">
                  Отзывы клиентов
                </span>
                <span>
                  Нравится в Reg.Ru, что действительно есть из чего выбрать – хостинг действительно гибкий в плане требований пользователя. Самые разные варианты тарифных планов по разным ценам. Плюс гарантированный возврат оплаты по требованию – неплохое впечатление. Посмотрим, как дальше покажет себя в плане надежности, но пока вроде все хорошо, а если там раз в полгода обвалится, так и на солнце есть пятна.
                </span>
                <span>
                  Владимир на https://hosters.ru/
                </span>
              </div>
              <img src="https://www.reg.ru/dist/b-icon_feedback_man.ebe7f49e5c1007d9be7c2268da42b44e.svg" alt="" />
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="value">
        <div class="valueItemContainer">
          <span class="valueItemContainerHeader">
            Ваша оценка
          </span>
          <span>
            Мы внимательно следим за вашими оценками и отзывами о работе службы поддержки
          </span>
        </div>
        <img class="valueImage" src="https://www.reg.ru/dist/b-icon_smile_good.be938599be41196164d8be7d0ca0a0e3.svg" alt="">
        <div class="valueItemContainer">
          <span class="valueItemContainerHeader">
            33 580
          </span>
          <span>
            клиентов выразили
            благодарность
          </span>
        </div>
        <img src="https://www.reg.ru/dist/b-icon_smile_bad.97923b12d6010f1b80a4a529d01be172.svg" class="valueImage" alt="">
        <div class="valueItemContainer">
          <span class="valueItemContainerHeader">
            1 623
          </span>
          <span>
            клиента подсказали,
            как нам стать лучше
          </span>
        </div>
      </div>
      <div class="thanks">
        <span>
          Спасибо, что выбрали REG.RU!
        </span>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data() {
    return {
      domain: '',
      domainsZones: []
    }
  },
  mounted() {
    fetch(`http://localhost:4000/api/recaptcha/`, {
      mode: 'cors',
      method: 'GET'
    }).then(response => response.body).then(rb  => {
        const reader = rb.getReader()
        return new ReadableStream({
            start(controller) {
                function push() {
                    reader.read().then( ({done, value}) => {
                        if (done) {
                            controller.close();
                            return;
                        }
                        controller.enqueue(value)
                        push()
                    })
                }
              push()
            }
        })
    }).then(stream => {
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
    })
    .then(result => {
      console.log(`recaptcha: ${JSON.parse(result).recaptcha}`)
      this.reCaptcha = JSON.parse(result).recaptcha
    })
  },
  methods: {
    getRecaptcha() {
      fetch(`http://localhost:4000/api/recaptcha/`, {
        mode: 'cors',
        method: 'GET'
      }).then(response => response.body).then(rb  => {
          const reader = rb.getReader()
          return new ReadableStream({
              start(controller) {
                  function push() {
                      reader.read().then( ({done, value}) => {
                          if (done) {
                              controller.close();
                              return;
                          }
                          controller.enqueue(value)
                          push()
                      })
                  }
                  push()
              }
          })
      }).then(stream => {
          return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(result => {
        console.log(`recaptcha: ${JSON.parse(result).recaptcha}`)
      })
    },
    selectDomains() {
      if (this.domain.length >= 1) {
        this.$router.push({ name: 'DomainsRegister' })
      } else if (this.domain.length <= 0) {
        alert('ВНИМАНИЕ\nПожалуйста, введите хотя бы одно имя домена для проверки')
      }
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
  
  .pageContent {
    display: flex;
    flex-direction: column;
  }

  .aboutService {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    background-image: url('https://i.pinimg.com/736x/71/d7/17/71d717efdac08737e2d2fbc7123ed7c8.jpg');
    background-size: 100% 100%;
  }

  .createSite {
    color: rgb(0, 150, 255);
    font-weight: bolder;
    font-size: 18px;
  }

  .aboutServiceDesc {
    color: rgb(100, 100, 100);
    font-weight: bolder;
    width: 270px;
    text-align: center;
    font-size: 18px;
  }

  .aboutServiceHeader {
    color: rgb(75, 75, 75);
    font-weight: bolder;
    font-size: 36px;
  }

  .offers {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 15px;
  }

  .offer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 100, 200);
    height: 250px;
    width: 48%;
    flex-direction: column;
  }

  .offerHeader {
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 28px;
  }

  .offerDesc {
    margin: 10px 0px;
    color: rgb(255, 255, 255);
    font-weight: bolder;
  }
  
  .selectDomain {
    font-weight: bolder;
    font-size: 20px;
    color: rgb(150, 200, 255);
  }

  .thanks {
    background-color: rgb(0, 0, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    font-size: 24px;
    color: rgb(255, 255, 255);
    height: 85px;
  }

  .valueIcon {
    font-size: 72px;
  }

  .valueBadIcon {
    color: rgb(255, 0, 0);
  }

  .valueGoodIcon {
    color: rgb(0, 200, 0);
  }

  .value {
    margin: auto;
    display: flex;
  }

  .valueItemContainer {
    align-self: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 235px;
  }

  .valueItemContainerHeader {
    font-size: 36px;
    color: rgb(100, 100, 100);
    font-weight: bolder;
  }

  .ourComments {
    display: flex;
    height: 350px;
    width: 75%;
    margin: auto;
    box-sizing: border-box;
    padding: 25px;
    background-color: rgb(240, 240, 240);
    align-items: center;
  }

  .ourCommentContainerItem {
    display: flex;
    flex-direction: column;
  }

  .ourCommentContainer {
    display: flex;
  }

  .ourCommentContainerItemHeader {
    font-size: 36px;
    margin: 10px 0px;
    font-weight: bolder;
  }

  .ourClientsItem {
    display: flex;
    flex-direction: column;
  }

  .ourClientsItemHeader {
    font-size: 48px;
    font-weight: bolder;
    text-align: center;
    color: rgb(65, 65, 65);
  }

  .ourClientsListItem {
    margin: 75px 0px;
    width: 50px;
    height: 50px;
  }

  .ourClientsList {
    display: flex;
  }

  .ourClients {
    background-color: rgb(240, 240, 240);
  }

  .weAreSimple {
    margin: auto;
  }

  .weAreSimpleContent {
    display: flex;
  }

  .weAreSimpleContentItem {
    width: 150px;
    height: 150px;
    border: 10px solid rgb(250, 150, 0);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weAreSimpleContentItemHeader {
    font-size: 36px;
    font-weight: bolder;
  }

  .weAreSimpleContainer {
    width: 150px;
    display: flex;
    flex-direction: column;
    margin: 0px 25px;
  }

  .weAreSimpleHeader {
    font-size: 28px;
    font-weight: bolder;
    margin: 25px 0px;
    display: flex;
    justify-content: center;
  }
  
  .valueImage {
    margin-left: 50px;
  }

  .domainsRegisterInfo {
    display: flex;
  }

  .domainsRegisterInfoItem {
    margin: 0px 15px;
  }

  .domainsRegisterInfoItemAction {
    margin: 0px 5px;
    cursor: pointer;
    color: rgb(0, 150, 200);
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  .domainsRegisterInfoItemHeader {
    color: rgb(125, 125, 125);
    font-weight: bolder;
  }

  .domainsRegisterHeader {
    font-size: 28px;
    font-weight: bolder;
    color: rgb(75, 75, 75);
  }

  .domainsRegister {
    margin: auto;
  }

  .domainsZones {
    display: flex;
  }

  .domainZone {
    margin: 0px 15px;
  }

  .domainZoneLabel {
    font-weight: bolder;
    font-size: 18px;
    margin: 0px 7px;
  }

  .domainsActions {
    display: flex;
  }
  
  .domainsAction {
    box-sizing: border-box;
    padding-right: 75px;
    height: 250px;
    width: 25%;
    margin: 0px 50px;
    display: flex;
    flex-direction: column;
  }

  .domainsActionHeader {
    color: rgb(255, 0, 0);
    font-weight: bolder;
    font-size: 24px;
    margin: 15px 0px;
  }

  .domainsActionContent {
    color: rgb(50, 150, 150);
    font-weight: bolder;
    font-size: 18px;
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  .notLastDomainsAction {
    border-right: 1px solid rgb(200, 200, 200);
  }

</style>