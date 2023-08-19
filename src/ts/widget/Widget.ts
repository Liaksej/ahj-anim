export class Widget {
  container = document.body;
  constructor() {
    this.createWidget();
    this.createStyles();
  }

  createWidget() {
    const widget = document.createElement("div");
    widget.classList.add("widget");
    widget.innerHTML = `
      <div class="form">
        <form class="feedback">
          <div class="cancel_widget_btn_container">
            <button id="cancel_widget_btn">X</button>
          </div>
          <h2>Напишите нам</h2>
          <textarea class="feedback-text"></textarea>
          <button id="submit-feedback-btn" type="submit">Отправить</button>
        </form>
      </div>
      <button id="enable_widget_btn" type="button"></button>`;

    this.container.appendChild(widget);
  }

  createStyles() {
    const style = document.createElement("style");
    document.head.appendChild(style);
    const sheet: CSSStyleSheet | null = style.sheet;
    sheet?.insertRule(
      `
      .widget { 
        position: fixed; 
        bottom: 2rem;
        right: 2rem; 
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #enable_widget_btn { 
        background-color: red;
        border: 0;
        border-radius: 50%;
        width: 50px; 
        height: 50px;
        }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .form { 
        width: 15rem; 
        height: 18rem;
        position: absolute;
        display: flex;
        padding: 15px;
        flex-wrap: wrap;
        right: 1.45rem; 
        bottom: 1.45rem;
        border: 1px solid black;
        border-radius: 3px;
        background-color: white;        
        }`,
      sheet.cssRules.length,
    );
    // sheet.insertRule(
    //   `
    //   .feedback {}`,
    //   sheet.cssRules.length,
    // );
    sheet?.insertRule(
      `
      .cancel_widget_btn_container {
        position: relative;
        width: 100%;
        text-align: right; 
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #cancel_widget_btn {
        position: absolute;
        right: -25px;
        top: -5px;
        background-color: transparent;
        border: 0;
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .form h2 {
        width: 100%;
        margin: 0;
        padding-bottom: 10px;
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .feedback-text { width: calc(100% + 10px); height: 69%; border-radius: 10px;}`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #submit-feedback-btn { width: calc(100% + 18px); padding: 0; height: 12%; margin: 10px 0; border: 0; background-color: lightgray; border-radius: 10px}`,
      sheet.cssRules.length,
    );
  }
}
