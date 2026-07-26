import requests
import json
import os

def stats(data):
    print("Name: ", data["name"])
    for t in data["types"]:
        print("Type: ", t["type"]["name"])
    print("Height: ", data["height"])
    print("Weight: ", data["weight"])

def dbWrite(name, data):
    pokemon = {
        "name": data["name"],
        "types": [t["type"]["name"] for t in data["types"]],
        "height": data["height"],
        "weight": data["weight"]
    }

    path = "./storage/pokemondb.json"

    if os.path.exists(path):
        with open(path, "r") as file:
            database = json.load(file)
    else:
        database = {"pokemon": {}}

    database["pokemon"][name] = pokemon

    with open(path, "w") as file:
        json.dump(database, file, indent=4)

    print("Successfully wrote data to file.")

try:
    path = "./storage/namesdb.json"
    
    if os.path.exists(path):
        with open(path, "r") as file:
            database = json.load(file)

    for name in database["generations"]["first"]["pokemon"]:
        url = f"https://pokeapi.co/api/v2/pokemon/{name}/"

        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        stats(data)
        dbWrite(name, data)
        print()

except requests.exceptions.HTTPError:
    print("Failed:", response.status_code, response.code())
except requests.exceptions.RequestException as e:
    print("Request failed: ", e)