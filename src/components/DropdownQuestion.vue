<template>
  <section>
    <h4>{{ question.questionTitle }}</h4>
    <p>{{ question.explanation }}</p>
    <!--eslint-disable-next-line-->
    <select>
      <option>Выберите один из вариантов</option>
      <option v-for="(answer, index) in question.answers" :key="index">
        {{ answer }}
      </option>
    </select>
    <span>{{ question.explanation }}</span>
  </section>
</template>

<script>
export default {
  name: 'DropdownQuestion',
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

  select {
    margin: 0.5rem 0;
    display: block;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6rem 1.4rem .5rem .8rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-repeat: no-repeat, repeat;
    background-position: right .7rem top 50%, 0 0;
    background-size: .65rem auto, 100%;

    &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
      color: #222;
      outline: none;
    }
  }
  span {
    display: block;
    width: 50rem;
    font-weight: 700;
  }
}
</style>
