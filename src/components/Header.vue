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
                <button class="btn btn-info headerItemElement loginBtn" @click="isAuth = !isAuth">
                    Вход
                </button>
            </div>
        </div>
        <div class="headerBottom">
            <span @click="isContextMenu = !isContextMenu" class="material-icons headerBottomItem">
                menu
            </span>
            <span class="headerBottomItem" @click="$router.push({ name: 'DomainsNew' })">
                Домены
            </span>
            <span class="headerBottomItem" @click="$router.push({ name: 'CMSAndConstructor' })">
                Конструктор и CMS
            </span>
            <span class="headerBottomItem" @click="$router.push({ name: 'Hosting' })">
                Хостинг
            </span>
            <span class="headerBottomItem" @click="$router.push({ name: 'VPS' })">
                VPS
            </span>
            <span class="headerBottomItem" @click="$router.push({ name: 'ServersAndDataCenters' })">
                Серверы и ДЦ
            </span>
            <span class="headerBottomItem" @click="$router.push({ name: 'SSL' })">
                SSL
            </span>
            <div class="headerBottomItem" @click="$router.push({ name: 'Services' })">
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
        <Auth v-if="isAuth" @closeAuthDialog="closeAuthDialogHandler" :reCaptcha="reCaptcha" />
        <CookiesAlert v-if="isCookies" @closeCookiesDialog="closeCookieDialogHandler" />
        <div class="contextMenu" v-if="isContextMenu">
            <span class="contextMenuItem">
                Домены
            </span>
            <span class="contextMenuItem">
                Конструктор и CMS
            </span>
            <span class="contextMenuItem">
                Хостинг
            </span>
            <span class="contextMenuItem">
                VPS
            </span>
            <span class="contextMenuItem">
                Серверы и ДЦ
            </span>
            <span class="contextMenuItem">
                SSL
            </span>
            <span class="contextMenuItem">
                Сервисы
            </span>
            <span class="contextMenuItem">
                Партнерам
            </span>
            <span class="contextMenuItem">
                Помощь
            </span>
        </div>
        <div class="askQuestion">
            <span>
                ?
            </span>
        </div>
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
            domain: '',
            isContextMenu: false,
            reCaptcha: '<h1>reCaptcha</h1>'
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

    .contextMenu {
        position: absolute;
        top: 110px;
        left: 180px;
        box-shadow: 0px 0px 10px rgb(150, 150, 150);
        width: 205px;
        height: 285px;
        box-sizing: border-box;
        padding: 15px 0px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
    }

    .contextMenuItem {
        cursor: pointer;
        box-sizing: border-box;
        padding: 2px 25px;
    }

    .contextMenuItem:hover {
        background-color: rgb(235, 235, 235);
    }

    .askQuestion {
        position: fixed;
        top: calc(100% - 15%);
        left: calc(100% - 15%);
        width: 65px;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        background-color: rgb(0, 200, 255);
        border-radius: 8px;
        color: rgb(255, 255, 255);
        font-weight: bolder;
    }

</style>