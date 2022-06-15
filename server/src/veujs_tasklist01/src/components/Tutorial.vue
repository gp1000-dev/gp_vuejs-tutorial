/*********************************************************
*   Tutorial.vue は単一ファイルコンポーネントです
*   HTML部、CSS部、JavaScript部の3つのコードチャンクで構成されます
*   Tutorial.vue は ToDoList を構成するコンポーネントです
*********************************************************/

/**
*   【HTML部】#template要素
*   HTMLコンポーネントの作成, HTML部のルート要素の指定など、要素をアプリケーションに紐付ける部分です
*/
<template>
  <!-- ToDOListのHTMLコンポーネント -->
  <div>
    <!-- ToDoListのテーブル部分のHTMLコンテンツ -->
    <table>
      <!-- テーブルヘッダー（見出し） -->
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <!-- テーブルボディ -->
      <tbody>
        <!-- [1] ここに <tr> で ToDo の要素を1行づつ繰り返し表示したい -->
        <!-- リストレンダリング(反復表示) -->
        <!-- [v-for]配列やオブジェクトの中身を反復表示させるディレクティブ -->
        <!-- [v-bind:key] リストのアイテムを識別可能にする（keyにitem.idを指定） -->
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

/**
*   【JavaScript部】#script要素
*   処理をコンポーネント化して 指定要素で実施する部分です
*/
<script>
/* [エクスポート] 他のコンポーネントで使用できる様に外部参照を可能にする */
// [export default] 処理をコンポーネント化して 指定要素で実施する
export default {
  /* コンポーネントの表示名をname属性で変更 */
  name: 'Tutorial',
  /* コンポーネントインスタンスのデータオブジェクトを返す関数 */
  // アプリケーションで使用するデータを定義する
  data () {
    return {
      // ToDo リストデータ用の空の配列を data オプションへ登録する
      todos: [] // // 配列todos[]を定義する
    }
  }
}
</script>

/**
*   【CSS部】#style要素
*   styleを必要に応じて変化させる部分です
*/
<style scoped>
</style>
