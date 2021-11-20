<template>
  <div class="">
    <Header :showBreadcrumbs="false" :breadcrumbsHeader="''" :breadcrumbsItems="[]" />
    <div class="pageContent">
      <div class="aboutService">
        <span class="aboutServiceHeader">
          Платформа для создания сайтов
        </span>
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
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
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

</style>