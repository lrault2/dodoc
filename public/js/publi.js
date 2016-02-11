/* VARIABLES */
var socket = io.connect();

var sessionId;
//get current session
var currentSession = app.session;
//get current project
var currentProject = app.projet;
//get current publi
var currentPubli = app.publi;

/* sockets */
socket.on('connect', onSocketConnect);
socket.on('error', onSocketError);
socket.on('sendPubliData', sendPubliData);


jQuery(document).ready(function($) {

	init();
});

function init(){


}

function sendPubliData(data){
	$('.publi-title').html(data.name);
	$('.publi-content').html(data.html);
}

/* sockets */
function onSocketConnect() {
	sessionId = socket.io.engine.id;
	console.log('Connected ' + sessionId);
	socket.emit('displayPubli', {session: currentSession, project: currentProject, publi: currentPubli});
};

function onSocketError(reason) {
	console.log('Unable to connect to server', reason);
};