<template>
  <div>
    <questionnaire-title v-show="$route.path === '/1'" :page-name="questions.title"/>
<!--    <questionnaire-title v-show="$route.path === '/2'" :page-name="pageName2"/>-->
<!--    <questionnaire-title v-show="$route.path === '/3'" :page-name="pageName3"/>-->
    <form action="">
      <question
        v-for="(question, index) in questions.polls"
        :key="'p1'+index"
        :question="question" v-show="$route.path === '/1'"
        @answer="test"
        />
    </form>
<!--    <question-->
<!--      v-for="(question, index) in questions2"-->
<!--      :key="'p2'+index"-->
<!--      :question="question" v-show="$route.path === '/2'"-->
<!--    />-->
<!--    <question-->
<!--      v-for="(question, index) in questions3"-->
<!--      :key="'p3'+index"-->
<!--      :question="question" v-show="$route.path === '/3'"-->
<!--    />-->
    <navigation-button />
  </div>
</template>

<script>
import Question from '@/views/Question.vue';
import questionnaireTitle from '@/components/QuestionnaireTitle.vue';
import NavigationButton from '@/components/NavigationButton.vue';

export default {
  name: 'MainPage',
  components: { NavigationButton, Question, questionnaireTitle },
  data() {
    return {
      // pageName1: 'I. ХАРАКТЕРИСТИКИ БИЗНЕСА',
      // pageName2: 'II. ВОСТРЕБОВАННОСТЬ ФИНАНСОВЫХ УСЛУГ',
      // eslint-disable-next-line max-len
      // pageName3: 'III. УДОВЛЕТВОРЕННОСТЬ ФИНАНСОВЫМИ УСЛУГАМИ И РАБОТОЙ РОССИЙСКИХ ФИНАНСОВЫХ ОРГАНИЗАЦИЙ, ПРЕДОСТАВЛЯЮЩИХ ЭТИ УСЛУГИ',
      pageNumber: 1,
      questions: null,
      values: [],
    };
  },
  methods: {
    test(data) {
      this.values.push(data);
      console.log(this.values);
    },
  },
  async created() {
    await fetch('questionnaire.json')
      .then((res) => res.json())
      .then((response) => {
        this.questions = response;
        console.log(this.questions.polls);
      });
  },
};
</script>

<style lang="scss" scoped>

</style>
