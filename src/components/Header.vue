<template>
    <div class="header">
        <div class="headerTop">
            <div class="headerItem">
                <img class="headerItemElement" src="https://www.reg.ru/i/svg/b-header__logo_site_ru.svg" alt="">
            </div>
            <div class="headerItem">
                <div class="input-group inputRailwayDatePicker">
                    <input v-model="domain" type="text" placeholder="Введите домен или слово" class="form-control w-50" />
                    <span  class="input-group-text btn btn-success" id="basic-addon1">Подобрать</span>
                    <span  class="input-group-text btn btn-dark" id="basic-addon1">Whois</span>
                </div>
            </div>
            <div class="headerItem">
                <span class="headerItemElement">
                    Регистрация
                </span>
                <button class="btn btn-info headerItemElement loginBtn">
                    Вход
                </button>
            </div>
        </div>
        <div class="headerBottom">
            <span class="material-icons headerBottomItem">
                menu
            </span>
            <span class="headerBottomItem">
                Домены
            </span>
            <span class="headerBottomItem">
                Конструктор и CMS
            </span>
            <span class="headerBottomItem">
                Хостинг
            </span>
            <span class="headerBottomItem">
                VPS
            </span>
            <span class="headerBottomItem">
                Серверы и ДЦ
            </span>
            <span class="headerBottomItem">
                SSL
            </span>
            <div class="headerBottomItem">
                <span>
                    Сервисы
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .headerTop {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(250, 250, 220);
        box-sizing: border-box;
        /* padding: 0px 30px; */
    }

    .headerItem {
        margin: 0px 25px;
    }

    .headerItemElement {
        margin: 0px 15px;
    }

    .loginBtn {
        font-weight: bolder;
        color: rgb(255, 255, 255);
    }

    .headerBottom {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: rgb(0, 100, 200);
        color: rgb(255, 255, 255);
        font-weight: bolder;
    }

    .headerBottomItem {
        margin: 0px 15px;
        height: 100%;
        padding: 0px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
    }

    .headerBottomItem:hover {
        background-color: rgb(0, 150, 250);
    }

</style>