import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { HttpClientModule } from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { NgChartsModule } from 'ng2-charts';
import { ToastrModule } from "ngx-toastr";
import {CalendarModule} from 'primeng/calendar';
import { WebcamModule } from "ngx-webcam";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { TurmasComponent } from "./components/turma/turmas/turmas.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthInterceptorProvider } from "./interceptors/auth.interceptor";
import { CursosComponent } from './components/curso/cursos/cursos.component';
import { AlunosComponent } from './components/aluno/alunos/alunos.component';
import { EgressosComponent } from './components/aluno/egressos/egressos.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { CursoCreateComponent } from './components/curso/curso-create/curso-create.component';
import { CursoUpdateComponent } from './components/curso/curso-update/curso-update.component';
import { CursoDetalhesComponent } from './components/curso/curso-detalhes/curso-detalhes.component';
import { TurmaDetalhesComponent } from './components/turma/turma-detalhes/turma-detalhes.component';
import { AlunoTurmaComponent } from './components/aluno/aluno-turma/aluno-turma.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { TurmaUpdateComponent } from './components/turma/turma-update/turma-update.component';
import { TurmaCalendarioComponent } from './components/turma/turma-calendario/turma-calendario.component';
import { AlunoDetalhesComponent } from './components/aluno/aluno-detalhes/aluno-detalhes.component';
import { OcorrenciaCreateComponent } from './components/aluno/ocorrencia-create/ocorrencia-create.component';
import { OcorrenciaUpdateComponent } from './components/aluno/ocorrencia-update/ocorrencia-update.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { EvadidosComponent } from './components/aluno/evadidos/evadidos.component';
import { PhotoSaveComponent } from './components/aluno/photo-save/photo-save.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { RelatorioPontoComponent } from './components/aluno/relatorio-ponto/relatorio-ponto.component';
import { RelatorioOcorrenciaComponent } from './components/aluno/relatorio-ocorrencia/relatorio-ocorrencia.component';
import { CrachaComponent } from './components/aluno/cracha/cracha.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuariosComponent } from './components/usuario/usuarios/usuarios.component';
import { AlunoImportComponent } from './components/aluno/aluno-import/aluno-import.component';
import { FuncionariosComponent } from './components/funcionario/funcionarios/funcionarios.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDetalhesComponent } from './components/funcionario/funcionario-detalhes/funcionario-detalhes.component';
import { PhotoSaveFuncionarioComponent } from './components/funcionario/photo-save-funcionario/photo-save-funcionario.component';
import { RelatorioPontoFuncionarioComponent } from './components/funcionario/relatorio-ponto-funcionario/relatorio-ponto-funcionario.component';
import { CrachaFuncionarioComponent } from './components/funcionario/cracha-funcionario/cracha-funcionario.component';
import { OperacaoComponent} from './components/operacao/operacao.component'
import { AlarmeComponent } from './components/alarme/alarme.component';
import { AcessoComponent } from './components/acesso/acesso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TurmasComponent,
    LoginComponent,
    CursosComponent,
    AlunosComponent,
    EgressosComponent,
    AlunoCreateComponent,
    AlunoUpdateComponent,
    CursoCreateComponent,
    CursoUpdateComponent,
    CursoDetalhesComponent,
    TurmaDetalhesComponent,
    AlunoTurmaComponent,
    TurmaCreateComponent,
    TurmaUpdateComponent,
    TurmaCalendarioComponent,
    AlunoDetalhesComponent,
    OcorrenciaCreateComponent,
    OcorrenciaUpdateComponent,
    DialogComponent,
    EvadidosComponent,
    PhotoSaveComponent,
    UploadFilesComponent,
    RelatorioPontoComponent,
    RelatorioOcorrenciaComponent,
    CrachaComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuariosComponent,
    AlunoImportComponent,
    FuncionariosComponent,
    FuncionarioCreateComponent,
    FuncionarioUpdateComponent,
    FuncionarioDetalhesComponent,
    PhotoSaveFuncionarioComponent,
    RelatorioPontoFuncionarioComponent,
    CrachaFuncionarioComponent,
    OperacaoComponent,
    AlarmeComponent,
    AcessoComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      //pré configurações
      timeOut: 4000,
      closeButton: true,
      progressBar: true

    }),
    MatMenuModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatBadgeModule,
    WebcamModule,
    NgChartsModule

  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
