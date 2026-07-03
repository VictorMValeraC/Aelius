# Seguridad

## Propósito

Definir los principios de seguridad que regirán el desarrollo de Aelius desde su primera versión.

La seguridad no será un componente adicional, sino un requisito transversal de toda la arquitectura.

---

# Principios

- Seguridad desde el diseño (Security by Design).
- Mínimo privilegio.
- Privacidad por defecto.
- Protección de la información personal.
- Transparencia sobre el uso de datos.

---

# Autenticación

Versión 1

- Supabase Auth.
- Inicio de sesión mediante correo electrónico.
- Posibilidad futura de Google y Microsoft.

---

# Autorización

Cada usuario solamente podrá acceder a su propia información.

Nunca será posible consultar tareas o conversaciones de otro usuario.

---

# Protección de datos

Toda la comunicación utilizará HTTPS.

La información permanecerá cifrada durante el transporte y almacenada en una base de datos administrada.

---

# Secretos

Nunca se almacenarán:

- Contraseñas
- Tokens
- API Keys
- Credenciales

Todas las llaves serán gestionadas mediante variables de entorno.

---

# Backups

La base de datos deberá contar con respaldo automático.

---

# Auditoría futura

Se incorporará un registro de acciones críticas como:

- Inicio de sesión
- Eliminación de tareas
- Cambios importantes
- Exportación de información

---

# Evolución futura

- MFA
- Azure Key Vault
- Registro de auditoría
- Alertas de seguridad
