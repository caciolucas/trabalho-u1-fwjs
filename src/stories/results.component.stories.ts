import { Story, Meta } from '@storybook/angular/types-6-0';
import { ResultsComponent } from 'src/app/results/results.component';

export default {
  title: 'Voting Components/Result',
  component: ResultsComponent,
} as Meta;

const Template: Story<ResultsComponent> = (args) => ({
  props: args,
});


export const Eleicao = Template.bind({});
export const SimNao = Template.bind({});

Eleicao.args = {
    options: [
        {name: 'Nulo', votes: 15}, {name: 'Branco', votes: 5}, {name: 'Candidato', votes: 10}
    ]
};
SimNao.args = {
    options: [
        {name: 'Sim', votes: 0}, {name: 'Não', votes: 0}
    ]
};