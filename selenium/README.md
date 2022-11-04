# About
This is an assignment that use selenium to scrap data (name, latitude, longitude) from a website name "https://food.grab.com/sg/en/"

## For more understanding read below problem statement

For this assignment: Go to [https://food.grab.com/sg/en/](https://food.grab.com/sg/en/) and enter any place in Singapore. The website will display a number of restaurants around the given location.

Scroll down and click "Load More" when you see one. There, you would need to click many such "Load More" buttons if you want to see all the restaurants

For this assignment, you have to fetch and give the latitudes and longitudes of all the restaurants on this page

Grab is the Swiggy of Singapore, Malaysia, Thailand, Philippines etc. To access it on your browser, you would have to use a VPN or a proxy. Hope that helps. As you will notice, latitudes and longitudes are not available on the page -- but there is a way to get them from the **same page** - without using any third-party service such as maps opening each restaurant separately etc. The assignment is to find a way to get the data from the same page and code it. 

Do not use any python maps libraries like Geopy, Geopandas etc. or even Google Maps, Open Maps etc. The data is directly given from Grab. You have to find it and then, write a code to scrape it. 

Do note that we need the latitudes and latitudes of ALL restaurants for all of Singapore - which should be more than a hundred on one page (in a city like Manila, Philippines).

## Conclusion 

As Selenium is new to me but i had tried to do and able to do most of it. 

so to see data i had get from website, check restaurant.json file.

## updated code 

on Click on load more getting more data 

and storing list of stores in restaurant.json file

to run this code on your system do clone this repo and and run the code by "npm start" and to store the data in json file run the server by "json-server --watch restaurant.json --port 9090".
