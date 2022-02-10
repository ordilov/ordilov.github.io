---
layout: post
title:  "Spring Security Authentication"
date:   2022-02-04 00:01:00 +0900
categories: backend
---

## Architecture
SecurityContextHolder > SecurityContext > Authentication  
- `SecurityContextHolder` 는 인증한 사람의 정보를 저장하는 곳입니다. 
- `SecurityContext`는 Holder로 부터 얻어서 현재 인증중인 사람의 인증정보를 얻습니다.
- `Authentication`은 신원 정보를 담거나 들어온 입력을 의미합니다.
  - 인증 정보는 AuthenticationManager로 넘어갈 수 있습니다.
  - SecurityContext로 부터 신원정보를 받을 수 있습니다.
- `GrantedAuthority` 는 Authentication에 저장된 사람의 부여된 권한입니다.
- `AuthenticationManager`는 Spring Secuirty Filter가 인증을 수행하게 하는 API 입니다.
- `ProviderManager` 는 AuthenticationManager의 대표적인 구현체입니다.
- `AuthenticationProvider`는 ProviderManager 중 인증에 특화된 종류입니다.
- `Request Crendentials with AuthenticationEntryPoint` 사용자에게 인증을 요청할 때 쓰입니다.
- `AbstractAuthenticationProcessingFilter` 기본적인 인증을 위한 필터입니다.

## SecurityContextHolder
### 인증 정보 넣기
Spring Security는 SecurityContextHolder의 구성방식은 신경쓰지 않습니다.  
값이 채워져 있으면 현재 인증 정보라고 생각합니다.  
SecurityContextHolder에 인증 정보를 넣는 간단한 방법은 바로 넣는 것입니다.
```java
SecurityContext context = SecurityContextHolder.createEmptyContext();
Authentication authentication =
    new TestingAuthenticationToken("username", "password", "ROLE_USER");
context.setAuthentication(authentication);

SecurityContextHolder.setContext(context);
```
1. 빈 SecurityContext를 생성합니다. SecurityContextHolder.getContext().setAuthentication(authentication)
처럼 get으로 가져와서 쓰는 방식은 멀티 쓰레드 환경에서 경쟁 상태를 발생할 수 있습니다.
2. Authentication 구현체를 만들어 넣어줍니다. 대표적인 구현체는 `UsernamePasswordAuthenticationToken`입니다.
3. SecurityContext를 SecurityContextHolder에 넣어줍니다.

### 인증정보 가져오기
```java
SecurityContext context = SecurityContextHolder.getContext();
Authentication authentication = context.getAuthentication();
String username = authentication.getName();
Object principal = authentication.getPrincipal();
Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
```
SecurityContextHolder는 ThreadLocal을 사용하기 때문에 같은 쓰레드내에서 언제든 접근이 가능합니다.  
반대로 쓰레드가 끝나면 인증 정보를 전부 지우면 되기 때문에 안전합니다.
별도의 Thread를 사용해서 ThreadLocal를 사용하기 애매한 경우 제공하는 다른 전략을 사용해 접근할 수 있습니다.

## Authentication
`Authentication`의 주요 목적은 두 가지입니다.
- AuthenticationManager의 사용자 인증 정보 입력으로 사용됩니다.
  - isAuthenticated() 가 false를 반환하는 등으로 쓰입니다.
- SecurityContext가 담고 있는 현재 사용자의 인증 정보를 나타냅니다.

Authentication이 갖고 있는 정보입니다.
- principal : 사요자가 누구인지 구분하는데 사용합니다. 주로 UserDetails를 사용합니다.
- credentials : 주로 비밀번호로 유출을 방지하도록 끝난 이후에 지워집니다.
- authroities : GrantedAuthoritys는 유저가 부여 받은 권한으로 role이나 scope가 해당합니다.

## GrantedAuthority
GrantedAuthority 는 `Authentication.getAuthorities()` 메소드로 얻습니다.  
메소드는 GrantedAuthroity 객체의 Collection으로 반환됩니다. 
ROLE_ADMINISTRATOR 처럼 `ROLE_` prefix로 구분되며 주로 UserDetailsService 에서 호출됩니다.  
이러한 권한의 주의할 점은 주로 전역적으로 쓰이기 때문에 특정 객체를 기준으로 생성하면 안됩니다.  
예를 들어 ID 54번 만을 위한 권한을 만들거나 각각으로 만들다보면 authorities가 많아져 메모리가 부족하게 됩니다.  

## AuthenticationManager
Spring Security Filter에서 인증을 수행하는 API입니다.
Controller에서 SecurityContextHolder에 저장된 Authentication의 인증 정보를 얻으려할 때 호출됩니다.

## ProviderManager
ProviderManager는 AuthenticationManager의 대표적인 구현체로 쓰입니다.  
ProviderManager는 AuthenticationProvider의 List에게 넘어갑니다.
각각의 AuthenticationProvider는 성공, 실패 혹은 다음 AuthenticationProvider에서 결정하게 정할 수 있습니다.
`ProviderNotFoundException`은 `AuthenticationException`중 인증을 위한 타입이 없다는 것을 나타내는 예외입니다.
AuthenticationProvider가 여러 개인 이유는 password, SAML, token등 다양한 인증 방법을 가능하게 합니다.
이렇게 여러가지 인증방법을 `AuthenticationManager` 빈 하나에서 관리할 수 있습니다.
물론 여러 SecurityFilterChain을 관리하기 위해 AuthenticationManager의 구현체가 여러개 일 수 있습니다.

ProviderManager에서 주의할 점은 기본적으로 주요한 인증 정보는 지워진다는 점입니다.
만약에 성능 향상을 위해 유저 객체등을 캐싱할려고 한다면 절대로 인증 정보의 참조값을 사용해선 안됩니다.
지워지기 때문에 캐시에서 사용하려고 할 때는 없을 수 있습니다.
명확한 해결책은 두 가지입니다. 
- 인증 정보 객체를 완전히 복사한 객체를 사용합니다.
- eraseCredentialAfterAuthentication 속성을 끕니다.

