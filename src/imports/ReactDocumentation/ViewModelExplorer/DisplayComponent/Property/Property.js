Property({
  name: '',
  nameStyle() {
    return {
      color: this.value.valid() ? undefined : 'darkred'
    }
  },
  value: undefined,
  isBoolean() {
    return typeof(this.value()) === "boolean";
  },
  render() {
    <tr>
      <td b="text: name, style: nameStyle"></td>
      <td style="padding-left: 5px">
        <input b="if: !isBoolean, value: value, change: flashColor" />
        <input type="checkbox" b="if: isBoolean, check: value" />
      </td>
    </tr>
  }
})