#!/usr/bin/env node
/*
	process.env
*/
process.env.PATH = __dirname;
process.env.PORT = 5000;
const DEV = process.env.NODE_ENV === "development";
/*
	global.rqr
*/
global.rqr = global.rqr || {};
global.rqr.express = require("express");
global.rqr.express_parser = require("body-parser");
/*
global.server
*/
global.server = global.rqr.express();
global.server.use(function(request, response, next) {
	response.setHeader("Access-Control-Allow-Origin", "*"); // CHANGE THIS BEFORE ADDING SENSITIVE DATA!
	response.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	response.setHeader("Access-Control-Allow-Headers", "Content-Type, Cache-Control, Pragma, Authorization, Content-Length, X-Requested-With, X-Host");
	if ("OPTIONS" == request.method) {
		response.writeHead(200);
		response.end();
		return;
	} else {
		next();
		return;
	}
});
global.server.use(global.rqr.express_parser.json());
global.server.use(global.rqr.express_parser.urlencoded({ extended: false }));

/************************************************************************************
	ENDPOINTS:
*/
/*
	API: 500 Error
*/
global.server.use(function(err, req, response, next) {
	let data = { error: 1, message: err.message };
	if (DEV) {
		data.stack = err.stack;
	}
	response.setHeader("Content-Type", "application/json");
	response.writeHead(500);
	response.write(JSON.stringify(data, null, "\t"));
	response.end();
});
/*
	API: POST
*/
/*	
	webhook from APIFY after a site crawl has completed
*/
global.server.post("/calculate", function(request, response) {
	response.setHeader("Content-Type", "application/json");
	response.writeHead(200);
	response.write(
		JSON.stringify({
			lifetimeManufacturer: 10,
			lifetimeCalculated: [9, 8],
			lifetimeCalculatedProb: [91.02, 87.58],
			lifetimeCorrected: 10,
			lifetimeCorrectedProb: 100,
			corrosionInhibitor: 0.3
		})
	);
	response.end();
});

/*
SERVE
*/
module.exports = global.server;

/**
 * Module dependencies.
 */

var debug = require("debug")("api:server");
var http = require("http");

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "1080");
global.server.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(global.server);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	console.log("Listening on " + bind);
}
