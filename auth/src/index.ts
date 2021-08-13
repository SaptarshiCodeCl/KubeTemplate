import express from "express";
import mongoose from 'mongoose';

const app = express();

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




