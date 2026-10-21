export const siteConfig = {
  name: "정윤재",
  title: "컴퓨터공학과 학생 · 팀 프로젝트 '사기전에' 팀장",
  description: "정윤재의 개발 포트폴리오",
  accentColor: "#1d4ed8",
  social: {
    email: "20231996@edu.hanbat.ac.kr",
    github: "https://github.com/jangjaebi",
  },
  aboutMe:
    "한밭대학교 컴퓨터공학과 학생입니다. 「오픈소스SW프로그래밍」 수업에서 6명 팀의 팀장을 맡아, 중고거래 사기 위험 신호를 근거와 함께 알려주는 웹 서비스 '사기전에'를 개발하고 있습니다. 기능을 만드는 것만큼, 여러 사람이 GitHub Issue와 Pull Request로 함께 개발할 수 있는 구조와 규칙을 만드는 일에 관심이 많습니다.",
  skills: ["Python", "FastAPI", "Git", "GitHub", "정규표현식", "HTML/CSS/JS", "Docker"],
  projects: [
    {
      name: "사기전에 — 중고거래 위험 신호 분석 서비스 (팀 프로젝트, 진행 중)",
      description:
        "중고거래 채팅을 붙여넣으면 안전결제 거부, 빠른 입금 요구, 사칭 URL 같은 위험 신호를 원문 근거와 권장 행동과 함께 보여주는 웹 서비스입니다. 판매자를 사기꾼으로 단정하지 않는 '설명 가능한 위험 분석'을 목표로 합니다. 팀장으로서 데이터 형식 설계, 탐지기 자동 등록 구조(@detector 데코레이터, 전략 패턴), 일정·Issue 관리를 맡았고, URL 사칭·단축 URL 탐지기를 직접 개발했습니다.",
      link: "https://github.com/OSSTEAM5/sagijeone",
      skills: ["Python", "FastAPI", "pytest", "GitHub 협업"],
    },
  ],
  experience: [
    {
      company: "오픈소스SW프로그래밍 5팀 '사기전에'",
      title: "팀장 · URL / 사기 이력 분석 담당",
      dateRange: "2026.09 - 현재",
      bullets: [
        "6명 팀의 역할 분담, 주차별 일정, 팀원별 첫 코드 Issue(시작 방법·완료 기준 포함) 작성",
        "Issue → 브랜치 → Pull Request → 리뷰 2인 승인 → Merge 협업 규칙 수립 및 main 브랜치 보호 설정",
        "팀원 간 데이터 형식(Message·Signal) 합의를 주도하고 코드로 반영",
        "URL 탐지기 개발: 공식 도메인 사칭, 유사 도메인, 단축 URL, IP 주소 링크 탐지 및 오탐(정상 관련 회사 도메인) 수정",
        "팀원 PR을 로컬에서 직접 실행해 검증하는 리뷰 진행",
      ],
    },
  ],
  education: [
    {
      school: "한밭대학교",
      degree: "컴퓨터공학과",
      dateRange: "2023년 - 현재",
      achievements: [
        "수강: 오픈소스SW프로그래밍 (Python, Git/GitHub, Docker)",
      ],
    },
  ],
};
