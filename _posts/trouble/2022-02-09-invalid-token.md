---
layout: post
title:  "invalid_token_response"
date:   2022-02-09 00:01:00 +0900
categories: trouble
---

## [invalid_token_response]
`An error occurred while attempting to retrieve the OAuth 2.0 Access Token Response`
직전까지 잘되던 OAuth2 인증에서 에러가 발생했습니다. 
서버에 에러 로그도 없이 클라이언트에서 보이는 에러였기에 문제점을 찾지 못했습니다.
그러다가 어쩌다가 OAUth2 Client Secret Key를 보니 이전에 설정했던 것과 달라져 있었습니다.
주기적으로 테스트용 구글 client secret key가 만료가 되어 바뀌는 것이 문제점이었습니다. 
