Colors({
  share: 'colorSelection',
  colors: [ 'red', 'green', 'blue' ],
  render(){
    <ul>
      <li b="repeat: colors, text: repeatObject, click: selectedColor(repeatObject)" />
    </ul>
  }
})