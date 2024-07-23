## react template (chrome extension)

> [!WARNING]
> docker環境を用意していますが，ローカルでの動作を想定しています

### 拡張機能のビルド
- 次のコマンドで拡張機能をビルドし，`./dist/`を生成する
```
    pnpm build
    pnpm build:watch # ホットリロード有り
```

### 拡張機能の設定
**Chromiumベースのブラウザ**
- `chrome://extensions`にアクセスしてDeveloper Modeを有効化しておく
- **パッケージ化されていない拡張機能を取り込む** から`./dist/`を選択するとビルドした拡張機能を読み込める
- `pnpm build:watch`すればホットリロードが効く

**それ以外のブラウザ**
- 未確認

### 備忘録
**[CRXJS](https://crxjs.dev/vite-plugin)をインストール**
- 拡張機能のホットリロードをやってくれる
- Chrome Extensionのmanifestを`vite.config.ts`にまとめられる
- Vite 3 ~ はベータ版として提供されており，`pnpm add -D @crxjs/vite-plugin@beta`でインストールする必要がある
- SWCには対応していないらしい

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
