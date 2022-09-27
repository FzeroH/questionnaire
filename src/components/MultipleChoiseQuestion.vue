<template>
  <section>
    <h4>{{question.id}}.{{ question.title }}</h4>
    <p>(пожалуйста, выберите один или несколько вариантов ответа в соответствующей ячейке)</p>
    <ul>
      <li v-for="(answer, index) in question.options" :key="'m'+index">
        <label for="checkbox">
          <input type="checkbox" id="checkbox" :value="answer.name" v-model="answerValue">
          {{ answer.name }}
        </label>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MultipleChoiseQuestion',
  props: {
    question: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      answerValue: [],
    };
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

        input {
          margin-right: 1rem;
          transform: scale(1.3);
          opacity: 0.9;
          cursor: pointer;
        }
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
