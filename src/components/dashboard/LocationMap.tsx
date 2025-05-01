import { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import Card from '../ui/Card';
import { MapPin } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [
        { saturation: -100 },
        { hue: '#00ffff' }
      ]
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        { color: '#0f172a' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { color: '#00beef' },
        { visibility: 'simplified' },
        { lightness: -70 }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        { color: '#0f172a' }
      ]
    }
  ]
};

// Mock data for simulating tracking
const generateMockPath = (center: { lat: number; lng: number }) => {
  const path = [];
  const numPoints = 20;
  
  for (let i = 0; i < numPoints; i++) {
    path.push({
      lat: center.lat + (Math.random() - 0.5) * 0.005,
      lng: center.lng + (Math.random() - 0.5) * 0.005,
    });
  }
  
  return path;
};

const LocationMap = () => {
  const [position, setPosition] = useState({ lat: 19.0760, lng: 72.8777 }); // Mumbai
  const [path, setPath] = useState<Array<{ lat: number; lng: number }>>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Generate initial path
    const initialPath = generateMockPath(position);
    setPath(initialPath);
    
    // Update position slightly every 5 seconds
    const interval = setInterval(() => {
      const newPosition = {
        lat: position.lat + (Math.random() - 0.5) * 0.001,
        lng: position.lng + (Math.random() - 0.5) * 0.001,
      };
      
      setPosition(newPosition);
      setPath(prevPath => [...prevPath.slice(-19), newPosition]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <Card className="h-full overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary-500" />
          <h3 className="text-white font-medium">Live Location</h3>
        </div>
        <div className="px-2 py-1 rounded-full text-xs font-medium text-success-500 bg-dark-500">
          Active
        </div>
      </div>
      
      <div className="h-[calc(100%-2rem)] relative rounded-lg overflow-hidden">
        <LoadScript googleMapsApiKey="" onLoad={onLoad}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={position}
              zoom={16}
              options={mapOptions}
            >
              <Marker
                position={position}
                icon={{
                  path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
                  fillColor: '#00beef',
                  fillOpacity: 1,
                  strokeColor: '#ffffff',
                  strokeWeight: 2,
                  scale: 2,
                  anchor: { x: 12, y: 22 },
                }}
              />
              <Polyline
                path={path}
                options={{
                  strokeColor: '#00beef',
                  strokeOpacity: 0.8,
                  strokeWeight: 3,
                }}
              />
            </GoogleMap>
          )}
        </LoadScript>
        
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark-400">
            <div className="text-primary-500">Loading map...</div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default LocationMap;