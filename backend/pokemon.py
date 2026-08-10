import requests
import json
import os

def stats(data):
    print("Name:", data["name"])
    for t in data["types"]:
        print("Type:", t["type"]["name"])
    print("Height:", data["height"])
    print("Weight:", data["weight"])
    print("Sprite:", data["sprites"]["front_default"])

try:
    generation = "gen4"

    # Load the list of Pokémon names
    with open("./storage/namesdb.json", "r") as file:
        names_db = json.load(file)

    # Load the Pokémon database if it exists
    pokemon_db_path = "./storage/pokemondb.json"

    if os.path.exists(pokemon_db_path):
        with open(pokemon_db_path, "r") as file:
            pokemon_db = json.load(file)
    else:
        pokemon_db = {"pokemon": {}}

    if generation not in pokemon_db["pokemon"]:
        pokemon_db["pokemon"][generation] = {}

    # Fetch each Pokémon
    for name in names_db["generations"]["fourth"]["pokemon"]:
        url = f"https://pokeapi.co/api/v2/pokemon/{name}/"

        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        stats(data)

        pokemon_db["pokemon"][generation][name] = {
            "name": data["name"],
            "types": [t["type"]["name"] for t in data["types"]],
            "height": data["height"],
            "weight": data["weight"],
            "sprite": data["sprites"]["front_default"]
        }

        print()

    # Save everything once
    with open(pokemon_db_path, "w") as file:
        json.dump(pokemon_db, file, indent=4)

    print("Successfully wrote all Pokémon to file.")

except requests.exceptions.HTTPError as e:
    print("HTTP Error:", e)

except requests.exceptions.RequestException as e:
    print("Request failed:", e)

except FileNotFoundError as e:
    print(e)