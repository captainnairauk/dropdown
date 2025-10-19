class Dropdown {
  constructor(containerId, options, onSelect, trigger = "click") {
    this.container = document.getElementById(containerId);
    this.toggle = this.container.querySelector(".dropdown-toggle");
    this.menu = this.container.querySelector(".dropdown-menu");
    this.options = options;
    this.onSelect = onSelect;
    this.trigger = trigger;

    this.renderOptions();
    this.attachEventListeners();
  }

  renderOptions() {
    this.menu.innerHTML = "";
    this.options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option.label;
      li.dataset.value = option.value;
      this.menu.appendChild(li);
    });
  }

  attachEventListeners() {
    if (this.trigger === "click") {
      this.toggle.addEventListener("click", () =>
        this.menu.classList.toggle("show"),
      );
    } else if (this.trigger === "hover") {
      this.container.addEventListener("mouseenter", () =>
        this.menu.classList.add("show"),
      );
      this.container.addEventListener("mouseleave", () =>
        this.menu.classList.remove("show"),
      );
    }

    // this.toggle.addEventListener("click", () => {
    //   this.menu.classList.toggle("show");
    // });

    this.menu.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const selectedValue = event.target.dataset.value;
        const selectedLabel = event.target.textContent;
        this.toggle.textContent = selectedLabel;
        this.menu.classList.remove("show");
        if (this.onSelect) {
          this.onSelect(selectedValue, selectedLabel);
        }
      }
    });

    document.addEventListener("click", (event) => {
      if (!this.container.contains(event.target)) {
        this.menu.classList.remove("show");
      }
    });
  }
}

export default Dropdown;
