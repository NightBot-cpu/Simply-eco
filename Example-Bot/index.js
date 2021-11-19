const { Client, Collection } = require('discord.js');

const client = new Client({
	intents: 32767
});
module.exports = client;

const SimplyEco = require('simply-eco');
client.eco = new SimplyEco(process.env['mongo_url']);

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();

// Initializing the project
require('../Example-Bot/handler/')(client);

client.login(process.env['token']);
