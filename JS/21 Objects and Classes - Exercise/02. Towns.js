function createTownObjects(townData) {
    for (let i = 0; i < townData.length; i++) {
      const [town, latitude, longitude] = townData[i].split(' | ');
      const formattedLatitude = Number(latitude).toFixed(2);
      const formattedLongitude = Number(longitude).toFixed(2);
      const townObject = {
        town,
        latitude: formattedLatitude,
        longitude: formattedLongitude
      };
      console.log(townObject);
    }
  }