{
  const API_ENDPOINT = 'https://api.adviceslip.com/advice';
  const idContainer = document.querySelector('[data-id]');
  const adviceContainer = document.querySelector('[data-advice]');
  const button = document.querySelector('[data-new-advice]');

  document.addEventListener('DOMContentLoaded', async () => {
    const { id, advice } = await getAdvice();
    idContainer.textContent = `#${id}`;
    setAdvice(advice);
  });

  button.addEventListener('click', async () => {
    idContainer.textContent = '';
    adviceContainer.textContent = '';
    const { id, advice } = await getAdvice();
    idContainer.textContent = `#${id}`;
    setAdvice(advice);
  });

  async function getAdvice() {
    const res = await fetch(API_ENDPOINT);
    const slipObject = await res.json();
    return { id: slipObject.slip.id, advice: slipObject.slip.advice };
  }

  function setAdvice(advice) {
    adviceContainer.textContent = '';
    const quote = document.createElement('q');
    quote.textContent = advice;
    adviceContainer.appendChild(quote);
  }
}
