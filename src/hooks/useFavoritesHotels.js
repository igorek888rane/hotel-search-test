import { useMemo } from 'react'
import { quickSort } from '../utils/quickSort'

export const useFavoritesHotels = (
	favoritesHotels,
	sortName,
	sortBy,
	dateFormat,
	HotelEl
) => {
	const favoritesHotelsSort = useMemo(() => {
		if (sortBy === 'ASC') {
			return quickSort(favoritesHotels, sortName)
		} else {
			return quickSort(favoritesHotels, sortName).reverse()
		}
	}, [favoritesHotels, sortName, sortBy])
	return useMemo(() => {
		return favoritesHotelsSort.map(hotel => (
			<HotelEl
				key={hotel.hotelId}
				hotel={hotel}
				allHotels={false}
				dateFormat={dateFormat}
			/>
		))
	}, [favoritesHotelsSort, dateFormat])
}
