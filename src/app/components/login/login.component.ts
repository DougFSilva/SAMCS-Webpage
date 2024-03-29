import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

import { UsuarioLogado } from "src/app/models/UsuarioLogado";
import { AuthService } from "src/app/services/auth.service";
import { Autenticacao } from "src/app/models/Autenticacao";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  auth: Autenticacao = {
    username: "",
    password: "",
  };

  usuarioLogado: UsuarioLogado;

  username = new FormControl(null, Validators.minLength(4));
  password = new FormControl(null, Validators.minLength(5));

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logar() {
    this.service.authenticate(this.auth).subscribe(
      (response) => {
        this.service.successfullLogin(response);
        this.router.navigate(["home"]);
        this.toast.success("Seja bem-vindo(a)!", "Login");
      },
      (ex) => {
        this.toast.error("Usuário e/ou senha inválidas", "Error")
        console.log(ex)
      }

    );
  }
  validaCampos(): boolean {
    return this.username.valid && this.password.valid;
  }
}
