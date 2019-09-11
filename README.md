# zero_wallet_desktop

※masterブランチではpython2とRustが必要

```sh
yarn
yarn build
yarn start
```

パッケージング（現状できてないけど）
MacOS用
```sh
npx electron-packager dist --platform=darwin --arch=x64 --out=build --electronVersion=6.0.7 --overwrite
```
