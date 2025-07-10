// ReactライブラリからuseStateをインポートします。これは、関数コンポーネント内で状態を管理するために使用されます。
import React, { useState } from 'react';
// App.cssファイルをインポートして、コンポーネントにスタイルを適用します。
import './App.css';

// 新しいページを表すコンポーネントです。
function NewPage() {
  return (
    <div>
      <h2>新しいページ</h2>
      <p>これは新しいページです。</p>
    </div>
  );
}

// メインのAppコンポーネントです。
function App() {
  // countという名前のstate変数と、それを更新するためのsetCount関数を宣言します。初期値は0です。
  const [count, setCount] = useState(0);
  // messageという名前のstate変数と、それを更新するためのsetMessage関数を宣言します。初期値は空文字列です。
  const [message, setMessage] = useState('');

  // カウンターを増やす関数です。
  const increment = () => {
    setCount(count + 1);
    // ボタンがクリックされたときに音を鳴らします。
    new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg').play();
    // メッセージをセットします。
    setMessage('ボタンがクリックされました！');
  };

  // カウンターを減らす関数です。
  const decrement = () => {
    setCount(count - 1);
    // ボタンがクリックされたときに音を鳴らします。
    new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg').play();
    // メッセージをセットします。
    setMessage('ボタンがクリックされました！');
  };

  // コンポーネントがレンダリングするJSX（JavaScript XML）を返します。
  return (
    <div className="App">
      <header className="App-header">
        {/* アプリケーションのヘッダー */}
        <h1>カウンターアプリ</h1>
        {/* 現在のカウント数を表示します。 */}
        <p>カウント: {count}</p>
        {/* カウントを増やすボタン */}
        <button onClick={increment}>増やす</button>
        {/* カウントを減らすボタン */}
        <button onClick={decrement}>減らす</button>
        {/* メッセージを表示します。 */}
        <p>{message}</p>
        {/* 新しいページコンポーネントをレンダリングします。 */}
        <NewPage />
      </header>
    </div>
  );
}

// Appコンポーネントをエクスポートして、他のファイルで使えるようにします。
export default App;