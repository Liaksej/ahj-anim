import { Widget } from "./widget/Widget";
function app() {
  const content = document.querySelector(".text-box-wrapper") as HTMLElement;
  const wrapper = document.querySelector(".text-box-wrapper") as HTMLElement;
  const collapseHandler = () => {
    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = "";
    } else {
      wrapper.style.maxHeight = content?.scrollHeight + "px";
    }
  };

  document.querySelector(".btn")?.addEventListener("click", collapseHandler);
}

app();
new Widget();
