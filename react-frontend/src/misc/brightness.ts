function isDark (c: string): boolean {
  // ty to https://stackoverflow.com/a/12043228/8438955
  var c = c.substring(1) // strip #
  var rgb = parseInt(c, 16) // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff // extract red
  var g = (rgb >> 8) & 0xff // extract green
  var b = (rgb >> 0) & 0xff // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

  return luma < 40
}

export default isDark
