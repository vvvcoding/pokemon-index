import requests
import json
import os

generation = 2
generationUrl = f"https://pokeapi.co/api/v2/generation/{generation}/"

def dbWrite(generation, data):
    path = "./storage/namesdb.json"

    if os.path.exists(path):
        with open(path, "r") as file:
            database = json.load(file)
    else:
        database = {"generations": {}}

    generation_names = {
        1: "first",
        2: "second",
        3: "third",
        4: "fourth",
        5: "fifth",
        6: "sixth",
        7: "seventh",
        8: "eighth",
        9: "ninth",
    }

    gen_name = generation_names[generation]

    pokemon_names = [
        pokemon["name"]
        for pokemon in data["pokemon_species"]
    ]

    database["generations"][gen_name] = {
        "pokemon": pokemon_names
    }

    with open(path, "w") as file:
        json.dump(database, file, indent=4)

    print("Successfully wrote data to file.")

try:
    response = requests.get(generationUrl)
    response.raise_for_status()
    data = response.json()
    dbWrite(generation, data)
    print()
except requests.exceptions.HTTPError:
    print("Failed:", response.status_code, response.code())
except requests.exceptions.RequestException as e:
    print("Request failed: ", e)