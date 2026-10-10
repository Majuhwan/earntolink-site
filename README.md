# earntolink.com

언투링크 (EarnToLink) 회사 사이트. 정적 HTML, 프레임워크 없음.

## 명령
| 명령 | 내용 |
|---|---|
| `npm run build` (`node build.mjs`) | `site/` 생성 (14개 언어 × 23쪽 + 404, sitemap.xml, 언어별 feed.xml, robots.txt, manifest, CNAME, IndexNow 키 파일) |
| `node tools/i18n-check.mjs` | 언어 파일이 en.mjs 와 같은 구조인지 검사 (키 · 배열 길이 · 섹션 id · HTML 태그 · 엠대시) |
| `npm run serve` | `site/` 를 http://127.0.0.1:8787 로 서빙 |
| `npm run check` | 서빙 중인 사이트의 내부 링크 · 자산 200 확인, 앵커 · h1 · title 검사 |
| `npm run assets` | favicon PNG · OG 이미지(1200×630) 다시 그리기 (Playwright 필요, `PLAYWRIGHT_PATH` 로 지정 가능) |
| `npm run shots <dir>` | 1440 · 375 스크린샷 |

## 구조
- `src/data.mjs` 언어와 무관한 구조: 언어 목록, 사업 영역 6개, 자체 앱 5개, 소식 목록
- `src/i18n/<code>.mjs` 언어별 문구 전부 (ko 원문, en 번역 기준, 나머지 12개 번역). 새 언어는 en.mjs 를 복사해 번역 후 data.mjs LANGS 에 추가
- `src/mockups.mjs` 제품 화면 SVG (추상 UI)
- `assets/` CSS · JS · 이미지 (그대로 복사)
- `static/` 검색엔진 인증 파일 등, `site/` 루트로 그대로 복사
- `seo.json` IndexNow 키
- `.github/workflows/pages.yml` GitHub Pages 배포 (선택)

## 배포
GitHub Pages, 사용자 지정 도메인 earntolink.com (`site/CNAME`).
