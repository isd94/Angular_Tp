import { InscriptionService } from './../inscription.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
talents: any[]= [];
talent= {
   'name' : '',
   'prenom': '',
   'ecole': 'edacy',
   'telephone': '',
   'adresse': ''
};
ecoles: any[]= [];
ecole= '';
  constructor(private inscriptionService: InscriptionService) { }

  ngOnInit() {
    this.inscriptionService.getEcoles().subscribe(data => {
      this.ecoles = data;
    });
      this.inscriptionService.getTalent().subscribe(data => {
        this.talents = data;
        console.log(data);
      });
  }
  save() {
    console.log(this.talent);
    this.talent.ecole = this.ecole;
     this.talents.push(this.talent);
     this.inscriptionService.saveTalent(this.talent).subscribe(data => {
        console.log(data);
     });
  }
  onChange(ecole) {
    this.talent.ecole = ecole;
      console.log( this.talent.ecole );
  }
}
