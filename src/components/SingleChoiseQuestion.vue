<template>
  <section>
    <h4>{{question.id}}.{{ question.title }}</h4>
    <p>(пожалуйста, укажите один вариант ответа)</p>
    <ul>
      <li v-for="(answer, index) in question.options" :key="'s'+index">
        <label for="radio">
          <input type="radio" id="radio" :value="answer"
                 :name="question.title" v-model="answerValue"
                 @change="$emit('answer-value', {
                  title: question.title,
                  answer: answerValue
                })"/>
          {{ answer.name }}
        </label>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'SingleChoiseQuestion',
  props: {
    question: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return { answerValue: null };
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
