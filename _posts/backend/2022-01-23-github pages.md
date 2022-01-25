---
layout: post
title:  "Github pages 배포"
date:   2022-01-23 00:01:00 +0900
categories: backend
---

## 정적 페이지 배포하기
동적으로 바뀌는 사이트가 아니라면 github pages를 통해 호스팅이 가능합니다.  

## 설정하기
Settings > Pages > Source  
배포하길 원하는 브랜치를 설정해줍니다.  

## 배포 확인하기
Environments > github-pages  
현재 배포중인 상태를 확인 가능합니다.  
View deployment를 통해 웹사이트로 이동할 수 있습니다.  

## 경로 문제
html에서 css나 js를 불러오는 경우 경로를 지정해야합니다.  
일반적인 경우 '/' 로 시작해도 도지만 github pages의 경우 다릅니다.  
'/' 로 시작하면 '이름.github.io' 로 기본 경로가 지정됩니다.  
따라서 다른 repository 에서 불러오면 파일을 불러올 수 없습니다.  
제대로 사용하려면 './' 로 현재 위치에서 찾을 수 있게 상대 경로로 바꿔야 합니다.  

## .nojekyll
jekyll을 사용하지 않는 경우 .nojekyll 파일을 추가해줘야합니다.  
추가하지 않으면 생길 수 있는 일로 _가 앞에 붙은 경로를 무시합니다.  
내부에서 _로 시작하는 경로를 불러와야 해도 인식하지 못할 수 있습니다.