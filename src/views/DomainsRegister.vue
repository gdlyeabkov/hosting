<template>
    <div class="domainsRegisterContainer">
        <div class="aside">
            <div class="input-group inputRailwayDatePicker">
                <span  class="material-icons input-group-text" id="basic-addon1">
                    search
                </span>
                <input v-model="keywords" @keyup="refreshDomains($event, false)" type="text" class="form-control" />    
                <button class="btn btn-light input-group-text" id="basic-addon1" @click="refreshDomains($event, true)">
                    Подобрать
                </button>
            </div>
            <div class="domainsRegisterAction">
                <span class="domainsRegisterActionHeader">
                    Скидка 5% на регистрацию трёх и более доменов
                </span>
                <span>
                    Скидка начнёт работать при добавлении третьего домена в счёт. Сумма заказа изменится автоматически. Акция не действует на премиум-домены, домены из Магазина доменов и домены, участвующие в других акциях.
                </span>
            </div>
            <div class="premimumDomains">
                <span class="premimumDomainsHeader">
                    Премиальные домены
                </span>
                <span>
                    Премиальные домены — это домены с историей. Они известны на рынке, их легко запомнить, и по этим адресам переходят пользователи. дерюга.рф
                </span>
            </div>
            <div class="domainsList">
                <!-- <div class="domain">
                    <div class="domainAside">
                        <span class="domainName">
                            дерюга
                            <span class="domainOneLevel">
                                .рф
                            </span>
                        </span>
                        <div class="domainsMarket">
                            <span class="material-icons domainsMarketLogo">
                                local_grocery_store
                            </span>
                            <span class="domainsMarketLabel">
                                Магазин доменов
                            </span>
                        </div>
                    </div>
                    <div class="domainArticle">
                        <span class="domainPrice">
                            12 400 Р
                        </span>
                        <span class="material-icons-outlined outlineDomainMarketLogo">
                            local_grocery_store
                        </span>
                    </div>
                </div>
                <div class="domain">
                    <div class="domainAside">
                        <span class="domainName">
                            дерюга
                            <span class="domainOneLevel">
                                .рф
                            </span>
                        </span>
                        <div class="domainsMarket">
                            <span class="material-icons domainsMarketLogo">
                                local_grocery_store
                            </span>
                            <span class="domainsMarketLabel">
                                Магазин доменов
                            </span>
                        </div>
                    </div>
                    <div class="domainArticle">
                        <span class="domainPrice">
                            12 400 Р
                        </span>
                        <span class="material-icons-outlined outlineDomainMarketLogo">
                            local_grocery_store
                        </span>
                    </div>
                </div>
                <div class="domain">
                    <div class="domainAside">
                        <span class="domainName">
                            дерюга
                            <span class="domainOneLevel">
                                .рф
                            </span>
                        </span>
                        <div class="domainsMarket">
                            <span class="material-icons domainsMarketLogo">
                                local_grocery_store
                            </span>
                            <span class="domainsMarketLabel">
                                Магазин доменов
                            </span>
                        </div>
                    </div>
                    <div class="domainArticle">
                        <span class="domainPrice">
                            12 400 Р
                        </span>
                        <span class="material-icons-outlined outlineDomainMarketLogo">
                            local_grocery_store
                        </span>
                    </div>
                </div>
                <div class="domain">
                    <div class="domainAside">
                        <span class="domainName">
                            дерюга
                            <span class="domainOneLevel">
                                .рф
                            </span>
                        </span>
                        <div class="domainsMarket">
                            <span class="material-icons domainsMarketLogo">
                                local_grocery_store
                            </span>
                            <span class="domainsMarketLabel">
                                Магазин доменов
                            </span>
                        </div>
                    </div>
                    <div class="domainArticle">
                        <span class="domainPrice">
                            12 400 Р
                        </span>
                        <span class="material-icons-outlined outlineDomainMarketLogo">
                            local_grocery_store
                        </span>
                    </div>
                </div>
                <div class="domain">
                    <div class="domainAside">
                        <span class="domainName">
                            дерюга
                            <span class="domainOneLevel">
                                .рф
                            </span>
                        </span>
                        <div class="domainsMarket">
                            <span class="material-icons domainsMarketLogo">
                                local_grocery_store
                            </span>
                            <span class="domainsMarketLabel">
                                Магазин доменов
                            </span>
                        </div>
                    </div>
                    <div class="domainArticle">
                        <span class="domainPrice">
                            12 400 Р
                        </span>
                        <span class="material-icons-outlined outlineDomainMarketLogo">
                            local_grocery_store
                        </span>
                    </div>
                </div> -->
                <div class="domain" v-for="domain in tempDomains" :key="domain._id">
                    <div class="domainAside">
                        <span class="domainName">
                            {{ domain.name.split('.')[0] }}
                            <span class="domainOneLevel">
                                {{ `.${domain.name.split('.')[1]}` }}
                            </span>
                        </span>
                        <div class="domainsMarket">
                            <span class="material-icons domainsMarketLogo">
                                local_grocery_store
                            </span>
                            <span class="domainsMarketLabel">
                                Магазин доменов
                            </span>
                        </div>
                    </div>
                    <div class="domainArticle">
                        <span class="domainPrice">
                            {{ domain.price }} Р
                        </span>
                        <span class="material-icons-outlined outlineDomainMarketLogo"  @click="buyDomain(domain)">
                            local_grocery_store
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="domainsOrder">
            <span class="domainsOrderHeader">
                Ваш заказ
            </span>
            <span>
                В вашем заказе пока нет услуг. Начните с выбора домена
            </span>
        </div>
    </div>
