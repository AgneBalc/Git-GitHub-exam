export default class Tab {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    this.tabModal = document.createElement('div');
    this.tabModal.classList.add('tabModal');

    this.closeButton = document.createElement('img');
    this.closeButton.setAttribute('src', "../images/xmark-solid.svg");
    this.closeButton.setAttribute('alt', 'xmark');
    this.closeButton.classList.add('closeButton');

    this.tabTitle = document.createElement('h1');
    this.tabTitle.innerText = this.props.title;

    if (this.props.image.includes('mp4')) {
      this.image = document.createElement('video');
      this.image.setAttribute('src', this.props.image);
      this.image.setAttribute('loop', '');
      this.image.setAttribute('autoplay', '');
      this.image.setAttribute('muted', '');
    } else {
      this.image = document.createElement('img');
      this.image.setAttribute('src', this.props.image);
      this.image.setAttribute('alt', this.props.title);
    }

    this.par1 = document.createElement('p');
    this.par1.innerText = this.props.text1;
    this.par2 = document.createElement('p');
    this.par2.innerText = this.props.text2;

    this.tabModal.append(this.closeButton, this.tabTitle, this.image, this.par1, this.par2);
    this.closeTab();
    return this.tabModal;
  }
  closeTab() {
    this.closeButton.addEventListener('click', () => {
      this.tabModal.remove();
      document.querySelector('header').classList.remove('hidden');
      document.querySelector('main').classList.remove('hidden');
    })
  }
}