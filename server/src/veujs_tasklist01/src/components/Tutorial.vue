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
    <!-- ToDoListの絞り込みボタンのHTMLコンテンツ -->
    <!-- リストレンダリング(反復表示) -->
    <!-- [v-for]配列やオブジェクトの中身を反復表示させるディレクティブ -->
    <!-- [v-bind:key] リストのアイテムを識別可能にする（keyにlabel.valueを指定） -->
    <label v-for="label in options" v-bind:key="label.value">
      <!-- 双方向バインディング（フォーム入力バインディング） -->
      <!-- [v-model="変数名"] 入力時に 入力値の値を即座に変数currentに格納する -->
      <!-- （単方向）バインディング -->
      <!-- [v-bind:value] dataプロパティのlabel.valueの変更を{{ label.label }}に単方向で反映する（valueにlabel.valueを指定） -->
      <input type="radio"
              v-model="current"
              v-bind:value="label.value">{{ label.label }}
    </label>
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
        <!-- [computedTodos] 算出プロパティを指定して、Vueインスタンスの状態から派生した値を計算して反映できるようにする -->
        <tr v-for="item in computedTodos" v-bind:key="item.id">
          <!-- 要素の情報 -->
          <th>{{ item.id }}</th>
          <td>{{ item.comment }}</td>
          <td class="state">
            <!-- 状態変更ボタンのモック（イベントハンドリング） -->
            <!-- v-on:イベント名="メソッド名($event)" -->
            <button v-on:click="doChangeState(item)">
                <!-- 状態をラベル名で表示する -->
                {{ labels[item.state] }}
            </button>
          </td>
          <td class="button">
            <!-- 削除ボタンのモック（イベントハンドリング） -->
            <!-- v-on:イベント名="メソッド名($event)" -->
            <button v-on:click="doRemove(item)">
                削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- タスクの追加をする入力欄 -->
    <h2>新しい作業の追加</h2>
    <!-- イベントハンドリング -->
    <!-- v-on:イベント名="メソッド名($event)" -->
    <!-- [v-on:submit.prevent=""] イベントにデフォルトで設定されている処理を実行しない -->
    <form class="add-form" v-on:submit.prevent="doAdd">
      <!-- コメント入力フォーム -->
      コメント <input type="text" ref="comment">
      <!-- 追加ボタンのモック -->
      <button type="submit">追加</button>
    </form>
  </div>
</template>

/**
*   【JavaScript部】#script要素
*   処理をコンポーネント化して 指定要素で実施する部分です
*/
<script>

/* [インポート] このファイルコンポーネントで外部のコンポーネントを使用可能にする */
// todoStorageコンポーネントをインポートする
import todoStorage from '../plugins/todoStorage'

