import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { VoteCardComponent } from "src/app/vote-card/vote-card.component";
import { ResultsComponent } from 'src/app/results/results.component';
import { VotingComponent } from 'src/app/voting/voting.component';
import { CommonModule } from '@angular/common';

export default {
    title: 'Voting Components/Vote Card',
    component: VoteCardComponent,
    decorators: [
        moduleMetadata({
            declarations: [ResultsComponent, VotingComponent],
            imports: [CommonModule]
        })
    ],
    argTypes: {
        state: {
            options: ['open', 'closed'],
            control: {type: 'select'},
        }
    }
} as Meta;

const Template: Story<VoteCardComponent> = (args) => ({
    props: args,
})

export const Eleicao = Template.bind({});
export const SimNao = Template.bind({});

Eleicao.args = {
    title: 'Eleição 2022',
    state: 'closed',
    options: [
        {name: 'Nulo', votes: 15}, {name: 'Branco', votes: 5}, {name: 'Candidato', votes: 10}
    ]
};
SimNao.args = {
    title: 'Sim ou Não?',
    state: 'open',
    options: [
        {name: 'Sim', votes: 0}, {name: 'Não', votes: 0}
    ]
};