# 정윤재 포트폴리오

🔗 **https://jangjaebi.github.io**

한밭대학교 컴퓨터공학과 정윤재의 개인 포트폴리오 사이트입니다.
2026학년도 컴퓨터공학과 포트폴리오경진대회 제출용으로 만들었습니다.

## 소개

「오픈소스SW프로그래밍」 5팀의 팀장으로, 중고거래 위험 신호 분석 웹 서비스 **사기전에**를 개발하고 있습니다.
기능 개발과 함께, 여러 사람이 Issue와 Pull Request로 협업할 수 있는 구조와 규칙을 만드는 일을 맡고 있습니다.

## 주요 프로젝트

### 사기전에: 중고거래 위험 신호 분석 서비스 (팀 프로젝트, 진행 중)
- 중고거래 채팅에서 안전결제 거부, 빠른 입금 요구, 사칭 URL 같은 위험 신호를 **원문 근거와 권장 행동**과 함께 보여줍니다.
- 판매자를 사기꾼으로 단정하지 않는 **설명 가능한 위험 분석**을 목표로 합니다.
- 담당한 일:
  - 데이터 형식(Message·Signal) 설계
  - `@detector` 데코레이터 기반 탐지기 자동 등록 구조
  - URL 사칭·유사 도메인·단축 URL 탐지기 개발
  - 일정과 Issue 관리, PR 리뷰
- 저장소: https://github.com/OSSTEAM5/sagijeone

## 기술 스택

Python · FastAPI · pytest · Git/GitHub · 정규표현식 · HTML/CSS/JS · Docker

## 사이트 구성

| 항목 | 내용 |
|---|---|
| 프레임워크 | Astro + Tailwind CSS |
| 배포 | GitHub Actions → GitHub Pages (`master`에 push하면 자동 배포) |
| 내용 수정 | `src/config.ts` 한 파일에서 이름·소개·프로젝트·경험·학력 수정 |

## 출처

이 사이트는 [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) 템플릿(MIT License)을 바탕으로 내용과 디자인을 수정해 만들었습니다. 원본 라이선스는 [LICENSE.md](LICENSE.md)에 그대로 두었습니다.
