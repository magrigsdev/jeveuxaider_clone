<?php 
use App\Http\Controllers\ActiviteController;
use App\Http\Controllers\BenevoleController;
use App\Http\Controllers\MissionController;
use App\Http\Controllers\ProfessionController;

//benevoles
Route::apiResource('/benevoles', BenevoleController::class,);
Route::any('/benevoles/benevoles', [BenevoleController::class, 'index']);
//profession
Route::apiResource('profession', ProfessionController::class);
//mission
Route::apiResource('mission', MissionController::class);
//activite
Route::apiResource('activite', ActiviteController::class);