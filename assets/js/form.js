// GAS WebアプリのエンドポイントURL
// デプロイ後に差し替える
const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwukydb5lS7_JyZYJpOiBMJtCNrz59FlOLYqpTeJGsTEVf03R5Y5xbelEWG_RZLBwZAVw/exec';

const form = document.getElementById('requestForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // バリデーション
    const company = document.getElementById('company').value.trim();
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const plan    = document.getElementById('plan').value;

    if (!company || !name || !email) {
      alert('会社名・氏名・メールアドレスは必須です。');
      return;
    }

    if (!isValidEmail(email)) {
      alert('正しいメールアドレスを入力してください。');
      return;
    }

    // 送信中
    submitBtn.disabled = true;
    submitBtn.textContent = '送信中...';

    const payload = { company, name, email, plan };

    try {
      await fetch(GAS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // 成功表示
      form.style.display = 'none';
      formSuccess.style.display = 'block';

    } catch (err) {
      console.error(err);
      alert('送信に失敗しました。時間をおいて再度お試しください。');
      submitBtn.disabled = false;
      submitBtn.textContent = '資料を無料で受け取る';
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
