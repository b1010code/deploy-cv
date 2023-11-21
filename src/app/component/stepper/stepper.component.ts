import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent {
  cards = [
    {
      content: 'Simplifique backups e a recuperação com um serviço completamente gerenciado em baseado em política'
    },
    {
      content: 'Crie backups imutáveis para manter a proteção contra incidentes acidentais ou criminosos'
    },
    {
      content: 'Monitore e comprove a conformidade de proteção de dados pelo uso de relatórios prontos para auditoria'
    }
  ];

}
