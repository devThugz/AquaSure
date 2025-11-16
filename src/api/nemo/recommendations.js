/**
 * Provides fishing recommendations based on location, weather data, and historical catch data
 * 
 * @param {Object} req - Request object with lat, lng, and optional keywords
 * @param {Object} res - Response object
 */
exports.handler = async (req, res) => {
  try {
    const {
      lat,
      lng,
      keywords
    } = req.query;
    if (!lat || !lng) {
      return res.status(400).json({
        success: false,
        message: 'Latitude and longitude are required'
      });
    }
    // In a real implementation:
    // 1. Fetch current weather data for the location
    // 2. Fetch historical catch data for the location
    // 3. Fetch seasonal fish availability data
    // 4. Combine data to generate recommendations
    // Mock data for demonstration
    const mockRecommendations = [{
      id: '1',
      name: 'Yellowfin Tuna',
      confidence: 95,
      season: 'Currently in season',
      trend: 'High catch rates reported',
      location: 'Offshore, 15-20km from coast',
      reason: 'Optimal water temperature of 26°C and clear visibility',
      image: 'https://images.unsplash.com/photo-1545816250-0c2c90e5f59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }, {
      id: '2',
      name: 'Mackerel Scad',
      confidence: 88,
      season: 'Peak season',
      trend: 'Abundant catches this week',
      location: 'Coastal waters, 5-8km from shore',
      reason: 'Large schools spotted by other fishers yesterday',
      image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }, {
      id: '3',
      name: 'Blue Marlin',
      confidence: 72,
      season: 'Early season',
      trend: 'Increasing sightings',
      location: 'Deep waters, 25km+ offshore',
      reason: 'Following warm current patterns moving into the area',
      image: 'https://images.unsplash.com/photo-1513039464749-94912b3841ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }, {
      id: '4',
      name: 'Milkfish',
      confidence: 65,
      season: 'Year-round',
      trend: 'Stable availability',
      location: 'Brackish waters near mangroves',
      reason: 'Recent rainfall has created favorable conditions',
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }, {
      id: '5',
      name: 'Lapu-Lapu (Grouper)',
      confidence: 60,
      season: 'Year-round, best quality now',
      trend: 'Moderate catches reported',
      location: 'Near coral reefs, 10-12km from shore',
      reason: 'Clear water and moderate currents are favorable',
      image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }];
    // Filter by keywords if provided
    let filteredRecommendations = mockRecommendations;
    if (keywords) {
      const searchTerms = keywords.toLowerCase().split(' ');
      filteredRecommendations = mockRecommendations.filter(rec => {
        return searchTerms.some(term => rec.name.toLowerCase().includes(term) || rec.location.toLowerCase().includes(term) || rec.season.toLowerCase().includes(term) || rec.trend.toLowerCase().includes(term) || rec.reason.toLowerCase().includes(term));
      });
    }
    // Get weather data for the location
    const weatherData = {
      temperature: 29,
      condition: 'Partly Cloudy',
      windSpeed: '10 km/h',
      windDirection: 'SE',
      waveHeight: '0.5-1m',
      visibility: 'Excellent (15km+)',
      forecast: 'Stable conditions expected for the next 24 hours'
    };
    // Get market data
    const marketData = {
      lastUpdated: new Date().toISOString(),
      trends: [{
        species: 'Yellowfin Tuna',
        price: '₱280-320/kg',
        change: 5
      }, {
        species: 'Mackerel',
        price: '₱140-160/kg',
        change: -3
      }, {
        species: 'Blue Marlin',
        price: '₱350-400/kg',
        change: 0
      }, {
        species: 'Milkfish',
        price: '₱180-200/kg',
        change: 2
      }, {
        species: 'Lapu-Lapu',
        price: '₱400-600/kg',
        change: 8
      }]
    };
    return res.status(200).json({
      success: true,
      recommendations: filteredRecommendations,
      weather: weatherData,
      market: marketData,
      location: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        region: 'Batangas',
        // In real app, would be determined from coordinates
        nearbySpots: [{
          name: 'Coral Reef Point',
          distance: '3.5km east',
          targetSpecies: ['Lapu-Lapu', 'Coral Trout']
        }, {
          name: 'Deep Blue Drop',
          distance: '12km southeast',
          targetSpecies: ['Tuna', 'Marlin']
        }, {
          name: 'Sandy Banks',
          distance: '7km southwest',
          targetSpecies: ['Mackerel', 'Snapper']
        }]
      }
    });
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate recommendations',
      error: error.message
    });
  }
};