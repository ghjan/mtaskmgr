import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {DirectivesModule} from '../directive/directives.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageListSelectComponent} from './image-list-select/image-list-select.component';
import {AgeInputComponent} from './age-input/age-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    DirectivesModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    DirectivesModule,
    ImageListSelectComponent,
    AgeInputComponent,
  ],
  declarations: [
    ConfirmDialogComponent,
    ImageListSelectComponent,
    AgeInputComponent,
  ],
  entryComponents: [ConfirmDialogComponent],
})

export class SharedModule {


}
