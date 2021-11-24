<template>
    <div>
        <span>
            Отображаю сайт
        </span>
    </div>
</template>
<script>
export default {
    name: 'WebView',
    data() {
        return {
            httpContent: ''
        }
    },
    mounted() {
        fetch(`http://localhost:4000/api/sites/get/`, {
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
    }
}
</script>