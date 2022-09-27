<template>
  <div>
    <h4>{{question.id}}.{{ question.title }}</h4>
    <p>(пожалуйста, выберите один вариант ответа для каждого финансового продукта)</p>
    <div class="table" :style="tableStyles">
       <div class="table__head">
        </div>
        <div
          class="table__body"
          v-for="(item) in question.options[1]"
          :key="item.id">
          {{ item.name }}
        </div>
      <template v-for="(head) in question.options[0]">
        <div class="table__head" :key="head.id">
          <span class="table__text">{{ head.name }}</span>
        </div>
        <!--eslint-disable-next-line-->
        <div v-for="(item ,indexBody) in question.options[1]" :key="item.id" class="table__body">
          <!--eslint-disable-next-line-->
          <input type="radio" :value="item.name" :name="item.name" :title="head.name">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableQuestion',
  props: {
    question: {
      type: Object,
      required: true,
    },
    keyCol: {
      type: String,
      required: false,
      default: 'title',
    },
    keyCaption: {
      type: String,
      required: false,
      default: 'caption',
    },
  },
  computed: {
    countRows() {
      return this.question.options[1].length + 1;
    },
    countColumns() {
      return this.question.options[0].length + 1;
    },
    tableStyles() {
      return {
        'grid-template-columns': `repeat(${this.countColumns}, auto)`,
        'grid-template-rows': `repeat(${this.countRows}, auto)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0;

  &__head,
  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem;

  }

  &__head {
    font-weight: 900;
  }

  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
}
</style>
