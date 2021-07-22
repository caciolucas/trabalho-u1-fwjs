import Voting from '../Voting';

export default {
    component: Voting,
    title: 'Voting Components/Voting',
    argTypes: {
        onVote: {action: 'vote'}
    }
};

const Template = (args) => <Voting {...args}/>


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