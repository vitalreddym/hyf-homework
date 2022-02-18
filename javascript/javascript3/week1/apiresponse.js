/* 
2. Postal PIN code API http://www.postalpincode.in/Api-Details

Postal PIN Code API responds the details of post offices by searching a specific postal pin code
or a branch name within India. The responded json data shows the number of post offices, the type of post office
whether it is "Main/Head" or a "Sub" post office and it's complete address means which city and state that
post office belongs to. For example:

a. GET https://api.postalpincode.in/pincode/{PINCODE}  ---- Which gives the number of postal offices and it's
 addresses and related sub post offices based on the given pincode. The api responded json data is in array and
 the data structure is "array of objects". Below is the json response data.


[{"Message":"Number of pincode(s) found:3","Status":"Success","PostOffice":[{"Name":"Chaithanyapuri Colony",
"Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Andhra Pradesh",
"District":"K.V.Rangareddy","Division":"Hyderabad South East","Region":"Hyderabad City","Block":"Saroornagar",
"State":"Telangana","Country":"India","Pincode":"500060"},{"Name":"Dilsukhnagar Colony","Description":null,
"BranchType":"Sub Post Office","DeliveryStatus":"Non-Delivery","Circle":"Andhra Pradesh","District":"K.V.Rangareddy",
"Division":"Hyderabad South East","Region":"Hyderabad City","Block":"Saroornagar","State":"Telangana",
"Country":"India","Pincode":"500060"},{"Name":"P & T Colony (K.V.Rangareddy)","Description":null,"BranchType":
"Sub Post Office","DeliveryStatus":"Delivery","Circle":"Andhra Pradesh","District":"Hyderabad","Division":"Hyderabad South East",
"Region":"Hyderabad City","Block":"Saroornagar","State":"Telangana","Country":"India","Pincode":"500060"}]}]

b. GET https://api.postalpincode.in/postoffice/{POSTOFFICEBRANCHNAME}   -- which gives number of post offices on
specific given city name and it's sub post offices complete addresses.

[{"Message":"Number of Post office(s) found:2","Status":"Success","PostOffice":[{"Name":"New Delhi ",
"Description":null,"BranchType":"Head Post Office","DeliveryStatus":"Delivery","Circle":"Delhi",
"District":"New Delhi","Division":"New Delhi GPO","Region":"Delhi","State":"Delhi","Country":"India",
"Pincode":"110001"},{"Name":"New Delhi South Ext-II","Description":null,"BranchType":"Sub Post Office",
"DeliveryStatus":"Non-Delivery","Circle":"Delhi","District":"South Delhi","Division":"New Delhi South",
"Region":"Delhi","State":"Delhi","Country":"India","Pincode":"110049"}]}]





3. // Signup and First call to the Weather API. Response data from the API

{"coord":{"lon":12.5655,"lat":55.6759},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds",
"icon":"04d"}],"base":"stations","main":{"temp":281.29,"feels_like":279.97,"temp_min":279.71,"temp_max":282.53,
"pressure":998,"humidity":78},"visibility":10000,"wind":{"speed":2.24,"deg":225},"clouds":{"all":100},
"dt":1644846022,"sys":{"type":2,"id":2005001,"country":"DK","sunrise":1644820620,"sunset":1644855065},
"timezone":3600,"id":2618425,"name":"Copenhagen","cod":200}

*/