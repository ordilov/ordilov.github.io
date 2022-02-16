---
layout: post
title:  "MySQL PublicKey Retrieval"
date:   2022-02-07 00:01:00 +0900
categories: trouble
---

## Public key retrieval is not allowed
useSSL=false로 설정되어 있을 때 발생하는 에러입니다.

## 해결 방법

### allowPublicKeyRetrieval 설정하기
allowPublicKeyRetrieval는 RSA 공개키를 검색하거나 가져오는 설정을 정합니다.
true 값을 주면 연결에 성공합니다.  