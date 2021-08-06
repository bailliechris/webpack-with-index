export default class Weather{
    constructor(location) {
        this.location = location;
        this.details = {};
        this.key = "*";
    }

    async load() {
        let res = await fetch('https://api.weatherapi.com/v1/current.json?key=' + this.key + '&q=' + this.location + '&aqi=no',
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    
        this.details = await res.json();
        console.log(this.details);

        if (this.details.current.uv > 2) {
            return 'Yes, you need suncream today.';
        }
        else {
            return "No, you're safe from the sun today.";
        }
    }
}