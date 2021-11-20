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
        <div class="headerBreadcrumbs" v-if="showBreadcrumbs">
            <span class="headerBreadcrumbsHeader">
                {{ breadcrumbsHeader }}
            </span>
            <div class="headerBreadcrumbsItems">
                <span class="headerBreadcrumbsItem" v-for="breadcrumbsItem in breadcrumbsItems" :key="breadcrumbsItem">
                    {{
                        breadcrumbsItem
                    }}
                </span>
            </div>
        </div>
        <Auth v-if="isAuth" @closeAuthDialog="closeAuthDialogHandler" />
        <CookiesAlert v-if="isCookies" @closeCookiesDialog="closeCookieDialogHandler" />
    </div>
</template>

<script>

import Auth from '@/components/Auth.vue'
import CookiesAlert from '@/components/CookiesAlert.vue'

export default {
    name: 'Header',
    data() {
        return {
            isAuth: false,
            isCookies: true,
            domain: ''
        }
    },
    props: {
        showBreadcrumbs: {
            type: Boolean
        },
        breadcrumbsHeader: {
            type: String
        },
        breadcrumbsItems: {
            type: Array
        }
    },
    methods: {
        closeAuthDialogHandler() {
            this.isAuth = false
        },
        closeCookieDialogHandler() {
            this.isCookies = false
        }
    },
    components: {
        Auth,
        CookiesAlert
    }
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

    .headerBreadcrumbs {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 25px;
        align-items: center;
        height: 50px;
    }

    .headerBreadcrumbsHeader {
        font-weight: bolder;
        font-size: 20px;
    }

    .headerBreadcrumbsItems {
        display: flex;
    }

    .headerBreadcrumbsItem {
        width: 100px;
        cursor: pointer;
    }

    .headerBreadcrumbsItem:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }


</style>