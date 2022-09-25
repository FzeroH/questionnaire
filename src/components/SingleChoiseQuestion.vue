<template>
  <section>
    <h4>{{ question.questionTitle }}</h4>
    <p>{{ question.numberOfResponses }}</p>
    <ul>
      <li v-for="(answer, index) in question.answers" :key="index">
        <label for="radio">
          <input type="radio" id="radio" :value="index" :name="question.questionTitle">
          {{ answer }}
        </label>
      </li>
    </ul>
    <span>{{ question.explanation }}</span>
  </section>
</template>

<script>
export default {
  name: 'SingleChoiseQuestionuestion',
  props: {
    question: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  h4 {
    font-size: 1rem;
  }

  ul {
    li {
      margin: 0.5rem 0;

      label {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.9rem;
      }
    }
  }

  span {
    display: block;
    width: 50rem;
    font-weight: 700;
  }
}
</style>
