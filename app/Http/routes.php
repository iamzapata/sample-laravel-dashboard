<?php

// Admin Dash Routes

Route::group(['prefix' => 'admin/dashboard', 'middleware' => ['web']], function () {

    Route::get('/', 'Admin\DashboardController@index');
    Route::get('/accounts', 'Admin\DashboardController@accounts');
    Route::get('/users', 'Admin\DashboardController@users');
    Route::get('/system-notifications', 'Admin\DashboardController@systemNotifications');
    Route::get('/plans', 'Admin\DashboardController@plans');
    Route::get('/plant-library', 'Admin\DashboardController@plantLibrary');
    Route::get('/culinary-plant-library', 'Admin\DashboardController@culinaryPlantLibrary');
    Route::get('/pest-library', 'Admin\DashboardController@pestLibrary');
    Route::get('/procedure-library', 'Admin\DashboardController@procedureLibrary');
    Route::get('/website-pages', 'Admin\DashboardController@websitePages');
    Route::get('/categories', 'Admin\DashboardController@categories');
    Route::get('/journal', 'Admin\DashboardController@journal');
    Route::get('/glossary', 'Admin\DashboardController@glossary');
    Route::get('/links', 'Admin\DashboardController@links');
    Route::get('/user-suggestions', 'Admin\DashboardController@userSuggestions');
    Route::get('/whats-this', 'Admin\DashboardController@whatsThis');
    Route::get('/general-messages', 'Admin\DashboardController@generalMessages');
    Route::get('/payment-connection', 'Admin\DashboardController@paymentConnection');
    Route::get('/apis-connection', 'Admin\DashboardController@apisConnection');
    Route::get('/profile', 'Admin\DashboardController@profile');
    Route::get('/settings', 'Admin\DashboardController@settings');
    Route::get('/logout', 'Auth\AuthController@logout');

});

// User Dash Routes

Route::group(['prefix' => 'user/dashboard', 'namespace' => 'User', 'middleware' => ['web']], function () {

    Route::get('/', 'DashboardController@index');

});

// Web App Routes
Route::group(['middleware' => 'web'], function () {

    // Home Route
    Route::get('/','HomeController@index');

    Route::post('/login', 'Auth\AuthController@postLogin');
    Route::get('/login', 'Auth\AuthController@showLoginForm');
    Route::get('/logout', 'Auth\AuthController@logout');
    Route::post('/password/email', 'Auth\PasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\PasswordController@reset');
    Route::get('/password/reset/{token?}', 'Auth\PasswordController@showResetForm');
    Route::get('/register', 'Auth\AuthController@showRegistrationForm');
    Route::post('/register', 'Auth\AuthController@register');

});

// Api Routes
Route::group(['prefix' => 'api/v1', 'namespace' => 'Api\V1',], function() {

});