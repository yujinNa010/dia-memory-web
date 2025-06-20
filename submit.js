document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const input = document.getElementById("memoryInput");

  submitBtn.addEventListener("click", () => {
    const memory = input.value.trim();
    if (!memory) {
      alert("기억을 입력해주세요!");
      return;
    }

    // ✅ 유진이 배포한 웹 앱 URL로 설정 완료!
    const url = `https://script.google.com/macros/s/AKfycbyv93mpOcZaEokGYT56t-eHWXNweFlkz79jOxAJAEMG_tsXpqmbOnUQ8seh4xuKx06kKA/exec?memory=${encodeURIComponent(memory)}`;

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
