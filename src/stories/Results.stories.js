import Results from '../Results';

export default {
    component: Results,
    title: 'Voting Components/Results',
    argTypes: {onVote: {action: 'vote'}}
};

const Template = (args) => <Results {...args}/>


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