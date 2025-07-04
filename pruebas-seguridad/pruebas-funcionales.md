## Pruebas Funcionales

1. **Login seguro:** Se verifica que usuarios válidos puedan autenticarse.
2. **Control de sesión:** El sistema impide volver al dashboard tras cerrar sesión.
3. **Validación de archivo:** Solo permite subir PDF.
4. **Roles:** Un usuario sin privilegios no accede al panel de admin.
5. **Inyección SQL:** El login no responde a inyecciones básicas con `' OR '1'='1'`.

