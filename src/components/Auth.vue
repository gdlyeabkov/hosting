<template>
    <div class="auth">
        <div class="closeContainer">
            <span class="material-icons" @click="closeAuthDialog">
                close
            </span>
        </div>
        <div class="authTabs">
            <div :class="{ authTab: true, authActiveTab: activeTab === 'register' }" @click="activeTab = 'register'">
                <span>
                    Регистрация                 
                </span>
            </div>
            <div :class="{ authTab: true, authActiveTab: activeTab === 'login' }" @click="activeTab = 'login'">
                <span>
                    Вход
                </span>
            </div>
        </div>
        <div class="authForm">
            <span class="authRules">
                Для полного доступа к услугам REG.RU необходимо авторизоваться или зарегистрироваться
            </span>
            <div class="authInputs">
                <input placeholder="Электронная почта" v-model="login" type="text" class="form-control w-75 authInput" />
                <input v-if="activeTab === 'register'" placeholder="Мобильный телефон" v-model="phone" type="text" class="form-control w-75 authInput" />
                <input v-else-if="activeTab === 'login'" placeholder="Пароль" v-model="password" type="text" class="form-control w-75 authInput" />
            </div>
            <div class="reCaptcha" v-html="reCaptcha">
                
            </div>
            <span v-if="activeTab === 'register'" class="authRules">
                Продолжая регистрацию, вы соглашаетесь с 
                <span class="authPolitic">
                    Политикой обработки персональных данных
                </span>
                     и 
                <span class="authPolitic">
                    Правилами пользования сайтом
                </span>
            </span>
            <div class="authFooter">
                <div class="authSocialMedia">
                    <a class="btn btn-primary authSocialMediaItem" style="background-color: #3b5998;" href="#!" role="button">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-primary authSocialMediaItem" style="background-color: #3b5998;" href="#!" role="button">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-primary authSocialMediaItem" style="background-color: #3b5998;" href="#!" role="button">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-primary authSocialMediaItem" style="background-color: #3b5998;" href="#!" role="button">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>
                <button v-if="activeTab === 'register'" @click="registerDeployer" class="btn btn-success w-50">
                    Зарегистрироваться
                </button>
                <button v-if="activeTab === 'login'" @click="loginDeployer" class="btn btn-success w-50">
                    Войти
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Auth',
    data() {
        return {
            activeTab: 'register',
            login: '',
            phone: '',
            password: '',
            token: null
        }
    },
    props: {
        reCaptcha: {
            type: String,
            default: '<h1>reCaptcha</h1>'
        }
    },
    emits: [
        'closeAuthDialog'
    ],
    methods: {
        closeAuthDialog() {
            this.$emit('closeAuthDialog')
        },
        registerDeployer() {
            fetch(`http://localhost:4000/api/deployers/create/?deployeremail=${this.login}&deployerphone=${this.phone}`, {
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
                if(JSON.parse(result).status === 'OK') {
                    alert(`Deployer ${this.login} зарегестрирован`)
                }
            })
        },
        loginDeployer() {
            fetch(`http://localhost:4000/api/deployers/check/?deployeremail=${this.login}&deployerpassword=${this.password}`, {
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
                if(JSON.parse(result).status === 'OK') {
                    alert(`Deployer ${this.login} вошел`)
                    this.token = jwt.sign({
                        deployer: JSON.parse(result).deployer._id
                        }, 'hostingsecret', { expiresIn: '5m' })
                    window.localStorage.setItem("hostingtoken", this.token)

                    this.$router.push({ name: "DomainsRegister" })

                } else if(JSON.parse(result).status === 'Error') {
                    alert('Неправильно указан логин или пароль')
                }
            })
        },
    }
}
</script>

<style scoped>
    
    .auth {
        position: fixed;
        top: 5%;
        left: 15%;
        width: 65%;
        height: 85%;
        background-color: rgb(245, 245, 245);
        z-index: 5;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .closeContainer {
        align-self: flex-end;
        display: flex;
        justify-content: flex-end;
        color: rgb(200, 200, 200);
        cursor: pointer;
        box-sizing: border-box;
        padding: 10px 25px;
    }

    .authTabs {
        display: flex;
        width: 75%;
        height: 15%;
        flex-direction: row;
        justify-content: flex-start;
    }

    .authTab {
        margin: 0px 25px;
        color: rgb(125, 150, 125);
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer;
        padding: 15px 35px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .authActiveTab {
        background-color: rgb(235, 235, 235);
    }

    .authForm {
        background-color: rgb(235, 235, 235);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 85%;
    }

    .authInput {
        margin: 5px 0px;
    }

    .authFooter {
        display: flex;
        justify-content: space-between;
        width: 100%;
        box-sizing: border-box;
        padding: 25px;
    }

    .authRules {
        box-sizing: border-box;
        padding: 25px;
        color: rgb(75, 75, 125);
    }

    .authInputs {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .authPolitic {
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    .authSocialMedia {
        display: flex;
    }

    .authSocialMediaItem {
        margin: 0px 5px;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .reCaptcha {
        width: 250px;
        height: 150px;
        /* background-color: rgb(200, 200, 200); */
    }

</style>