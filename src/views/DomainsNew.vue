<template>
  <div class="">
    <Header :showBreadcrumbs="true" :breadcrumbsHeader="'Домены'" :breadcrumbsItems="['Зарегистрировать домен', 'Продлить', 'Подобрать домен', 'Освобождающиеся домены', 'Магазин доменов', 'Всё']" />
    <div class="pageContent">
      <span class="domainsRegisterLabel">
        Зарегистрировать домен
      </span>
      <div class="domainsRegister">
        <div class="input-group inputRailwayDatePicker">
          <input v-model="domain" type="text" placeholder="Например mysite.ru или просто cafe" class="form-control w-50" />
          <span  class="input-group-text btn btn-info" id="basic-addon1" @click="selectDomains()" >Подобрать</span>
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
        <div>
          <span class="otherDomainsServices">
            Другие услуги с доменами
          </span>
          <div class="continueDomainAction">
            <span class="continueDomainActionDesc">
              Продлите свои домены за пару кликов с помощью бытрого продления доменных имен
            </span>
          </div>
          <span class="continueDomainActionLabel">
            Подробнее о продлении доменов
          </span>
        </div>
        <div>
          <span class="whyService">
            Почему REG.RU
          </span>
          <div class="whyServiceContainer">
            <div class="whyServiceItem">
              <span class="whyServiceItemHeader">
                3,3
                <span class="whyServiceItemLabel">
                  млн
                </span>
              </span>
              <span>
                доменов обслуживается в
              </span>
            </div>
            <div class="whyServiceItem">
              <span class="whyServiceItemHeader">
                24/7
              </span>
              <span>
                наши специалисты готовы ответить на ваши вопросы
              </span>
            </div>
            <div class="whyServiceItem">
              <span class="whyServiceItemHeader">
                14
                <span class="whyServiceItemLabel">
                  лет
                </span>
              </span>
              <span>
                делаем доменный и хостинговый рынок лучше с 2006 года
              </span>
            </div>
          </div>
        </div>
        <div class="legalCapabilitiesContainer">
          <div class="legalCapabilitiesItem">
            <span class="legalCapabilities">
              Возможности для юридических лиц
            </span>
            <span class="legalCapabilitiesItemHeader">
              Государственные закупки
            </span>
            <span class="legalCapabilitiesItemContent">
              Работаем по договору-оферте и участвуем в государственных закупках.
            </span>
            <span class="legalCapabilitiesItemHeader">
              Электронный документооборот
            </span>
            <span class="legalCapabilitiesItemContent">
              Все наши клиенты моментально получают закрывающие документы.
            </span>
            <button class="btn btn-info w-25">
              Все возможности
            </button>
          </div>
          <img src="https://www.reg.ru/dist/b-new-domain-entrepreneur.bf58ab144d35d2794385e1915c5a9793.svg" alt="">
        </div>
        <div>
          <span class="answers">
            Ответы на частые вопросы    
          </span>
          <div class="answer">
            <span>
              Что такое домен?
            </span>
            <span class="material-icons answerToggler">
              expand_more
            </span>
          </div>
          <div class="answer">
            <span>
              Какую доменную зону лучше выбрать?
            </span>
            <span class="material-icons answerToggler">
              expand_more
            </span>
          </div>
          <div class="answer">
            <span>
              Что делать, если домен уже занят?
            </span>
            <span class="material-icons answerToggler">
              expand_more
            </span>
          </div>
          <div class="answer">
            <span>
              Как купить доменное имя в REG.RU?
            </span>
            <span class="material-icons answerToggler">
              expand_more
            </span>
          </div>
          <div class="answer">
            <span>
              Я зарегистрировал домен. Что дальше?
            </span>
            <span class="material-icons answerToggler">
              expand_more
            </span>
          </div>
          <div class="answer">
            <span>
              Сколько стоит домен?
            </span>
            <span class="material-icons answerToggler">
              expand_more
            </span>
          </div>
        </div>

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
  methods: {
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

  .domainsRegisterLabel {
    color: rgb(75, 75, 75);
    font-size: 36px;
    text-align: center;
    font-weight: bolder;
  }

  .otherDomainsServices {
    color: rgb(75, 75, 75);
    font-size: 36px;
    text-align: center;
    font-weight: bolder;
  }

  .whyService {
    color: rgb(75, 75, 75);
    font-size: 36px;
    text-align: center;
    font-weight: bolder;
  }

  .legalCapabilities {
    color: rgb(75, 75, 75);
    font-size: 36px;
    text-align: center;
    font-weight: bolder;
  }

  .answers {
    color: rgb(75, 75, 75);
    font-size: 36px;
    text-align: center;
    font-weight: bolder;
  }

  .answer {
    border-top: 1px solid rgb(175, 175, 175);
    border-bottom: 1px solid rgb(175, 175, 175);
    color: rgb(75, 75, 75);
    font-size: 18px;
    text-align: center;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    height: 125px;
    box-sizing: border-box;
    padding: 15px 0px;
  }

  .answerToggler {
    font-weight: bolder;
  }

  .legalCapabilitiesContainer {
    display: flex;
  }

  .legalCapabilitiesItem {
    display: flex;
    flex-direction: column;
  }

  .legalCapabilitiesItemHeader {
    font-size: 24px;
    color: rgb(100, 100, 100);
    font-weight: bolder;
  }

  .legalCapabilitiesItemContent {
    font-size: 18px;
    color: rgb(100, 100, 100);
    font-weight: bolder;
  }

  .whyServiceContainer {
    display: flex;
  }

  .whyServiceItem {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0px 75px;
  }

  .whyServiceItemHeader {
    font-weight: bolder;
    font-size: 48px;
  }

  .whyServiceItemLabel {
    font-size: 28px;
  }

  .continueDomainAction {
    margin: auto;
    box-shadow: 0px 0px 10px rgb(200, 200, 200);
    width: 85%;
    height: 125px;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 15px;
  }

  .continueDomainActionLabel {
    color: rgb(100, 150, 255);
    font-weight: bolder;
    justify-content: flex-end;
    display: flex;
    cursor: pointer;
  }

  .continueDomainActionDesc {
    font-weight: bolder;
    color: rgb(150, 150, 150);
    font-size: 20px;
  }

</style>