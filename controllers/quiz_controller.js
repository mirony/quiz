//quizes question
exports.question = function(req, res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
}

//quizes answer
exports.answer = function(req, res) {
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Bravo!'});
	}
	
	else{
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
}