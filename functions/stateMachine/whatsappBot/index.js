// enum Preset {
// 	HELLO = 'Hi'
// };

let reply;

function getReply(query) {
	console.log('getReply', query);
	switch (query) {
		case "Hi":
			reply = 'hi, My name is MrChemist.I am a bot.';
			break;
		default:
			reply = 'Please try again.'
	};
	return reply;
};


module.exports = getReply;