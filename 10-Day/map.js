// creating an empty map
const empty = new Map()
console.log(empty)


// creating map from array
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map) // Map(3) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
console.log(map.size) // 3


// addng values to map
map.set('Nepal','Kathmandu')
console.log(map) // Map(4) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo', 'Nepal' => 'Kathmandu'}


// getting value from map
console.log(map.get('Nepal')) // Kathmandu


// checking key in map
console.log(map.has('Nepal')) // true


// getting all values from map using loop
for (const country of map) {
  console.log(country)
}

for (const [country, city] of map){
  console.log(country, city)
 }