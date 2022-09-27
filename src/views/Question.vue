<template>
  <div>
    <dropdown-question
      :question="question" v-if="question.options.length > 5"
      @answer-value="getValue"/>
    <multiple-choise-question
      :question="question" v-if="question.max_check === 2" />
    <table-question
      :question="question"
      v-if="question.max_check === 3"/>
    <single-choise-question
      :question="question"
      v-if="question.options.length <= 5 &&question.max_check === 1"
      @answer-value="getValue"/>
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
  data() {
    return {
      value: [],
    };
  },
  methods: {
    getValue(data) {
      this.value.push(data);
      this.$emit('answer', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 1rem 0;
}
</style>
