<template>
  <div>
    <dropdown-question
      :question="question" v-if="this.$props.question.type === 'dropdown'" />
    <multiple-choise-question
      :question="question" v-else-if="this.$props.question.type === 'multiple'" />
    <table-question
      :question="question"
      v-else-if="this.$props.question.type === 'table'"/>
    <single-choise-question
      :question="question" v-else/>
  </div>
</template>

<script>
import MultipleChoiseQuestion from '@/components/MultipleChoiseQuestion.vue';
import DropdownQuestion from '@/components/DropdownQuestion.vue';
import SingleChoiseQuestion from '@/components/SingleChoiseQuestion.vue';
import TableQuestion from '@/components/TableQuestion.vue';

export default {
// eslint-disable-next-line
  name: 'Question',
  components: {
    SingleChoiseQuestion, MultipleChoiseQuestion, DropdownQuestion, TableQuestion,
  },

  props: {
    question: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 1rem 0;
}
</style>
