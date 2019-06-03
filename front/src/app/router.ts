import { InscriptionComponent } from './inscription/inscription.component';
// router.ts
import { Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';

import { EdacyComponent } from './edacy/edacy.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
  { path: '',
    component: InscriptionComponent
  },
  { path: 'cours',
  component: CoursComponent
},
{ path: 'contact',
  component: ContactComponent
}];
