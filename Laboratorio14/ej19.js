class Notificacion {
  constructor(destinatario) {
    this.destinatario = destinatario;
  }

  enviar() {
    alert("Enviando notificación genérica a " + this.destinatario);
  }
}

// Subclase Email
class Email extends Notificacion {
  constructor(destinatario, asunto) {
    super(destinatario);
    this.asunto = asunto;
  }

  enviar() {
    alert("Enviando EMAIL a: " + this.destinatario + 
          "\nAsunto: " + this.asunto);
  }
}

// Subclase SMS
class SMS extends Notificacion {
  constructor(destinatario, mensaje) {
    super(destinatario);
    this.mensaje = mensaje;
  }

  enviar() {
    alert("Enviando SMS a: " + this.destinatario + 
          "\nMensaje: " + this.mensaje);
  }
}

// Subclase Push
class Push extends Notificacion {
  constructor(destinatario, titulo) {
    super(destinatario);
    this.titulo = titulo;
  }

  enviar() {
    alert("Enviando notificación PUSH a: " + this.destinatario + 
          "\nTítulo: " + this.titulo);
  }
}

function procesarNotificaciones(lista) {
  lista.forEach(notificacion => {
    notificacion.enviar();
  });
}

const notificaciones = [
  new Email("ana@gmail.com", "Bienvenida al sistema"),
  new SMS("+51987654321", "Tu código es 4821"),
  new Push("Usuario123", "Tienes una nueva alerta"),
  new Email("carlos@gmail.com", "Tu pedido ha sido enviado")
];

procesarNotificaciones(notificaciones);
