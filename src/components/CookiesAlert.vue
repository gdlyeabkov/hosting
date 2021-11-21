<template>
    <div class="cookiesDialog">
        <span>
            Мы используем файлы cookie. Продолжив работу с сайтом, вы соглашаетесь с Политикой обработки персональных данных и Правилами пользования сайтом.
        </span>
        <span class="material-icons closeContainer" @click="closeCookiesDialog">
            close
        </span>
    </div>
</template>

<script>
export default {
    name: 'CookiesAlert',
    methods: {
        closeCookiesDialog() {
            this.$emit('closeCookiesDialog')
        }
    }
}
</script>

<style scoped>
    
    .cookiesDialog {
        display: flex;
        width: 45%;
        height: 125px;
        position: fixed;
        top: 75%;
        left: 0px;
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        padding: 25px;
        border-radius: 0px 8px 8px 0px;
        z-index: 10;
        box-shadow: 0px 0px 15px rgb(150, 150, 150);
    }

    .closeContainer {
        display: flex;
        color: rgb(200, 200, 200);
        cursor: pointer;
    }

</style>