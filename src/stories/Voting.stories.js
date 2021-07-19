import Voting from '../components/Voting.vue'

export default {
  title: 'Tarefa-01/Voting',
  component: Voting,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Voting },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { options: args.options };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<voting :options="options">',
});

export const Election = Template.bind({});
Election.args = {
  options: [
    {name: "Nulo", votes: 10},
    {name: "Branco", votes: 5},
  ]
};

