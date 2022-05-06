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
          <button v-on:click="doChangeState(item)">
            {{ item.state }}
          </button>
        </td>
        <td class="button">
          <button v-on:click="doRemove(item)">
            削除
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
      <!-- コメント入力フォーム -->
      コメント <input type="text" ref="comment">
      <!-- 追加ボタンのモック -->
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>

import todoStorage from '../plugins/todoStorage'

export default {
  name: 'Tutorial',
  data () {
    return {
      todos: [], // ToDo リストデータ用の空の配列を data オプションへ登録
      uid: 0
    }
  },
  created () {
    // インスタンス作成時に自動的に fetch() する
    this.todos = todoStorage.fetch()
    this.uid = this.todos.length
  },
  watch: {
    // オプションを使う場合はオブジェクト形式にする
    todos: {
      // 引数はウォッチしているプロパティの変更後の値
      handler: function (todos) {
        todoStorage.save(todos)
      },
      // deep オプションでネストしているデータも監視できる
      deep: true
    }
  },
  methods: {
    // ToDo 追加の処理
    doAdd: function (event, value) {
      // ref で名前を付けておいた要素を参照
      var comment = this.$refs.comment
      // 入力がなければ何もしないで return
      if (!comment.value.length) {
        return
      }
      // { 新しいID, コメント, 作業状態 }
      // というオブジェクトを現在の todos リストへ push
      // 作業状態「state」はデフォルト「作業中=0」で作成
      this.todos.push({
        id: this.uid++,
        comment: comment.value,
        state: 0
      })
      // フォーム要素を空にする
      comment.value = ''
    },
    // 状態変更の処理
    doChangeState: function (item) {
      item.state = item.state ? 0 : 1
    },
    // 削除の処理
    doRemove: function (item) {
      const index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
</style>
