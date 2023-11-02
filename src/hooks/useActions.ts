import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGithubUsers } from '../store/actionCreator/users'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({ fetchGithubUsers }, dispatch)
}
