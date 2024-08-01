<?php

namespace App\Http\Controllers;

use App\Models\Benevole;
use Illuminate\Http\Request;

class BenevoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $benevoles = Benevole::all();
        $nombre = Benevole::all()->count();

        if ($nombre == 0) {
            return response()->json([
                'status' => false,
                'message' => 'aucun benevole enregistré'
            ], 404);
        } else {
            return response()->json([
                'status' => true,
                'message' => 'success',
                'data' => $benevoles,
                'number' => $nombre
            ], 200);

        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Benevole $benevole)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Benevole $benevole)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Benevole $benevole)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Benevole $benevole)
    {
        //
    }
}
