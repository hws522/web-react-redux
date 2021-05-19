# Start React-Redux with Egoing

<br>
<br>

`React 는 사용자 정의 태그, component 를 만들어서 체계적이고 정돈된 애플리케이션을 만들 수 있게 해준다.`

`Redux 는 상태를 중앙에서 관리하는것을 통해서 데이터가 예측을 벗어난 변형 가능성을 낮춰준다.`

`React, Redux 모두 개발의 복잡성을 낮춰주는 기술이다.`

`이 기술들의 장점만을 이용하여 시스템을 만들어 보는 것이 목적이다.`

<br>

redux 를 도입하기 전 react 로만 짜여진 소스들은 component 들이 반복되어 비효율적이지만 부품으로서의 가치는 있다.

하지만 redux 를 도입하면 store 에서 관리를 하기에 효율적이지만 redux 를 사용한다는 상태에 의존하기 때문에 다른곳에서 사용하는 것은 가능하지 않다.

그래서 redux 를 도입했을 때, 재사용가능한 component 는 아니다.

component 를 재사용가능하게 하려면 rapping 을 이용하는 것이다.

rapping 을 이용해서 기존의 component 는 presentational component , 그를 감싸주어 redux 에서 작용하게 하는 component 는 container component 라고 부른다.

container component 는 주로 container 라는 폴더에 따로 저장되어 생성되며, 이 component 는 꼭 1 : 1 로 감싸주는 것은 아니다. container 하나가 여러개의 component 를 감쌀 수 있다.

허나, Redux 에 종속된다는 것이 안좋은 것이 아니다. 다른 곳에 사용될 가능성이 없다거나, 귀찮다면 종속되어도 상관없다!
