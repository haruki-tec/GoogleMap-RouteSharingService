import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'react-google-maps';

class GoogleMap extends Component {
    render() {
        const { google } = this.props;
        const position = { lat: 37.7749, lng: -122.4194 }; // サンフランシスコの座標

        return (
            <Map google={google} zoom={14} initialCenter={position}>
                <Marker position={position} />
                <InfoWindow position={position}>
                    <div>
                        <h3>サンフランシスコ</h3>
                        <p>アメリカ西海岸の主要都市</p>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCOUBSXZQCJlVeCtXGTbT7QIZV1OtHXluo'
})(GoogleMap);