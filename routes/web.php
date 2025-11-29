<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectInfoController;
use App\Http\Controllers\AcademicInfoController;

Route::get('/', function () {
    return view('welcome');
});


Route::middleware('auth')->group(function () {
    Route::get('/projects', [ProjectInfoController::class, 'index']);
    Route::get('/projects/store', [ProjectInfoController::class, 'store']);

    Route::get('/academic-info', [AcademicInfoController::class, 'index']);
    Route::get('/academic-info/store', [AcademicInfoController::class, 'store']);
});