<?php

require 'libs/php/Slim/Slim.php';

$app = new Slim(array(
	'templates.path' => 'src/php/views'
));

$app->get('/', function() use($app) {
	$app->render('main.php');
});

$app->get('/data', function() use($app) {
    $data = array(1, 2, 3);

	$response = $app->response();
    $response->header('Cache-Control', 'no-cache, must-revalidate');
    $response->header('Expires', 'Mon, 26 Jul 1997 05:00:00 GMT');
    $response->header('Content-type', 'application/json');

    echo json_encode($data);
});

$app->run();