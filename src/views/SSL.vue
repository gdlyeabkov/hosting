<template>
  <div class="">
    <Header :showBreadcrumbs="true" :breadcrumbsHeader="'SSL-сертификаты'" :breadcrumbsItems="['О сертификатах', 'Сертификаты GlobalSign', 'Wildcard SSL', 'Бесплатный SSL-сертификат']" />
    <div class="pageContent">
      <div class="sslContainer">
        <span class="sslContainerHeader">
          SSL сертификаты:<br/>безопасность и продвижение<br/>в топ Google
        </span>
        <img src="https://www.reg.ru/dist/b-ssl-certificate__header-image.9b96a5bcc72389bd4d6eda7aa04837b0.svg" width="250px" alt="">
      </div>
      <div class="whichSSLBest">
        <img src="https://www.reg.ru/dist/b-ssl-certificate__choise-image.0eb697725a61067023e2ab7e812c2909.svg" width="125px" alt="" />
        <span class="whichSSLBestHeader">
          Какой SSL-сертификат подойдёт твоему сайту?
        </span>
        <button class="btn btn-success">
          Узнать
        </button>
      </div>
      <div class="domainSSL">
        <div class="domainSSLColumn">
          <span class="domainSSLLabel">
            DomainSSL
          </span>
          <span class="sslCert">
            Бюджетный
          </span>
          <span class="sslCert">
            DV сертификат
          </span>
          <span>
            Предоставляется проверка доменного имени. Лучшее решение для ознакомления с технологией https для начинающих веб-проектов.
          </span>
        </div>
        <div class="domainSSLColumn">
          <div>
            <img src="https://www.reg.ru/dist/ds-icons__check-bold-double_green-400.16baaaf97b2f642d03d0fa5c138064b7.svg" alt="" />
            <span>
              Доступен физическим и юридическим лицам
            </span>
          </div>
          <div>
            <img src="https://www.reg.ru/dist/ds-icons__check-bold-double_green-400.16baaaf97b2f642d03d0fa5c138064b7.svg" alt="" />
            <span>
              Шифрование всех передаваемых данных
            </span>
          </div>
          <div>
            <img src="https://www.reg.ru/dist/ds-icons__check-bold-double_green-400.16baaaf97b2f642d03d0fa5c138064b7.svg" alt="" />
            <span>
              Wildcard (защита поддоменов)
            </span>
          </div>
          <div>
            <img src="https://www.reg.ru/dist/ds-icons__check-bold-double_green-400.16baaaf97b2f642d03d0fa5c138064b7.svg" alt="" />
            <span>
              Поддержка кириллических доменов
            </span>
          </div>
        </div>
        <div class="domainSSLColumn">
          <span>
            Защищённый протокол передачи данных
          </span>
          <img src="https://www.reg.ru/dist/b-ssl-address-bar__protocol-compact.e789d8b241fd87fae49bcd7bcc7b3b07.svg" alt="" />
          <span class="sslPrice">
            от 2 899 р./год
          </span>
          <span>
            от 6 638 р./год
          </span>
          <button class="btn btn-success">
            Купить
          </button>
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

  .sslContainer {
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 75px;
    justify-content: center;
    height: 650px;
    background-color: rgb(0, 100, 255);
  }

  .sslContainerHeader {
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 36px;
    margin: 0px 75px;
  }
  
  .whichSSLBest {
    box-sizing: border-box;
    padding: 25px;
    position: relative;
    top: -385px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin: auto;
    border: 1px solid rgb(75, 75, 75);
    background-color: rgb(255, 255, 255);
  }

  .whichSSLBestHeader {
    font-size: 24px;
    font-weight: bolder;
    color: rgb(125, 125, 125);
  }

  .domainSSL {
    position: relative;
    top: -300px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin: auto;
    border: 1px solid rgb(75, 75, 75);
    background-color: rgb(255, 255, 255);

    display: flex;
    box-sizing: border-box;
    padding: 35px;
  }

  .domainSSLColumn {
    margin: 0px 25px;
    width: 30%;
    display: flex;
    flex-direction: column;
  }

  .domainSSLLabel {
    color: rgb(75, 75, 75);
    font-weight: 500;
    font-size: 24px;
  }

  .sslCert {
    color: rgb(75, 75, 75);
    font-weight: 700;
    font-size: 26px;
  }

  .sslPrice {
    font-weight: bolder;
    font-size: 28px;
    color: rgb(125, 125, 125);
  }

</style>