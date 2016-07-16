ListItem({
  text: '',
  isSelected() {
    return this.parent().selected() === this.text();
  },
  liStyle() {
    return this.isSelected() ? 'color: red' : '';
  },
  render() {
    <li b="
      text: text,
      click: parent.selected(text),
      class: { selected: isSelected },
      style: liStyle" />
  }
});