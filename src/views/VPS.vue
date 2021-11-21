<template>
  <div class="">
    <Header :showBreadcrumbs="true" :breadcrumbsHeader="'VPS'" :breadcrumbsItems="['Всё']" />
    <div class="pageContent">
      <div class="development">
        <div class="cloudServicesTop">
          <span class="cloudServicesTopItem">
            VPS > Облачные серверы
          </span>
          <div class="cloudServicesTopItem">
            <span>
              VPS на Linux
            </span>
            <img src="https://img.reg.ru/order-webpack/ds-icons__mc-ubuntu.f1fec04498b042edf7ef49fad3eb101e.svg" alt="" />
            <span>
              VPS на Windows
            </span>
            <img src="https://img.reg.ru/order-webpack/ds-icons__mc-windows.bbfe5b2994718cccddc32dc206376785.svg" alt="" />
          </div>
        </div>
        <span class="developmentHeader">
          Облачные сервисы для
        </span>
        <span class="developmentContent">
          VPS c шаблонами приложений, снэпшотами и API.
        </span>
        <span class="developmentContent">>
          Почасовая оплата, первый платёж — 100 рублей.
        </span>
        <div clas="requestServer">
          <button class="btn btn-success">
            Заказать сервер
          </button>
          <span class="cloudServicePrice">
            от 0.37 ₽/час
          </span>
        </div>
      </div>
      <div>
        <span class="apiHeader">
          API для разработчиков
        </span>  
        <div class="api">
          <div class="apiItem">
            <span>
              Любые действия, которые вы делаете с сервером в панели управления, можно сделать и через API: покупка, апгрейд, перезагрузка или остановка.
            </span>
            <span>
              Встраивайте инфраструктуру REG.RU в свои сценарии: увеличивайте мощность сервера при повышении нагрузки и экономьте на развёртывании собственной инфраструктуры.
            </span>
            <span>
              Описание API: developers.cloudvps.reg.ru
            </span>
            </div>
          <div class="codeExample">

          </div>
        </div>
      </div>
      <div class="cloudServices">
        <span class="cloudServicesHeader">
          Под капотом облачных серверов
        </span>
        <div class="cloudServicesRow">
          <div class="cloudServicesRowItem">
            <span class="cloudServicesRowItemHeader">
              Операционные системы
            </span>
            <span>
              Ubuntu, Debian, CentOS, Rocky Linux и Microsoft Windows
            </span>
          </div>
          <div class="cloudServicesRowItem">
            <span class="cloudServicesRowItemHeader">
              Аппаратная виртуализация KVM
            </span>
            <span>
              Быстрая и надёжная виртуализация. Собственное ядро как в XEN — аналог реального физического сервера.              
            </span>
          </div>
          <div class="cloudServicesRowItem">
            <span class="cloudServicesRowItemHeader">
              Локальная дисковая система              
            </span>
            <span>
              Дисковая система на том же физическом сервере — быстрее, чем сетевое дисковое хранилище.              
            </span>
          </div>
        </div>
        <div class="cloudServicesRow">
          <div class="cloudServicesRowItem">
            <span class="cloudServicesRowItemHeader">
              Защита от DDoS на уровнях L3/L4
            </span>
            <span>
              Физические серверы защищены системой DDoS-Guard, способной отразить атаку до 1,5 Tbps на сетевых уровнях L3/L4.
            </span>
          </div>
          <div class="cloudServicesRowItem">
            <span class="cloudServicesRowItemHeader">
              Приватные сети
            </span>
            <span>
              Защищённое взаимодействие серверов внутри датацентра на скорости до 1 Гбит/с.              
            </span>
          </div>
          <div class="cloudServicesRowItem">
            <span class="cloudServicesRowItemHeader">
              Дата-центр Курчатовский
            </span>
            <span>
              Дата-центр в Москве — здесь размещены стойки корневого DNS-сервера F‑Root и реестров доменов RU и .РФ.
            </span>
          </div>
        </div>
        <button class="btn btn-success">
          Заказать сервер
        </button>
      </div>     
      <div>
        <span class="answersHeader">
          Остались вопросы?
        </span>
        <div class="answer">
          <span>
            Как работает почасовая оплата?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Почему тарифы за месяц указаны в формате «до X рублей в месяц»?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Можно ли создать сервер не на месяц, а на несколько дней? Сколько это будет стоить?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Взимается ли плата, если не использовать сервер?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Можно ли будет изменить тариф для работающего сервера?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Чем виртуализация KVM отличается от XEN?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Есть ли поддержка ISO-образов?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Чем отличаются линейки тарифов?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Есть ли ограничение по трафику?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Предоставляется ли панель управления сервером?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Можно ли заказать сервер с Windows или FreeBSD?            
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Как работает резервное копирование?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
        </div>
        <div class="answer">
          <span>
            Есть ли ограничения на количество создаваемых серверов?
          </span>
          <span class="material-icons answerToggler">
            expand_more
          </span>
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

  .answersHeader {
    font-size: 36px;
    font-weight: bolder;
  }

  .api {
    display: flex;
    justify-content: center;
  }
  
  .codeExample {
    background-color: rgb(50, 50, 150);
    border-radius: 8px;
    width: 350px;
    height: 350px
  }

  .apiItem {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0px 50px;
  }

  .apiHeader {
    display: block;
    font-size: 24px;
    font-weight: bolder;
    text-align: center;
    margin: 50px 0px;
  }

  .cloudServices {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(240, 240, 240);
  }

  .cloudServicesHeader {
    font-size: 24px;
    font-weight: bolder;
  }

  .cloudServicesRow {
    display: flex;
  }

  .cloudServicesRowItem {
    background-color: rgb(255, 255, 255);
    width: 250px;
    height: 250px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    margin: 25px;
  }

  .cloudServicesRowItemHeader {
    font-weight: bolder;
    margin: 15px 0px;
  }

  .development {
    width: 100%;
    height: 550px;
    background-image: url('https://www.reg.ru/dist/b-cloudvps__header.c1df0fc445eda810e8078b722f1a48a5.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .developmentHeader {
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 36px;
  }

  .developmentContent {
    color: rgb(255, 255, 255);
    font-weight: bolder;
    margin: 15px 0px;
  }

  .requestServer {
    display: flex;
  }

  .cloudServicePrice {
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 24px;
  }

  .cloudServicesTop {
    color: rgb(255, 255, 255);
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 75px;
  }

  .cloudServicesTopItem {
    margin: 0px 175px;
  }

  .cloudServicesTopSubitem {
    display: flex;
  }

</style>