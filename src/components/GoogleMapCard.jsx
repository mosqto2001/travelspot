import React, {Component,useEffect} from 'react'
import {GoogleMap,useLoadScript, Marker} from '@react-google-maps/api'
import '../App.css'

export default function GoogleMapCard(props){
 const {isLoaded} = useLoadScript({
  googleMapsApiKey: "AIzaSyAQj-GnwuSuhcRQOK1DCmgpoC2VuOpHgEw"
 })

 if(!isLoaded) return <div>Loading...</div>
 return <Map position={props.position}/>
}

function Map(props) {
  return <GoogleMap zoom={10} center={props.position} mapContainerClassName="map-container">
    <Marker position={props.position}/>
  </GoogleMap>
}