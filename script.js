document.addEventListener("DOMContentLoaded", () => {
  // ✅ 메뉴 토글 (구형 대응)
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("sideMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }

  // ✅ 입력창 스크롤
  const input = document.getElementById("memoryInput");
  if (input) {
    input.addEventListener("input", () => {
      input.scrollLeft = input.scrollWidth;
    });
  }

  // ✅ 네비게이션 바 토글
  const navBtn = document.getElementById("navToggle");
  const navBar = document.getElementById("navBar");
  if (navBtn && navBar) {
    navBtn.addEventListener("click", () => {
      navBar.classList.toggle("show");
    });
  }

  // ✅ 네비게이션 버튼 이동
  const introBtn = document.querySelector(".nav-btn.intro");
  const inputBtn = document.querySelector(".nav-btn.input");
  const archiveBtn = document.querySelector(".nav-btn.nav");

  if (introBtn) {
    introBtn.addEventListener("click", () => {
      window.location.href = "intro.html";
    });
  }
  if (inputBtn) {
    inputBtn.addEventListener("click", () => {
      window.location.href = "input.html";
    });
  }
  if (archiveBtn) {
    archiveBtn.addEventListener("click", () => {
      window.location.href = "nav.html";
    });
  }

  // ✅ 인트로 텍스트 & 화살표 처리
  const texts = [
    "지나간 줄 알았던 감정이, 오늘 따라 선명해졌다면.",
    "그건 이 밤이, 당신의 기억을 기다리고 있기 때문일지도 몰라요.",
    "기억을 헤는 이곳에서, 당신의 순간을 들려주세요."
  ];

  let current = 0;

  const textEl = document.getElementById("introText");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtnImg = prevBtn?.querySelector("img");
  const nextBtnImg = nextBtn?.querySelector("img");

  function updateSlide() {
    if (textEl) textEl.innerText = texts[current];

    if (current === 0) {
      if (prevBtnImg) prevBtnImg.src = "img/왼쪽_버튼_일반.png";
      if (nextBtnImg) nextBtnImg.src = "img/오른쪽_버튼_글로우.png";
    } else {
      if (prevBtnImg) prevBtnImg.src = "img/왼쪽_버튼_글로우.png";
      if (nextBtnImg) nextBtnImg.src = "img/오른쪽_버튼_글로우.png";
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (current < texts.length - 1) {
        current++;
        updateSlide();
      } else {
        window.location.href = "input.html";
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (current > 0) {
        current--;
        updateSlide();
      }
    });
  }

  updateSlide(); // ✅ 초기 상태 세팅
});
document.addEventListener("click", (event) => {
  const navBar = document.getElementById("navBar");
  const navToggle = document.getElementById("navToggle");

  // 네비게이션 바가 열려있고, 클릭한 대상이 navBar나 toggle 버튼이 아닐 경우 닫기
  if (
    navBar.classList.contains("show") &&
    !navBar.contains(event.target) &&
    !navToggle.contains(event.target)
  ) {
    navBar.classList.remove("show");
  }
});

