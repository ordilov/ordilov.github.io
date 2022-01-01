---
layout: post
title:  "Head vs Header"
date:   2022-01-01 00:45:00 +0900
categories: Web
---

## Head
head 태그는 html의 메타데이터를 표기합니다.  
title, css의 링크, charset 같은 눈에 보이지 않지만 메타정보를 표기합니다.  
```html
  <head>
    <meta charset="utf-8">
    <title>title</title>
  </head>
```

## Header
header 태그는 말 그대로 소개를 위해 쓰이는 태그입니다. 
```html
<header class="large-header">
    <h1>Introduce my story</h1>
</header>
```

---
html이나 css를 다룰 일이 많지 않다보니 head를 header로 잘못 작성한 적이 있습니다.  
메타데이터를 나타내는 태그는 html과 body처럼 4글자인 걸 기억하면 좋을 것 같습니다.  