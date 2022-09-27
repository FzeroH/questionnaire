<template>
  <nav>
    <button @click="back" v-if="$route.path !== '/1'">Назад</button>
    <button @click="send" v-if="$route.path === '/3'">Отправить</button>
    <button @click="next" v-if="$route.path !== '/3'">Далее</button>
  </nav>
</template>

<script>
export default {
  name: 'NavigationButton',
  data() {
    return {
      pathToPage: null,
      pageNumber: null,
    };
  },
  methods: {
    next() {
      this.pathToPage = this.$route.path;
      this.pageNumber = this.pathToPage.slice(1);
      this.$emit('addAnswer');
      this.$router.push(`/${Number(this.pageNumber) + 1}`);
    },
    back() {
      this.pathToPage = this.$route.path;
      this.pageNumber = this.pathToPage.slice(1);
      this.$router.push(`/${Number(this.pageNumber) - 1}`);
    },
    send() {
      alert('Конец');
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    background: #5A9DE9;
    border: 1px solid #DADADA;
    color: white;
    font-size: 1rem;
    box-sizing: border-box;
    border-radius: 0.22rem;
    padding: 0.7rem 1.27rem;
    margin-left: 2rem;

    &:hover {
      background: #2b84e7;
    }
  }
}
</style>
