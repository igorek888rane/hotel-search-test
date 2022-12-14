import { useMemo } from 'react'
import styles from './MySelect.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import ArrowEl from './ArrowEl'
import { setSortNameAc } from '../../../redux/reducers/sortReducer'
import { sortByItems } from '../../../data'

const SelectEl = ({ sortItem }) => {
	const { sortName } = useSelector(state => state.sort)
	const dispatch = useDispatch()
	const sortByMemo = useMemo(() => {
		return sortByItems.map(sortBy => (
			<ArrowEl key={sortBy} sortByItem={sortBy} sortItem={sortItem} />
		))
	}, [sortByItems])
	return (
		<div
			onClick={() => dispatch(setSortNameAc(sortItem.sort))}
			className={`${styles.select} ${
				sortItem.sort === sortName ? styles.active : ''
			}`}
		>
			<span>{sortItem.name}</span>
			<div className={styles.arrow}>{sortByMemo}</div>
		</div>
	)
}

export default SelectEl
