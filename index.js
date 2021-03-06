const Recaptcha = require('recaptcha').Recaptcha

const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY',
    PRIVATE_KEY = 'YOUR_PRIVATE_KEY'

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'sites')
    },
    filename: function (req, file, cb) {
    //   cb(null, file.originalname)
        cb(null, `${req.query.sitedomain}.html`)
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

const connectionParams = {
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
        default: false
    },
    price: Number,
    created: {
        type: Date,
        default: Date.now
    }
}, { collection : 'mydomains' })

const DomainModel = mongoose.model('DomainModel', DomainSchema)

// app.get('/api/sites/get', (req, res) => {
        
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
//     return res.json({ status: 'OK' })

// })

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
                        subject: `Hosting ?????????????? ?????? ???????????? ?????? ??????????`,
                        html: `<h3>???????????? ???? ?????????????????? ????????????</h3><p>?????? ????????????: ${generatedPassword}</p>`,
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

app.get('/api/domains/create', async (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = DomainModel.find({  })
    query.exec((err, allDomains) => {
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
            const newDomain = new DomainModel({ name: req.query.domainname, price: Number(req.query.domainprice) })
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
            const newSite = new SiteModel({ domain: req.query.sitedomain, deployer: req.query.deployerid })
            newSite.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    let query =  DeployerModel.findOne({ '_id': req.query.deployerid }, function(err, deployer){
                        if (err){
                            return res.json({ "status": "Error" })
                        } else {
                            let mailOptions = {
                                from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                                to: `${deployer.email}`,
                                subject: `Hosting ?????????????????????? ?????? ?? ???????????????? ?????????? ${req.query.sitename}`,
                                html: `<h3>???? ?????????????????? ????????</h3><p>???????? ${req.query.sitename} ?????????????? ??????????????</p>`,
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
        }
    })
})

app.get('/api/deployers/check', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
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

app.get('/api/domains/sell', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = DeployerModel.findOne({ '_id': req.query.deployerid }, function(err, deployer){
        if (err){
            return res.json({ status: 'OK' })
        } else {
            if(deployer != null && deployer != undefined) {
                if (deployer.amount >= Number(req.query.domainprice)) {
                    DeployerModel.updateOne({ _id: req.query.deployerid }, 
                    {
                        "$push": { 
                            domains: [
                                {
                                    id: req.query.domainid
                                }
                            ]
                        },
                        "$inc": { "amount": -Number(req.query.domainprice) }
                    }, (err, deployer) => {
                        if (err) {
                            return res.json({ "status": "Error" })        
                        }
                        DomainModel.updateOne({ _id: req.query.domainid },
                            {
                                '$set': { isSell: true }
                            },
                        (err, domain) => {
                            if (err) {
                                return res.json({ status: 'Error' })
                            }
                            return res.json({ "status": "OK" })
                        })
                        
                    })
                } else {
                    return res.json({ "status": "Error" })
                }
            } else {
                return res.json({ "status": "Error" })
            }
        }
    })
    
})

app.get('/api/domains/all', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = DomainModel.find({  })
    query.exec((err, allDomains) => {
        if (err){
            return res.json({ "status": "Error" })
        } else  {
            let query = DeployerModel.findOne({ _id: req.query.deployerid })
            query.exec((err, deployer) => {
                if (err) {
                    return res.json({ status: 'Error' })
                } else {
                    return res.json({ status: 'OK', domains: allDomains, deployer: deployer })
                }
            })
        }
    })

})

app.get('/api/recaptcha', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let recaptcha = new Recaptcha(PUBLIC_KEY, PRIVATE_KEY)
    console.log(`recaptcha: ${recaptcha.toHTML()}`)
    return res.json({ status: 'OK', recaptcha: recaptcha.toHTML() })
})

app.post('/api/sites/upload', upload.single('myFile'), (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    if (!req.file) {
        console.log('???? ???????????????????? ??????????')
        return res.json({ status: 'Error' })
    }
    console.log('?????????????????????? ??????????')
    
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
            const newSite = new SiteModel({ domain: req.query.sitedomain, deployer: req.query.deployerid })
            newSite.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    let query =  DeployerModel.findOne({ '_id': req.query.deployerid }, function(err, deployer){
                        if (err){
                            return res.json({ "status": "Error" })
                        } else {
                            let mailOptions = {
                                from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                                to: `${deployer.email}`,
                                subject: `Hosting ?????????????????????? ?????? ?? ???????????????? ?????????? ${req.query.sitename}`,
                                html: `<h3>???? ?????????????????? ????????</h3><p>???????? ${req.query.sitename} ?????????????? ??????????????</p>`,
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
        }
    })
    
    DeployerModel.updateOne({ _id: req.query.deployerid }, 
        { 
            "$push": { 
                sites: [
                    {
                        id: req.query.sid
                    }
                ]
                    
            }

        }, (err, deployer) => {
            if(err){
                return res.json({ "status": "Error" })        
            }
            return res.redirect('http://localhost:8080/')
    
    })
})

app.get('/api/sites/get', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    // return res.sendFile(__dirname + `/sites/index.html`)
    return res.sendFile(__dirname + `/sites/${req.query.domain}.html`)


})

app.get('/api/domains/get', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryBefore = DomainModel.find({ _id: { $in: req.query.domainsids.split(',') } })
    queryBefore.exec((err, allDomains) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        return res.json({ status: 'OK', domains: allDomains })
    })

})

app.get('**', (req, res) => { 
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    console.log('?????????? ??????????????')
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)
})

// const port = process.env.PORT || 8080
const port = 4000

app.listen(port)