import React, {useEffect} from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';
import useMap from '@/hooks/useMap';
import { type } from 'os';
import Script from 'next/dist/client/script';


const Map = styled.div`
    flex-grow: 15;
`;

const SearchMap: NextPage = () => {
    // let map: naver.maps.Map;
    // const center: naver.maps.LatLng = new window.naver.maps.LatLng(37.3595704, 127.105399);
    
    // map = new naver.maps.Map('map', {
    //     center: center,
    //     zoom: 16
    // });
    
    // useEffect(() => {
    //     const mapDiv = document.getElementById("map");
    //     const map = new naver.maps.Map(mapDiv);
    //   }, []);
    useMap();
    
    return (
        <Map id='map'>
            
        </Map>
    );
};

export default SearchMap;