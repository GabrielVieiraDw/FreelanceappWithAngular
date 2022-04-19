import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalComponent implements OnInit {
  proposalOne: Proposal = new Proposal(1, 'Company A', 'https://www.linkedin.com/in/gevvieira', 'Ruby on rails', 150, 120, 15, 'gabrielvieiradw@gmail.com')

  proposalTwo: Proposal = new Proposal(2, 'Company B', 'https://www.linkedin.com/in/gevvieira', 'Ruby on rails', 150, 120, 15, 'gabrielvieiradw@gmail.com')

  proposalThree: Proposal = new Proposal(3, 'Company C', 'https://www.linkedin.com/in/gevvieira', 'Ruby on rails', 150, 120, 15, 'gabrielvieiradw@gmail.com')

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]

  constructor() { }

  ngOnInit(): void {
  }

}
