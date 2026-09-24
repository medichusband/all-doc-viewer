# 모든문서뷰어 웹앱
브라우저에서 로컬 파일을 읽고, 문서를 미리보고, PDF와 이미지를 하나의 PDF로 합쳐 저장하는 웹앱입니다.

## 지원 형식
PDF, JPG/JPEG/PNG, HWP/HWPX, DOCX, XLSX, PPTX. HWP/HWPX, DOCX, XLSX, PPTX는 보기 전용입니다.

## 로컬 실행
`npm install` 후 `npm run dev`

## Vercel 배포
Vercel 새 프로젝트에 이 폴더를 Import → Vite 자동 감지 → Build Command `npm run build` → Output Directory `dist` → Deploy.
`postinstall`에서 @rhwp/core WASM을 public 폴더로 자동 복사합니다.
