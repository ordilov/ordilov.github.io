---
layout: post
title:  "Union Find"
date:   2022-01-02 00:45:00 +0900
categories: Algorithm
---
## Disjoint Set
Disjoint Set은 상호 배타적 집합으로 서로 구분되는 집합입니다.
각 집합은 중복되지 않은 원소의 집합으로 구성되어 있습니다.  
Disjoint Set은 여러 자료구조로 표현할 수 있습니다.  

### 배열로 표현하기
가장 단순한 방법은 배열로 표현하는 것입니다.  
시작은 크기가 1인 집합으로 자신의 값에 해당하는 위치를 표현합니다.  
```java
arr[i] = i;
```
이후에 합쳐질 때마다 값을 바꿔주면 됩니다.  
예를 들어 집합을 나타내는 기준을 더 작은 값이라고 두겠습니다.  
1, 3, 5가 같은 집합이라면 배열의 1, 3, 5번은 1이 됩니다.  
이런 식으로 구하다보면 제일 작은 기준으로 집합이 나눠집니다.  
이때 찾는데 걸리는 시간은 배열 값을 보면 되므로 O(1)입니다.  
문제는 합치는 데 걸리는 시간은 O(N)이 됩니다.  
두 수가 주어질 때 다른 점들이 어느 집합에 있는지 모르기 때문에 전체를 돌아야 합니다.  
그래서 찾는 시간은 빠르지만 이 방법보단 다른 방법을 사용합니다.  

### 트리로 표현하기
트리로 사용할 때는 자신의 부모를 따라 올라가 루트로 집합을 비교합니다.  
따라서 찾기 연산은 루트를 찾는데 걸리는 시간이 됩니다.   
합칠 때 두 집합의 루트 중 하나를 다른 하나의 루트로 만들면 되므로 배열보다 시간이 줄어듭니다.  
이 때 찾기 연산은 잘 분포되어있다면 트리가 그렇듯 O(logN)이 됩니다.  
하지만 균등하게 분포되어 있지않다면 O(N)이 됩니다.  

## Union FInd
Disjoint Set을 구현할 때 세 가지 연산이 필요합니다.  
- 초기화 : 크기가 1인 원소들의 집합으로 초기화
- 찾기 : 집합의 루트 찾기
- 합치기 : 두 집합이 연결되어 있을 때 합치기
여기서 찾기와 합치는 연산이 대표적이기에 Union Find라고 부릅니다.

```java
import java.util.ArrayList;
import java.util.List;

// 트리를 이용해 상호 배타적 집합을 구현한다.
public class NaiveDisjointSet {
    List<Integer> parent;
    public NaiveDisjointSet(int n){
        this.parent = new ArrayList<>();
        for(int i = 0; i < n; i++){
            parent.add(i);
        }
    }
    // u가 속한 트리의 루트를 반환한다.
    int find(int u) {
        if(u == parent.get(u)) return u;
        return find(parent.get(u));
    }
    // u가 속한 트리와 v가 속한 트리를 합친다.
    void merge(int u, int v){
        u = find(u);
        v = find(v);
        // u와 v가 이미 같은 트리에 속하는 경우를 걸러낸다.
        if(u == v) return;
        parent.set(u, v);
    }
}
```

간단하게 만드는 경우 문제는 불균형하게 분포되었을 때입니다.  
트리가 일직선으로 분포되는 경우로 시간 복잡도가 O(N)입니다.  
배열로 만들었을 때도 O(1)인 걸 생각하면 사용할 이유가 없습니다.  
그래서 사용하는 방법은 트리의 높이를 비교해서 합칩니다.  
높은 트리가 낮은 트리의 부모가 된다면 일직선 분포를 막을 수 있습니다.  

```java
import java.util.ArrayList;
import java.util.List;

// 트리를 이용해 상호 배타적 집합을 구현한다.
public class OptimizedDisjointSet extends NaiveDisjointSet{

  List<Integer> rank;

  public OptimizedDisjointSet(int n) {
    super(n);
    rank = new ArrayList<>(n);
    for(int i = 0; i < n; i++)
      rank.add(1);
  }

  @Override
  public int find(int u){
    if(u == parent.get(u)) return u;
    parent.set(u, find(parent.get(u)));
    return parent.get(u);
  }

  @Override
  public void merge(int u, int v) {
    u = find(u);
    v = find(v);
    if(u == v) return;
    if(rank.get(u) > rank.get(v)){
      v = swap(u, u = v);
    }
    parent.set(u, v);
    if(rank.get(u).equals(rank.get(v))){
      rank.set(v, rank.get(v));
    }
  }

  // y = swap(x, x = y)
  private int swap(int a, int b){
    return a;
  }
}
```