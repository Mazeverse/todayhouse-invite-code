function copyCode() {
    const code = document.getElementById("inviteCode").innerText;
    navigator.clipboard.writeText(code);

    const message = document.getElementById("copiedMessage");
    message.innerText = "✅ 초대코드가 복사되었습니다!";
}
