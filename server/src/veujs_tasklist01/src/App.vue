/*********************************************************
*   App.vue は単一ファイルコンポーネントです
*   HTML部、CSS部、JavaScript部の3つのコードチャンクで構成されます
*********************************************************/

/**
*   【HTML部】#template要素
*   HTMLコンポーネントの作成, HTML部のルート要素の指定など、要素をアプリケーションに紐付ける部分です
*/
<template>
  <!-- #app要素をルート要素に指定 -->
  <div id="app">
    <!-- ルートとマッチしたコンポーネントを表示する -->
    <router-view/>
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
  name: 'App'
}
</script>

/**
*   【CSS部】#style要素
*   styleを必要に応じて変化させる部分です
*/
<style>
/* [インポート] このファイルコンポーネントで外部のコンポーネントを使用可能にする */
/* cssファイルのインポート */
@import "./assets/css/main.css";
/* main.cssのstyleを変更する */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
