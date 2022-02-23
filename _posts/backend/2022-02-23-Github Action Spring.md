---
layout: post
title:  "Github Action Spring"
date:   2022-02-23 00:01:00 +0900
categories: backend
---

## Java with Gradle

CI를 위해서 Gradle을 이용해 Java를 빌드해야 했습니다.

### Git에 안 올리는 변수 처리
데이터베이스 비밀번호, API Secret Key, Token Secret등 Git에 포함하지 않는 변수들이 있습니다.
이런 변수들을 사용하는데 포함하지 않은 경우 빌드에 실패하게 됩니다. 따라서 속성값을 따로
저장하고 관리하는 방법이 필요합니다.

일단 가장 접근하기 쉬운 방법은 Github Secrets을 이용하는 방법이었습니다.
Github Secrets 에 변수들을 저장하고 Github actions에서 저장한 비밀 변수들을 불러옵니다.

비밀 변수들은 `{{ secrets.secret-key}}` 로 불러올 수 있습니다.
그리고 application.properties나 application.yml처럼 속성등을 명시하는 곳의 변수를 바꿔줘야 합니다.
Spring에서는 빌드하고 있는 환경에서 `${변수}`가 존재하면 환경 변수 값으로 교체됩니다.
따라서 변수들을 위의 형식으로 교체하면 됩니다.

## S3에 빌드 파일 올리기
Github Actions의 실행 명령으로 S3에 빌드 파일을 올릴 수 있습니다.

## Code Deploy로 빌드 파일 서버에 옮기기
S3에 올라간 이후로 Code Deploy 작업을 수행할 수 있습니다.

### 서버 환경 변수
서버에서 중요한 점은 빌드된 jar에 환경 변수들이 저장된 상태가 아니라는 점입니다.
따라서 실제로 사용하는 서버에도 환경 변수로 똑같이 존재해야 합니다.

SSH로 연결해서 하는 경우 주의할 점은 환경 변수를 설정하고 SSH 연결을 끊고 다시 접속해야 합니다.
그렇지 않으면 환경 변수가 잘 나오는 것처럼 보여도 빌드를 할 때 안되는 경우가 보입니다.

서버가 하나일 때는 상관없지만 서버가 여러 개인 경우 이렇게 관리하는 것은 번거로워집니다.
따라서 `Spring Config Server`나 `Amazon Parameter Store`처럼 서버에서 환경 변수들을 관리합니다.





