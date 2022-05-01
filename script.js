const object = document.getElementsByClassName("container")[0];
const keyframes = [
  {
    transform: "translateY(130px) rotate(360deg)",
    transition: "bounce 0.5s",
  },
];

const timing = {
  duration: 2000,
  iterations: 1,
};

function Animate() {}

document.addEventListener("keydown", (event) => {
  const ele = document.createElement("div");
  ele.innerText = event.key;
  object.appendChild(ele);
  setTimeout(() => {
    ele.animate(keyframes, timing).addEventListener("finish", (event) => {
      ele.remove();
    });
  }, 1000);
});
