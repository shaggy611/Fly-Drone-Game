import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import useLocalStorage from '../hooks/useLocalStorage'

function ScoreTable() {
  const [value] = useLocalStorage()
  const rows = value.map((item) => JSON.parse(item!))

  // function createData(name: string, level: number, score: number) {
  //   return { name, level, score }
  // }

  // const rows = [
  //   createData('Jack', 5, 765),
  //   createData('John', 8, 890),
  //   createData('James', 8, 1100),
  // ]

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ width: '100%' }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Player Name</TableCell>
            <TableCell align='center'>Difficulty Level</TableCell>
            <TableCell align='center'>Final Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.length === 0 ? (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row' align='center'>
                -
              </TableCell>
              <TableCell align='center'>-</TableCell>
              <TableCell align='center'>-</TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow
                key={row.playerName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.playerName}
                </TableCell>
                <TableCell align='center'>{row.gameComplexity}</TableCell>
                <TableCell align='center'>{row.score}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ScoreTable
