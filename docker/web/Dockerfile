# Dockerimageの指定 -> FROM [イメージ名]:[タグ名]
FROM node:14.15.0-alpine
# 作業ディレクトリの設定-> WORKDIR [Paht]
WORKDIR /app
# コマンドの実行-> RUN [実行するコマンド]
# apk-get update：apkパッケージリストの更新
RUN apk update && \
    # npm install：npmパッケージのインストール
    npm install && \
    # npm install -g npm：npmパッケージのグローバルインストール
    npm install -g npm && \
    # npm install -g vue-cli：vue-cliのグローバルインストール
    npm install -g vue-cli