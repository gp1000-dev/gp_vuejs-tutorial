/**
*   【Vue.js本家の TodoMVCの例（サンプルコード）】
*   https://jp.vuejs.org/v2/examples/todomvc.html
*   【ストレージオブジェクト】
*   Local StorageとはHTHL5から導入されたWEB APIの一種で、Javascriptでブラウザにデータを記録する仕組みです
*   利点はcookieより多くの容量を保存できることです（5MBまでデータを保存）
*   【JSON】
*   JavaScript Object Notation（JSON、ジェイソン）はデータ記述言語の1つです
*   JSONとは「JavaScriptのオブジェクト記法を用いたデータ交換フォーマット」です
*   利点はJSONを間に挟むことで各プログラミング言語間のデータの受け渡しがとても簡単にできることです
*/

// ローカルストレージのセキュリティーKEYを設定する
const STORAGE_KEY = 'todos-vuejs-demo'
/* ローカルストレージへの”KEYの取得”や”KEYの追加・更新”を行うコンポーネント */
const todoStorage = {
  // ローカルストレージのセキュリティーKEYを取得するメソッド
  fetch: function () {
    // [JSON.parse()] 文字列をJSONとして解析し、文字列によって記述されている値やオブジェクトをJavaScriptとして構築します
    return JSON.parse(
      // [getItem(keyName)] キーの名称を渡すと、そのキーに対する値を返します
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
  },
  // ローカルストレージにJSON文字列に変換したセキュリティーKEYを追加または更新する
  save: function (todos) {
    // [setItem(keyName, keyValue)] キーの名称と値を渡すと、ストレージにキーを追加します、またはキーがすでに存在する場合はキーに対する値を更新します
    // [JSON.stringify()] JavaScript のオブジェクトや値を JSON 文字列に変換します
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
/* todoStorageコンポーネントをエクスポートする */
// [export default] 処理をコンポーネント化してエクスポートする
export default todoStorage
