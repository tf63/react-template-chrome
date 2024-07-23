### react template

```
    # プロジェクトの作成
    npm create vite@latest
    # パッケージのインストール
    npm install
    # 新規インストール
    npm install <package>
    # 開発サーバーの立ち上げ
    npm run dev
```


```
    /app $ npm create vite@latest
    Need to install the following packages:
    create-vite@5.2.3
    Ok to proceed? (y) y
    ✔ Project name: … frontend
    ✔ Select a framework: › React
    ✔ Select a variant: › TypeScript + SWC

    Scaffolding project in /app/frontend...

    Done. Now run:

    cd frontend
    npm install
    npm run dev
```


`vite.config.ts`をいじる

```
    export default defineConfig({
    plugins: [react()],
        server: {
            host: true,
        },
    });

```

### tailwindcssの導入
https://tailwindcss.com/docs/guides/vite
```
    npm install -D tailwindcss
    npx tailwindcss init
```

`tailwind.config.js`をいじる
```
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
```
