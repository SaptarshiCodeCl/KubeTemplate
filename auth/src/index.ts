import express from "express";
import mongoose from 'mongoose';

const app = express();
app.set('trust proxy', true); //needed step since this is behind the nginx ingress controller
app.use(express.json());


app.get('/api/users/currentuser', (req, res) => {
	res.send('Hi there');
})

const startup = async () => {
	try {
		/**
		 * This is harmless now
		 */
		await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
		
	} catch (error) {
		
		console.log(error);
	}

	app.listen(3000, () => {
		console.log(`listening on port 3000!!!`);
	});
}

startup();




