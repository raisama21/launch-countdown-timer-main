const countDownDate = new Date("oct 8, 2022 12:45:60").getTime();

const countDownUpdate = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const day = (document.querySelector(".day").textContent = days);
  const hour = (document.querySelector(".hour").textContent = hours);
  const minute = (document.querySelector(".min").textContent = minutes);
  const second = (document.querySelector(".sec").textContent = seconds);
}, 1000);
