class Weather {
  constructor(city) {
    this.apiKey = '1abc953f30a5a9726c5c068bb319151a';
    this.city = city;
  }

  // Fetch weather from API 
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}