document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const input = document.getElementById("memoryInput");

  submitBtn.addEventListener("click", () => {
    const memory = input.value.trim();
    if (!memory) {
      alert("기억을 입력해주세요!");
      return;
    }

    // ✅ 새로 배포한 유진의 웹 앱 URL로 설정!
    const url = `https://script.google.com/macros/s/AKfycby8EBBpax_Y0bnWNO3hzHzgweTVo23NaxSgzbz-lG8G8Iv_XrNXR8IUH8VmuW0mTiKcSQ/exec?memory=${encodeURIComponent(memory)}`;

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        // 🔄 기억 저장 완료 → 로딩 화면으로 이동
        window.location.href = "loading.html";
      })
      .catch((err) => {
        console.error("제출 오류:", err);
        // 🤷‍♀️ 오류여도 로딩화면으로 강제로 이동!
        window.location.href = "loading.html";
      });
  });

  // ✅ 엔터 키로 제출
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      submitBtn.click();
      e.preventDefault();
    }
  });
});
