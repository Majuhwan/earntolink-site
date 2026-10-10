# earntolink.com

언투링크 (EarnToLink) 회사 사이트. 정적 HTML, 프레임워크 없음.

## 명령
| 명령 | 내용 |
|---|---|
| `npm run build` (`node build.mjs`) | `site/` 생성 (HTML 53쪽, sitemap.xml, feed.xml ×2, robots.txt, manifest, CNAME, IndexNow 키 파일) |
| `npm run serve` | `site/` 를 http://127.0.0.1:8787 로 서빙 |
| `npm run check` | 서빙 중인 사이트의 내부 링크 · 자산 200 확인, 앵커 · h1 · title 검사 |
| `npm run assets` | favicon PNG · OG 이미지(1200×630) 다시 그리기 (Playwright 필요, `PLAYWRIGHT_PATH` 로 지정 가능) |
| `npm run shots <dir>` | 1440 · 375 스크린샷 |

## 구조
- `src/data.mjs` 회사 · 제품 · 소식 데이터 (제품 설명은 코드에 있는 기능만)
- `src/copy.mjs` 페이지 문구 · 개인정보처리방침 · 이용약관
- `src/mockups.mjs` 제품 화면 SVG (추상 UI)
- `assets/` CSS · JS · 이미지 (그대로 복사)
- `static/` 검색엔진 인증 파일 등, `site/` 루트로 그대로 복사
- `seo.json` IndexNow 키
- `.github/workflows/pages.yml` GitHub Pages 배포 (선택)

## 배포
GitHub Pages, 사용자 지정 도메인 earntolink.com (`site/CNAME`).
