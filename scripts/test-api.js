const fetch = require('node-fetch');

async function testChat() {
  const res = await fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Who is Yoseph Awoke?' }),
  });
  console.log('/api/chat status', res.status);
  console.log(await res.text());
}

async function testContact() {
  const res = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Tester', email: 'test@example.com', message: 'Hello from test' }),
  });
  console.log('/api/contact status', res.status);
  console.log(await res.text());
}

(async () => {
  await testChat();
  await testContact();
})();
