function getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'miles') {
  let theta = longitude1 - longitude2;
  let distance = 60 * 1.1515 * (180 / Math.PI) * Math.acos(
    Math.sin(latitude1 * (Math.PI / 180)) * Math.sin(latitude2 * (Math.PI / 180)) +
    Math.cos(latitude1 * (Math.PI / 180)) * Math.cos(latitude2 * (Math.PI / 180)) * Math.cos(theta * (Math.PI / 180))
  );
  if (unit == 'miles') {
    return Math.round(distance, 2);
  } else if (unit == 'kilometers') {
    return Math.round(distance * 1.609344, 2);
  }
}
function getDistanceFromPath(activeCars = [{ latitude: 0, longitude: 0, Car: {} }], distenation) {
  let Locations = [];

  for (let i = 0; i < activeCars.length; i++) {
    const location = [activeCars[i]["longitude"], activeCars[i]["latitude"]];
    Locations.push(location);
  }
  Locations.push(distenation);

  return fetch("https://api.openrouteservice.org/v2/matrix/driving-car", {
    method: "POST",
    headers: {
      Accept: "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
      "Content-Type": "application/json",
      Authorization: "5b3ce3597851110001cf624850102c6b3fbc441b9ad6356d6cac15c7",
    },
    body: JSON.stringify({
      locations: Locations,
      "destinations": [Locations.length - 1],
      metrics: ["distance"],
      units: "mi",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data["distances"];
    }).then(data => data.slice(0, data.length - 1)).then((data) => {
      let result = []
      data.forEach((e, i) => {
        result.push({ distance: e[0], car: activeCars[i]["Car"] })
        return result;
      });
      return result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return distance;
}