<template>
  <div>
    <h4>{{ question.questionTitle }}</h4>
    <p>{{ question.numberOfResponses }}</p>
    <div class="table" :style="tableStyles">
       <div class="table__head">
        </div>
        <div
          class="table__body"
          v-for="(item, indexRow) in question.body"
          :key="`row_${indexRow}`">
          {{ item[keyCol] }}
        </div>
      <template v-for="(head, indexCol) in question.head">
        <div class="table__head" :key="`col_${indexCol}`">
          <span class="table__text">{{ head }}</span>
        </div>
        <!--eslint-disable-next-line-->
        <div v-for="(item ,indexBody) in question.body" :key="`body_${indexBody}`+ question.questionTitle.substr(0,2)" class="table__body">
          <!--eslint-disable-next-line-->
          <input type="radio" :value="item.title" :name="item.title">
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
      return this.question.body.length + 1;
    },
    countColumns() {
      return this.question.head.length + 1;
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
