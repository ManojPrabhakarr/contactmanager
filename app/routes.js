var Nerd = require('./models/Nerd');
var mongoose = require('mongoose');
var mongo = require('mongojs');
var mongoConn = mongo('contactManager', ['contacts']);
var fs = require('fs');
var Schema = mongoose.Schema;
//var insert = require('./models/insert');

module.exports = function(app) {
	app.post('/insert', function(req, res) {
		mongoConn.contacts.insert(req.body, function (err, doc) {
            if (err) console.log("Error: " + err);
			console.log(req.body);
			res.end();
        });
	    
	});
	app.post('/update', function(req, res) {
		mongoConn.contacts.update({_id: mongo.ObjectId(req.body.id)},req.body, function (err, doc) {
            if (err) console.log("Error: " + err);
			console.log(req.body.id);
			res.end();
        });	    
	});
	app.post('/delete', function(req, res) {
		mongoConn.contacts.remove({_id: mongo.ObjectId(req.body.id)}, function (err, doc) {
            if (err) console.log("Error: " + err);
			console.log(req.body.id);
			res.end();
        });	    
	});
	app.get('/getallcontactcount', function(req, res) {
        mongoConn.contacts.count({}, function(err, doc) {
		    	res.send(JSON.stringify(doc));
		});
	});
	app.get('/getfamilycontactcount', function(req, res) {
        mongoConn.contacts.count({"group": "family"}, function(err, doc) {
		    	res.send(JSON.stringify(doc));
		});
	});
	app.get('/getfriendscontactcount', function(req, res) {
        mongoConn.contacts.count({"group": "friends"}, function(err, doc) {
		    	res.send(JSON.stringify(doc));
		});
	});
	app.get('/getotherscontactcount', function(req, res) {
        mongoConn.contacts.count({"group": "others"}, function(err, doc) {
		    	res.send(JSON.stringify(doc));
		});
	});
	app.get('/getcontactdetails', function(req, res) {
        mongoConn.contacts.find({}, function(err, doc) {
		    	res.send(JSON.stringify(doc));
		});
	});

	app.get('/getfamilycontactdetails', function(req, res) {
        mongoConn.contacts.find({"group": "family"}, function(err, doc) {
		    	res.send(JSON.stringify(doc));
		});
	});
	app.get('/getfriendscontactdetails', function(req, res) {
        mongoConn.contacts.find({"group": "friends"}, function(err, doc) {
		    	res.send(JSON.stringify(doc));
		});
	});
	app.get('/getotherscontactdetails', function(req, res) {
        mongoConn.contacts.find({"group": "others"}, function(err, doc) {
		    	res.send(JSON.stringify(doc));
		});
	});

	app.get('/getcontactdetailsbyid', function(req, res) {
		var editid = req.query.id;
        mongoConn.contacts.findOne({_id: mongo.ObjectId(editid)}, function(err, doc) {
        		console.log(mongo.ObjectId(editid));
		    	res.send(JSON.stringify(doc));
		    	console.log(doc);
		});
	});
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
};

