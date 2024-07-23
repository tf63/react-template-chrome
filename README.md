## react template (chrome extension)

### 拡張機能のビルド
- 次のコマンドで拡張機能をビルドし，`./dist/`を生成する
```
    pnpm build
    pnpm build:watch # HMR有り
```

### 拡張機能の設定
**Chromiumベースのブラウザ**
- `chrome://extensions`にアクセスしてDeveloper Modeを有効化しておく
- **パッケージ化されていない拡張機能を取り込む** から`./dist/`を選択するとビルドした拡張機能を読み込める
- `pnpm build:watch`すればHMRが効く


**それ以外のブラウザ**
- 未確認

### 備忘録
**[CRXJS](https://crxjs.dev/vite-plugin)をインストール**
- 拡張機能のHMRをやってくれる
- Chrome Extensionのmanifestを`vite.config.ts`にまとめられる

`vite.config.ts`
```ts
import { crx, defineManifest } from "@crxjs/vite-plugin"
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc' // crxjs does not support react-swc yet
import react from '@vitejs/plugin-react'


const manifest = defineManifest({
    manifest_version: 3,
    name: "My Extension",
    version: "1.0.0",
    permissions: ["bookmarks"],
    action: {
      default_popup: "index.html",
    },
  });

export default defineConfig({
    plugins: [react(), crx({ manifest })],
    server: {
        host: true
    }
});
```


### 参考
- https://dev.classmethod.jp/articles/eetann-chrome-extension-by-crxjs/
- https://zenn.dev/mk668a/articles/118c49bd25078a
