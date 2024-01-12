const stringCoordsToArrayNumbers = (
  cords: string[],
  caveBuildBlock: number
): number[][] => {
  return cords.map((item, index) => {
    const [x1] = item.split(',').map(Number)
    return [250 + x1, caveBuildBlock * index + caveBuildBlock]
  })
}

export default stringCoordsToArrayNumbers
