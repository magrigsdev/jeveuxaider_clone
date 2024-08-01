<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Benevole extends Model
{
    use HasFactory;
    protected $fillable = [
        'prenom','nom',
        'code_postal', 'tel',
        'tel_fixe','date_de_naissance',
        'motivation'
    ];
}
