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
  data () {}
}
</script>

/**
*   【CSS部】#style要素
*   styleを必要に応じて変化させる部分です
*/
<style scoped>
</style>
