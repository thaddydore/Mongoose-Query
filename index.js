const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/mongooseApp", { useNewurlParser: true })
	.then(() => {
		console.log("connected");
	})
	.catch(err => {
		console.log("could not connect");
	});

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String },
	password: { type: String },
	age: Number,
	skill: []
});

const User = mongoose.model("user", userSchema);
User.create({
	name: "Jude Nwafor",
	password: "calcic",
	age: 87,
	skill: ["Html", "javascript", "css", 'react']
})
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	});

User.find({}, (err, found) => {
	if (err) {
		console.log(err)
	} else {
		console.log(found)
	}
})

User.findById("5d9da6cf49bd1312526a65a3", (err, singleRec) => {
	if (singleRec) {
		console.log(singleRec);
		console.log(`This is record with an id of ${singleRec}`);
	} else {
		console.log(err);
	}
});

User.findOne({name: 'Jude Nwafor'}, {password: '123'}, (err, numberOne) => {
	if (err) {
		console.log(err);
	} else {
		console.log(numberOne);
	}
});

User.countDocuments({}, (err, number) => {
	if (err) {
		console.log(err)
	} else {
		console.log(`Number of records in the database is ${number}`)
	}
})

User.where('password').eq('123').exec((err, users) => {
	if (err) {
		console.log(err)
	} else {
		console.log(users)
	}
});

User.find({ 'name': { $eq: 'Micheal Smith' } }, (err, here) => {
	if (err) {
		console.log(err)
	} else {
		console.log(here)
	}
});

User.find({ 'age': { $gte: 40 } }, (err, here) => {
	if (err) {
		console.log(err)
	} else {
		console.log(here)
	}
});

User.findOne({ $or: [{ name: 'Gbengabytty' }, { _id: "5d9da6cf49bd1312526a65a3" }, { password: '123' }] },
	(err, result) => {
		if (err) {
		console.log(err)
		} else {
			console.log(result)
	}
})

User.findOneAndUpdate({ name: 'Jude Nwafor' }, { $set: { name: 'kelvin' } },
	{ new: true }, (err, updated) => {
		if (err) {
		console.log(err)
		} else {
			console.log(updated)
	}
})

User.findOneAndDelete({}, (err, foundOne) => {
	if (err) {
		console.log(err)
	} else {
		console.log(foundOne)
	}
});

User.findByIdAndDelete("5d9da6cf49bd1312526a65a3", (err, foundOne) => {
	if (err) {
		console.log(err)
	} else {
		console.log(foundOne)
	}
})