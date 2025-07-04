<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    // ❌ Versión vulnerable (SQLi)
    public function loginInseguro(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $user = DB::select("SELECT * FROM users WHERE email = '$email' AND password = '$password'");

        if ($user) {
            Auth::loginUsingId($user[0]->id);
            return redirect('/home');
        }

        return back()->withErrors(['error' => 'Credenciales incorrectas']);
    }

    // ✅ Versión segura
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return redirect('/home');
        }

        return back()->withErrors(['error' => 'Credenciales incorrectas']);
    }
}
