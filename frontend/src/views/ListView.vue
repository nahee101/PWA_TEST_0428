<template>
  <div class="list">
    <table>
      <tr>
        <td>글 번호</td>
        <td>작성자</td>
        <td>제목</td>
      </tr>
      <tr v-for="(memo, index) in memo" :key="index">
        <td>{{memo.id}}</td>
        <td>{{memo.writer}}</td>
        <td @click="$router.push(`/list/${memo.id}`)">
          {{memo.title}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return ({
      //쓰인 메모
      memo: []
    })
  },
  created() {
    this.$http.get('/api/memo')
    .then((response) => {
      console.log(response.data);
      this.memo = response.data;
    })
  }
}
</script>
