/**
*   【ルーティング】
*   リクエストされたURLに応じて，コンポーネントを選択して表示する仕組みのことです
*   【インポート】
*   別ファイル間でのデータの受け渡しの際に「受け取って読み込む」ことをインポートを呼びます
*   [import 変数名 from 'ファイルパス']
*/
// Vue.js本体をインポートする
import Vue from 'vue'
// 「Vue Router」のプラグインをインポートする
import Router from 'vue-router'
// Tutorialコンポーネントをインポートする
import Tutorial from '@/components/Tutorial'
// 「Vue Router」を使えるようにする
Vue.use(Router)
/* ルーターインスタンスを生成する */
// [export default] 他のコンポーネントで使用できる様に外部参照を可能にする
export default new Router({
  // ルートオプションを初期化する
  routes: [
    {
      // ルートに 指定したPathでマッピングする
      path: '/',
      // ルート名を定義する
      name: 'Tutorial',
      // コンポーネントオプションを定義する
      component: Tutorial // mountするコンポーネントを指定する
    }
  ]
})
