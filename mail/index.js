const app = require('express')()
const bodyParser = require('body-parser')
const mailer = require('nodemailer')
const cors = require('cors')

const sender = "teste-mailer@vinicius17-node.meu-br.com";

const transporter = mailer.createTransport({
	host: "h37.servidorhh.com",
	port: 465,
	secure: true,
	auth: {
		user: sender,
		pass: ""
	}
})

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/send-email', (req, res) => {
	const mWithEnter = req.body.messageArray;
	mWithEnter.unshift(' \n');
	const message = mWithEnter.join('\n');

	const messageFormat = `
	Name: ${req.body.name}
	E-mail: ${req.body.email}
	Phone: ${req.body.tel}
	How you found us: ${req.body.recip}



	Message: ${message}
	`;
	const email = {
		from: sender,
		to: sender,
		subject: 'Mensagem site Amorim',
		text: messageFormat
	}
	transporter.sendMail(email)
	/* For Dev
	transporter.sendMail(email, (req, res) => {
		if (error) {
			return res.status(400).send('Falhouuuuuuuuu')
		}
		return res.status(200).send('Enviado')
		
	}) */
	return res.status(200).send('Enviado')
})

app.listen(4000, console.log('Listen on 4000'))


