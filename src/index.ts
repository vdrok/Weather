import weather from "weather-js"
import zipcodes from "zipcodes"

const points = [
	{ name: "AL", code: 35801 },
	{ name: "AK", code: 99501 },
	{ name: "AZ", code: 85001 },
	{ name: "AR", code: 72201 },
]

points.map((point) => {
	const location = zipcodes.lookup(point.code)
	// tslint:disable-next-line
	console.log("location: ", location)
	weather.find({search: point.code, degreeType: "F"}, (err: any, result: any)  => {
		// tslint:disable-next-line
		if(err) console.log("Error: ", err)
		// tslint:disable-next-line
		console.log(JSON.stringify(result, null, 2))
	})
})
