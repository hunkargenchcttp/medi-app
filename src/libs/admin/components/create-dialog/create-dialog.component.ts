import {Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireDatabase } from  '@angular/fire/database'; 
import { AppointmentFormService } from 'src/libs/main-module/services/appointment-form-services/appointment-form.service'
import { ListAppointmentService } from '../../services/list-appointment-services/list-appointment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

  appointments = []

  appointmentForm = this.formBuilder.group({
    fullName: this.formBuilder.control(null, [Validators.required]),
    email: this.formBuilder.control(null, [Validators.email]),
    mobile: this.formBuilder.control(null, [Validators.required, Validators.minLength(8)]),
    city: this.formBuilder.control(null),
    sex: this.formBuilder.control(null),
    job: this.formBuilder.control(null),
    appointmentDate: this.formBuilder.control(null, [Validators.required]),
    isSure: this.formBuilder.control(null, [Validators.required]),
  })

  subscriptions: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private db: AngularFireDatabase, private service: AppointmentFormService, private listService: ListAppointmentService, private router: Router) { }

  jobs = [
    {id:3, value: 'Öğrenci'},
    {id:2, value: 'Özel Sektör'},
    {id:1, value: 'Kamu Çalışanı'},
  ]

  handleAddClicked() {
    this.listService.addAdminAppointment(this.appointmentForm.value);
  }

  ngOnInit(): void {
    
  }
}

