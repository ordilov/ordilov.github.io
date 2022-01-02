---
layout: post
title:  "Java Static Nested Class"
date:   2022-01-02 00:45:00 +0900
categories: Java
---

## Static Nested Class

```java
public class MainClass{
    static class NestedClass{
    }
}
```
Intellij 에서 inner class를 만들면 static으로 수정하라는 경고가 나옵니다.  
static을 붙여도 안붙여도 동작은 하지만 붙인다면 어떤 차이점이 있을까요?

- 바깥 클래스를 참조할 수 없습니다.
- 바깥 클래스 생성 여부와 상관 없이 생성할 수 있습니다.

우선 내부에서 바깥 클래스 데이터를 알 필요가 없을 때 사용하는 걸 권장하고 있습니다.  
static을 붙이지 않으면 외부 클래스를 사용하기 위해 외부 참조가 필요합니다.  
이 경우 메모리도 더 차지하고, 내부에서 참조하고 있어 가비지 컬렉션이 수거하기 어려워집니다.  
클래스에 인스턴스를 생성할 때도 멤버 클래스에 대한 메모리를 더 차지하게 됩니다.  

두 번째 차이점은 사용 용도에 따라 필요해질 수 있습니다.  
DTO나 VO처럼 파생되는 클래스들을 모두 만들다보면 클래스가 너무 많아지게 됩니다.  
이럴 때 연관되는 클래스끼리 모아서 inner static class로 만들어서 사용할 수 있습니다.  
이때 바깥 클래스는 패키지처럼 묶어주는 역할만 하므로 생성 여부와 상관없어야 합니다.  
따라서 이런 상황에서 static class가 유용해집니다.   

```java
public class Member{
    public static class Request{
        ...
    } 
    public static class Response{
        ...
    }
}
```
