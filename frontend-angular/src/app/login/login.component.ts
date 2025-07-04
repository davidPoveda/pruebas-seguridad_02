import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorArchivo: string = '';

  validarArchivo(event: any): void {
    const archivo = event.target.files[0];
    const tiposPermitidos = ['application/pdf'];

    if (!tiposPermitidos.includes(archivo.type)) {
      this.errorArchivo = 'Tipo de archivo no permitido. Solo PDF.';
    } else {
      this.errorArchivo = '';
      // Procesar el archivo aquí
    }
  }

  // ❌ Eval inseguro
  ejecutarInseguro(cadena: string) {
    const resultado = eval(cadena);
    console.log(resultado);
  }

  // ✅ Eval seguro
  ejecutarSeguro(jsonString: string) {
    try {
      const resultado = JSON.parse(jsonString);
      console.log(resultado);
    } catch (e) {
      console.error('JSON inválido');
    }
  }
}
