class Cuenta {
  #saldo;

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }

  // Getter
  getSaldo() {
    return this.#saldo;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      alert("Depósito realizado: $" + monto.toFixed(2) +
            "\nSaldo actual: $" + this.#saldo.toFixed(2));
    } else {
      alert("El monto a depositar debe ser mayor a 0.");
    }
  }

  retirar(monto) {
    if (monto <= 0) {
      alert("El monto a retirar debe ser mayor a 0.");
      return;
    }

    if (monto > this.#saldo) {
      alert("Fondos insuficientes.");
    } else {
      this.#saldo -= monto;
      alert("Retiro exitoso: $" + monto.toFixed(2) +
            "\nSaldo restante: $" + this.#saldo.toFixed(2));
    }
  }

  transferir(monto, cuentaDestino) {
    if (monto <= 0) {
      alert("El monto a transferir debe ser mayor a 0.");
      return;
    }

    if (monto > this.#saldo) {
      alert("No hay suficiente saldo para transferir.");
      return;
    }

    this.#saldo -= monto;
    cuentaDestino.depositar(monto);
    alert("Transferencia de $" + monto.toFixed(2) + " realizada con éxito.");
  }
}

// Subclase: CuentaAhorro
class CuentaAhorro extends Cuenta {
  retirar(monto) {
    if (monto <= 0) {
      alert("Monto inválido.");
      return;
    }

    if (monto > this.getSaldo()) {
      alert("No puedes retirar más de lo que tienes. Saldo: $" + this.getSaldo().toFixed(2));
    } else {
      super.retirar(monto);
    }
  }
}

// Subclase: CuentaCorriente
class CuentaCorriente extends Cuenta {
  constructor(saldoInicial, limiteSobregiro = 500) {
    super(saldoInicial);
    this.limiteSobregiro = limiteSobregiro;
  }

  retirar(monto) {
    if (monto <= 0) {
      alert("Monto inválido.");
      return;
    }

    const saldoDisponible = this.getSaldo() + this.limiteSobregiro;

    if (monto > saldoDisponible) {
      alert("Excede el límite de sobregiro. Saldo disponible: $" + saldoDisponible.toFixed(2));
    } else {
      const nuevoSaldo = this.getSaldo() - monto;
      alert("Retiro realizado: $" + monto.toFixed(2) +
            "\nSaldo actual (puede ser negativo): $" + nuevoSaldo.toFixed(2));
      super.retirar(monto > this.getSaldo() ? this.getSaldo() : monto);
      if (monto > this.getSaldo()) {
        this.#ajustarSaldo(nuevoSaldo);
      }
    }
  }

  #ajustarSaldo(nuevoSaldo) {
    this.saldoInterno = nuevoSaldo;
  }
}

const ahorro = new CuentaAhorro(1000);
const corriente = new CuentaCorriente(500, 300);

alert("=== Cuenta Ahorro ===");
ahorro.retirar(1200);
ahorro.retirar(200);

alert("=== Cuenta Corriente ===");
corriente.retirar(700);

alert("=== Transferencia ===");
ahorro.transferir(100, corriente);