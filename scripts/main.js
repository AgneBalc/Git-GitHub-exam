import Tab from "./Tab.js";

const allTabButtons = document.querySelectorAll('.tab');
allTabButtons.forEach(button => button.addEventListener('click', e => {
  const tabTitle = e.target.textContent;

  fetch('./scripts/tabsData.json')
    .then(res => res.json())
    .then(tabsData => {
      tabsData.forEach(tab => tabTitle === tab.title && document.body.append(new Tab(tab)))
    })
}))