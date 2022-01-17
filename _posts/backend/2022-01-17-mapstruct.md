---
layout: post
title:  "MapStruct"
date:   2022-01-17 00:45:00 +0900
categories: backend
---

## MapStruct
계층 간 데이터를 주고 받을 때 다른 객체로 변환해서 사용하는 일이 잦습니다.  
이럴 때 모든 코드를 직접 만들어서 사용한다면 반복적이고 실수하기 쉽습니다.  
이때 Object Mapping을 사용하면 간단하게 처리가 가능합니다.  
그 중에서 MapStruct를 가장 많이 사용합니다.  

## 사용법
```java
@Mapper 
public interface CarMapper {
 
    CarMapper INSTANCE = Mappers.getMapper( CarMapper.class ); 
 
    @Mapping(source = "numberOfSeats", target = "seatCount")
    CarDto carToCarDto(Car car); 
}
```
@Mapper 어노테이션을 인터페이스에 지정합니다.  
이렇게 명시된 인터페이스에 따라 빌드 시 Object Mapping을 하는 클래스를 생성해줍니다.  
기본적으로 멤버 변수가 같은 이름으로 생성됩니다.  
다르게 사용하려면 해당 source에 바꿀 이름을 target으로 선택 가능합니다.  

### 함수 사용법
변수 그대로가 아닌 변수가 가진 함수나 다른 함수로 매핑할 수 있습니다.    
```java
@Mapping(target = "creationDate", expression = "java(new java.util.Date())")
```