/* [エクスポート] 他のコンポーネントで使用できる様に外部参照を可能にする */
// [export default] 処理をコンポーネント化して 指定要素で実施する
export default {
  /* コンポーネントの表示名をname属性で変更 */
  name: 'Tutorial',
  /* コンポーネントインスタンスのデータオブジェクトを返す関数 */
  // アプリケーションで使用するデータを定義する
  data () {
    return {
      // ToDo リストデータ用の空の配列を data オプションへ登録
      todos: [], // 配列todos[]を定義する
      uid: 0, // 変数uidを定義する
      // 絞り込み機能の選択肢（配列options）を定義する
      options: [
        { value: -1, label: 'すべて' },
        { value: 0, label: '作業中' },
        { value: 1, label: '完了' }
      ],
      // 選択している options の value を記憶するための変数currentを定義する
      // 初期値を「-1」つまり「すべて」に設定する
      current: -1
    }
  },
  // 算出プロパティを定義する
  // [computed]Vueインスタンスの状態から，派生した値を計算してゲッターとして公開する
  computed: {
    // 状態変更ボタンのラベルを数字から文字列に変換する算出プロパティを定義する
    // キーから見つけやすいように、次のように加工したデータを作成しています
    // {0: '作業中', 1: '完了', -1: 'すべて'}
    labels () {
      // [reduce()] 配列に対して関数を適用し、その処理によって配列の各値を(左から右に)一つの値にまとめます
      // このコードでは重複した要素を取り除いています
      // 「数値, 数値:'文字列'」を「数値:'文字列'」の形にデータを加工する
      return this.options.reduce(function (a, b) {
        // [Object.assign(target,sources)] オブジェクトをマージする(targetにsourcesをマージしてtargetに返す)
        // 「数値, 数値:'文字列'」の形式にデータを加工する
        return Object.assign(a, { [b.value]: b.label })
      }, {})
    },
    // 絞り込みフォームで指定した条件に応じて配列の要素を取り出す算出プロパティを定義する
    // [変数current] 絞り込みフォームで指定した条件の値
    // [el] v-for で取得するToDoリストのデータ
    computedTodos: function () {
      // 絞り込みフォームで指定した条件に応じて配列の要素を取り出す
      // [filter()] 指定した条件に一致する要素を取り出すメソッド
      return this.todos.filter(function (el) {
        // 変数currentが -1 ならすべての要素を取り出す
        // それ以外なら current と state が一致するものだけに絞り込み要素を取り出す
        // [条件式 ? 真の処理 : 偽の処理] 三項演算子と呼ばれ、条件式に対して真偽値に応じて"?"以降の処理が実行されます
        return this.current < 0 ? true : this.current === el.state
      }, this)
    }
  },
  // ライフサイクルフックを定義する
  // dataオブジェクトをリアクティブにする
  // ここでのリアクティブとは値の更新を行うと更新が反映されること
  created () {
    // インスタンス作成時に自動的に fetch() する
    // [fetch()] 非同期通信でサーバ上にある欲しいデータを取得できる
    this.todos = todoStorage.fetch()
    // [Array.length] 配列の要素の数を取得する
    this.uid = this.todos.length
  },
  // watchオプションを定義する
  // [watch: { '監視するデータ': '呼び出す関数（ハンドラー）' }]
  watch: {
    todos: {
      /* 監視するデータの変更後の値を保存するイベントハンドラー */
      // 引数はウォッチしているプロパティの変更後の値です
      handler: function (todos) {
        // ウォッチしているプロパティの変更後の値をローカルストレージに保存する
        todoStorage.save(todos)
      },
      // [(watchの)deepオプション] ネストしているデータも監視する
      deep: true
    }
  },
  // メソッドオプションを定義する
  methods: {
    // ToDoListの追加の処理をするメソッド
    doAdd: function (event, value) { // メソッドを定義する
      // ref で名前を付けておいた要素を参照する
      var comment = this.$refs.comment // 変数commentを初期化する
      // 入力がなければ何もしないで return
      if (!comment.value.length) {
        return
      }
      /* 配列todos[]に要素を追加する */
      // todos[{ 新しいID, コメント, 作業状態 }]
      // [push()] オブジェクトや配列に要素を追加するメソッド
      this.todos.push({
        id: this.uid++, // idをインクリメントで追加する
        comment: comment.value, // コメントを入力値で追加する
        state: 0 // 作業状態はデフォルト「作業中=0」で追加する
      })
      // フォーム要素を空にする
      comment.value = ''
    },
    // ToDoListの状態変更の処理をするメソッド
    doChangeState: function (item) {
      // item.state の値を反転します
      // [条件式 ? 真の処理 : 偽の処理] 三項演算子と呼ばれ、条件式に対して真偽値に応じて"?"以降の処理が実行されます
      item.state = item.state ? 0 : 1
    },
    // ToDoListの削除の処理をするメソッド
    doRemove: function (item) {
      // [Array.prototype.indexOf()] 引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返します
      const index = this.todos.indexOf(item)
      // [splice(開始位置, 削除個数)] 配列の既存の要素を取り除いて配列の内容を変更します
      this.todos.splice(index, 1)
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
