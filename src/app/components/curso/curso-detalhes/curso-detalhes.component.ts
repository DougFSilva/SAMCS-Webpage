import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { DialogComponent } from "src/app/components/dialog/dialog.component";
import { UploadFilesComponent } from "src/app/components/upload-files/upload-files.component";
import { Turma } from "src/app/models/Turma";
import { Curso } from "src/app/models/Curso";
import { Aluno } from "src/app/models/Aluno";
import { TurmaService } from "src/app/services/turma.service";
import { AlunoService } from "src/app/services/aluno.service";
import { CursoService } from "src/app/services/curso.service";

@Component({
  selector: "app-curso-detalhes",
  templateUrl: "./curso-detalhes.component.html",
  styleUrls: ["./curso-detalhes.component.css"],
})
export class CursoDetalhesComponent implements OnInit {
  id: number = null;
  curso: Curso = {
    id: null,
    modalidade: "",
    areaTecnologica: "",
    turma: [],
    imagem: "",
  };
  turmas: Turma[] = [];
  turmasFilter: Turma[] = [];
  alunos: Aluno[] = [];

  constructor(
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private service: CursoService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.findById();
    this.findAllTurmasByCursoId();
  }

  findById(): void {
    this.service.findById(this.id).subscribe(
      (response) => {
        this.curso = response;
      },
      (ex) => {
        this.toast.error(ex.error.error, "Error");
      }
    );
  }

  findAllTurmasByCursoId() {
    this.turmaService.findAllByCursoId(this.id).subscribe((response) => {
      this.turmas = response;
      this.applyFilter();
    });
  }

  deleteTurmaByIdDialog(id: number) {
    let dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed().subscribe((response) => {
      if (response == "true") {
        this.deleteTurmaById(id);
      }
        return;
    });
  }

  deleteTurmaById(id: number) {
    this.turmaService.deleteById(id).subscribe(
      () => {
        this.toast.success("Turma deletada com sucesso!", "Delete");
        this.findAllTurmasByCursoId();
      },
      (ex) => {
        if (ex.status === 403) {
          this.toast.error(
            "Você não tem autorização para essa operação",
            "Error"
          );
          return;
        }
        this.toast.error(ex.error.error, "Error");
      }
    );
  }

  moveDialog(idTurmaAtual: number, idTurmaDestino: number): void {
    let dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed().subscribe((response) => {
      if (response == "true") {
        this.move(idTurmaAtual, idTurmaDestino);
      }
        return;
    });
  }

  move(idTurmaAtual: number, idTurmaDestino: number): void {
    this.alunoService.move(idTurmaAtual, idTurmaDestino).subscribe(
      () => {
        this.toast.success("Alunos movidos com sucesso!", "Update");
      },
      (ex) => {
        this.toast.error(ex.error.error, "Error");
      }
    );
  }

  imageUpload(id: number, codigo: string): void {
    let dialog = this.dialog.open(UploadFilesComponent, {
      data: { type: "turma", id: id },
    });
    dialog.afterClosed().subscribe((response) => {
      if (response) {
        this.findAllTurmasByCursoId();
      }
    });
  }

  applyFilter() {
    var filterValue = <HTMLInputElement>document.getElementById("filter");
    if (filterValue.value == "") {
      this.turmasFilter = this.turmas;
    }
    this.turmasFilter = this.turmas.filter((turma) => {
      return turma.codigo
        .toLowerCase()
        .includes(filterValue.value.toLowerCase());
    });
  }
}
