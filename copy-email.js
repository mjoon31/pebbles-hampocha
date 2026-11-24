for (const button of document.querySelectorAll(".email-copy")) {
  button.addEventListener("click", async () => {
    const status = button.nextElementSibling;
    status.textContent = "";
    try {
      await navigator.clipboard.writeText(button.textContent.trim());
      status.textContent = "주소를 복사했습니다";
    } catch {
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(button);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      status.textContent = "주소를 직접 복사하시기 바랍니다";
    }
  });
}
