import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const City = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  console.log(id);
  console.log(setSearchParams);
  console.log(lat);
  console.log(lng);

  return (
    <div>
      <h3>id: {id}</h3>
      <h5>lat: {lat} lng: {lng}</h5>
    </div>
  )
}

export default City