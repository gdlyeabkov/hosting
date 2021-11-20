const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const fs = require('fs')
const bcrypt = require('bcrypt')

const saltRounds = 10

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const nodemailer = require("nodemailer")

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gdlyeabkov@gmail.com',
        pass: 'reversepassword'
    }
})

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/sites?retryWrites=true&w=majority`

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const DeployerSchema = new mongoose.Schema({
    email: String,
    phone: String,
    password: String,
    amount: {
        type: Number,
        default: 0
    },
    sites: [mongoose.Schema.Types.Map],
    domains: [mongoose.Schema.Types.Map],
    created: {
        type: Date,
        default: Date.now
    }
}, { collection : 'mydeployers' })

const DeployerModel = mongoose.model('DeployerModel', DeployerSchema)

const SiteSchema = new mongoose.Schema({
    domain: String,
    deployer: String,
    price: Number,
    created: {
        type: Date,
        default: Date.now
    }
}, { collection : 'mysites' })

const SiteModel = mongoose.model('SiteModel', SiteSchema)

const DomainSchema = new mongoose.Schema({
    name: String,
    isSell: {
        type: Boolean,
        default: true
    },
    price: Number,
    created: {
        type: Date,
        default: Date.now
    }
}, { collection : 'mydomains' })

const DomainModel = mongoose.model('DomainModel', DomainSchema)

app.get('/api/sites/get', (req, res)=>{
        
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.json({ status: 'OK' })

})

app.get('/api/deployers/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = DeployerModel.find({  })
    query.exec((err, allDeployers) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        
        let deployerExists = false

        if(allDeployers >= 1) {
            allDeployers.forEach(deployer => {
                if(deployer.email === req.query.deployeremail || deployer.phone === req.query.deployerphone){
                    deployerExists = true
                }
            })
        }
        if(deployerExists){
            return res.json({ status: 'Error' })
        } else {
            let encodedPassword = "#"
            const salt = bcrypt.genSalt(saltRounds)
            let alphabet = "abcdefghjiklmnoprstuvwxyz"
            generatedPassword = ''
            for(let i = 0; i < Math.floor(Math.random() * 10); i++){
                let randomIndex = Math.floor(Math.random() * alphabet.length)
                let randomLetter = alphabet[randomIndex]
                generatedPassword += randomLetter
            }        
            encodedPassword = bcrypt.hashSync(generatedPassword, saltRounds)
            const newDeployer = new DeployerModel({ email: req.query.deployeremail, phone: req.query.deployerphone, password: encodedPassword })
            newDeployer.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    let mailOptions = {
                        from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                        to: `${req.query.deployeremail}`,
                        subject: `Hosting прислал вам пароль для входа`,
                        html: `<h3>Никому не сообщайте пароль</h3><p>Ваш пароль: ${generatedPassword}</p>`,
                    }
                    transporter.sendMail(mailOptions, function (err, info) {
                        if (err) {
                            return res.json({ "status": "Error" })
                        } else {
                            return res.json({ status: 'OK' })
                        }
                    })
                }
            })
        }
    })
})

app.get('/api/domains/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = DomainModel.find({  })
    query.exec((err, allDeployers) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        
        let domainExists = false

        if(allDomains >= 1) {
            allDomains.forEach(domain => {
                if(domain.name === req.query.domainname){
                    domainExists = true
                }
            })
        }
        if(domainExists){
            return res.json({ status: 'Error' })
        } else {
            const newDomain = new DomainModel({ name: req.query.domainname, deployer: req.query.deployerid, price: Number(req.query.domainprice) })
            newDomain.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    return res.json({ status: 'OK' })
                }
            })
        }
    })
})

app.get('/api/sites/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = SiteModel.find({  })
    query.exec((err, allSites) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        
        let siteExists = false

        if(allSites >= 1) {
            allSites.forEach(site => {
                if(site.domain === req.query.sitedomain){
                    siteExists = true
                }
            })
        }
        if(siteExists){
            return res.json({ status: 'Error' })
        } else {
            const newSite = new SiteModel({ domain: req.query.sitedomain, deployer: req.query.deployerid, price: Number(req.query.siteprice) })
            newSite.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    let mailOptions = {
                        from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                        to: `${deployer.email}`,
                        subject: `Hosting поздравляет вас с запуском сайта ${req.query.sitename}`,
                        html: `<h3>Вы запустили сайт</h3><p>Сайт ${req.query.sitename} успешно запущен</p>`,
                    }
                    transporter.sendMail(mailOptions, function (err, info) {
                        if (err) {
                            return res.json({ "status": "Error" })
                        } else {
                            return res.json({ status: 'OK' })
                        }
                    })
                }
            })
        }
    })
})

app.get('/api/deployers/check', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    console.log(`req.query.deployeremail: ${req.query.deployeremail}; req.query.deployerpassword: ${req.query.deployerpassword};`)
    let queryBefore = DeployerModel.find({ email: { $in:req.query.deployeremail } })
    queryBefore.exec((err, allDeployers) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        if(allDeployers.length >= 1){
            let query =  DeployerModel.findOne({ 'email': req.query.deployeremail }, function(err, deployer){
                if (err){
                    return res.json({ "status": "Error" })
                } else {
                    const passwordCheck = bcrypt.compareSync(req.query.deployerpassword, deployer.password) && req.query.deployerpassword !== ''
                    if(deployer !== null && deployer !== undefined && passwordCheck){
                        return res.json({ "status": "OK", "deployer": deployer })
                    } else {
                        return res.json({ "status": "Error" })
                    }
                }
            })    
        } else if(allDeployers.length <= 0){
            return res.json({ "status": "Error" })
        }
    })
})


app.get('**', (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    console.log('любой маршрут')
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)
})

// const port = process.env.PORT || 8080
const port = 4000

app.listen(port)