</template>

<script>

import * as jwt from 'jsonwebtoken'

export default {
    name: 'DomainsRegister',
    data() {
        return {
            deployer: {},
            domains: [],
            keywords: '',
            tempDomains: [],
            token: window.localStorage.getItem('hostingtoken')
        }
    },
    mounted() {
        jwt.verify(this.token, 'hostingsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Home" })
            } else {
                fetch(`http://localhost:4000/api/domains/all/?deployerid=${decoded.deployer}`, {
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
                        this.domains = JSON.parse(result).domains
                        this.deployer = JSON.parse(result).deployer
                        this.tempDomains = this.domains
                    }
                })    
            }
        })
    },
    methods: {
        buyDomain(domain) {
           console.log(`domain: ${domain._id}; ${domain.price}; ${this.deployer._id}`)
           if (!domain.isSell) {
                fetch(`http://localhost:4000/api/domains/sell/?deployerid=${this.deployer._id}&domainid=${domain._id}&domainprice=${domain.price}`, {
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
                        this.domains = JSON.parse(result).domains
                    }
                }) 
            } else {
                alert(`Домен ${domain.name} уже продан. Его нельзя купить еще раз.`)
            }
        },
        refreshDomains(event, throughput) {
            if (event.key === 'Enter' || throughput) {
                this.tempDomains = this.domains
                this.tempDomains = this.tempDomains.filter(domain => domain.name.includes(this.keywords))
            }
        }
    }
}
</script>

<style scoped>

    .domainsOrder {
        width: 350px;
        height: 200px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 25px;
        box-shadow: 0px 0px 8px rgb(200, 200, 200);
        border-radius: 8px;
    }

    .domainsOrderHeader {
        margin: 15px 0px;
        font-weight: bolder;
        font-size: 24px;
        color: rgb(75, 75, 75);
    }

    .aside {
        width: 65%;
        margin: 0px 15px;
    }

    .domainsRegisterContainer {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 25px;
    }

    .domainsRegisterAction {
        border-radius: 5px;
        background-color: rgb(225, 225, 225);
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 15px;
        margin: 25px 0px;
    }

    .domainsRegisterActionHeader {
        color: rgb(200, 0, 200);
        font-weight: bolder;
        font-size: 20px;
    }

    .premimumDomains {
        display: flex;
        flex-direction: column;
    }

    .premimumDomainsHeader {
        font-weight: 700;
        font-size: 24px;
        color: rgb(100, 100, 100);
    }

    .domain {
        border-top: 1px solid rgb(200, 200, 200);
        border-bottom: 1px solid rgb(200, 200, 200);
        height: 75px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 5px 25px;
        align-items: center;
    }

    .domainAside {
        
    }

    .domainArticle {
        display: flex;
        align-items: center;
    }

    .domainsMarket {
        display: flex;
        align-items: center;
        border-radius: 25px;
        box-sizing: border-box;
        padding: 2px 15px;
        background-color: rgb(200, 255, 200);
        color: rgb(0, 150, 0);
    }

    .domainsMarketLogo {
        font-size: 12px;
        margin: 0px 15px;
        cursor: pointer;
    }

    .domainsMarketLabel {
        font-size: 12px;
    }

    .domainName {
        font-weight: 500;
        color: rgb(100, 100, 100);
        font-size: 22px;
    }

    .domainOneLevel {
        color: rgb(50, 50, 50);
    }

    .domainPrice {
        margin: 0px 10px;
        font-weight: bolder;
        font-size: 20px;
    }

    .outlineDomainMarketLogo {
        background-color: rgb(230, 230, 230);
        box-sizing: border-box;
        padding: 5px;
        color: rgb(150, 150, 150);
        cursor: pointer;
    }

</style>