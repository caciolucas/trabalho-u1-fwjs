import VoteCard from '../VoteCard';

export default {
    component: VoteCard,
    title: 'Voting Components/VoteCard',
    argTypes: {
        options: 'array',
        state: {
            options: ['open', 'closed'],
            control: {type: 'select'}
        }

    }
};

const Template = (args) => <VoteCard {...args}/>


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