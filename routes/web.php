<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/contact', function () {
    return Inertia::render('Contact'); 
});
Route::post('/contact', [ContactController::class, 'submit']); 


require __DIR__.'/auth.php';
