var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var r = require("rethinkdbdash")({
	servers: [
		{
			host: "localhost",
			port: 28015,
		},
	],
});

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
	r.db("odevbes")
		.table("notlar")
		.then((notlar) => {
			res.status(200).send({
				message: "Başarılı",
				code: 200,
				payload: notlar,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
				code: 500,
				payload: err,
			});
		});
});

app.post("/", async (req, res) => {
	const newNote = req.body;
	r.db("odevbes")
		.table("notlar")
		.insert(newNote)
		.then((result) => {
			res.status(201).send({
				message: "Not eklendi",
				code: 201,
				payload: result,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
				code: 500,
				payload: err,
			});
		});
});

app.delete("/:id", async (req, res) => {
	const noteId = req.params.id;
	r.db("odevbes")
		.table("notlar")
		.get(noteId)
		.delete()
		.then((result) => {
			res.status(200).send({
				message: "Not silindi",
				code: 200,
				payload: result,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
				code: 500,
				payload: err,
			});
		});
});

app.put("/:id", async (req, res) => {
	const noteId = req.params.id;
	const updatedNote = req.body;
	r.db("odevbes")
		.table("notlar")
		.get(noteId)
		.update(updatedNote)
		.then((result) => {
			res.status(200).send({
				message: "Not güncellendi",
				code: 200,
				payload: result,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
				code: 500,
				payload: err,
			});
		});
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
