---
layer: operations
revision_policy:
  frequency: as_needed
  authority: claude_with_fact_check
last_reviewed: 2026-05-12
---

# bull-don.lp

## このリポジトリについて
ブルドン合同会社のLP（ランディングページ）。
GitHub Pagesで lp.bull-don.com に公開中。

## 技術スタック
- 静的HTML/CSS/JS
- GitHub Pages（CNAME: lp.bull-don.com）

## ファイル構成
- index.html : LP本体
- privacy.html : プライバシーポリシー
- assets/css/style.css
- assets/js/form.js
- assets/images/ : ロゴ・スクリーンショット等

## 開発ルール
- ファイルは assets/ 配下に整理する（ルート直下にCSSやJSを置かない）
- mainブランチへのpushで自動デプロイされる
- HTTPSは強制設定済み

## 関連

- 詳細仕様: `C:\dev\bulldon\_shared\`
- 資料請求フォームのバックエンドGAS: `C:\dev\bulldon\bull-don.lp-backend\`（rshimizu-lang/bull-don.lp-backend）
  - `assets/js/form.js` の `GAS_ENDPOINT` がそのWebアプリのデプロイURL
