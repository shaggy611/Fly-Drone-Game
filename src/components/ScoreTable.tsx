import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(name: string, level: number, score: number) {
  return { name, level, score }
}

const rows = [
  createData('Jack', 5, 765),
  createData('John', 8, 890),
  createData('James', 8, 1100),
]

function ScoreTable() {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ width: '100%' }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell align='center'>Difficulty Level</TableCell>
            <TableCell align='center'>Final Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='center'>{row.level}</TableCell>
              <TableCell align='center'>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ScoreTable
