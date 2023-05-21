## 프로젝트 소개

## 설치와 실행

pnpm으로 의존성을 설치합니다

```bash
pnpm install
```

pacakage.json의 "scripts"에 있는 명령어들을 해설하자면 다음과 같습니다.

```json
"dev" // next dev 서버 시작
"build" // next prod 빌드
"start" // next prod 서버 시작
"lint" // eslint 로 린트
"format" // rome 으로 fomat
"preview" // react-cosmos로 컴포넌트 스토리북 프리뷰
"unit" // vitest로 unit, component 테스트
"e2e" // playwright로 e2e 테스트
```

사용할 때에는 다음처럼 yarn과 비슷하게 사용할 수 있습니다.
```bash
pnpm dev
```
