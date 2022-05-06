<template>
  <div>
    <table>
      <!-- テーブルヘッダー -->
      <thead>
      <tr>
        <th class="id">ID</th>
        <th class="comment">コメント</th>
        <th class="state">状態</th>
        <th class="button">-</th>
      </tr>
      </thead>
      <tbody>
      <!-- ここに <tr> で ToDo の要素を1行づつ繰り返し表示 -->
      <tr v-for="item in todos" v-bind:key="item.id">
        <!-- 要素の情報 -->
        <th>{{ item.id }}</th>
        <td>{{ item.comment }}</td>
        <td class="state">
          <!-- 状態変更ボタンのモック -->
          <button>{{ item.state }}</button>
        </td>
        <td class="button">
          <!-- 削除ボタンのモック -->
          <button>削除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Tutorial',
  data () {
    return {
      todos: []// ToDo リストデータ用の空の配列を data オプションへ登録
    }
  }
}
</script>

<style scoped>
</style>
