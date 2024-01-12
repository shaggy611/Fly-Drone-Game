const prepareCoordsForSVG = (coords: string[]): string[] => {
  const cordsString = []

  if (coords.length > 0) {
    for (let i = 0; i < coords.length - 1; i++) {
      const [x1, y1] = coords[i].split(',').map(Number)
      const [x2, y2] = coords[i + 1].split(',').map(Number)

      cordsString.push(`${x1};${y1};${x2};${y2}`)
    }

    return cordsString
  }
  return []
}

export default prepareCoordsForSVG
