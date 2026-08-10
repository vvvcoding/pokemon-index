import requests

# Collect all pokemon into one file, separated by generation
def getPokemonNames(generationNum):
    url = f"https://pokeapi.co/api/v2/generation/{generationNum}"

    try:
        response = requests.get(url)
        response.raise_for_status
        data = response.json()
        for pokemon in data["pokemon_species"]:
            print(pokemon["name"])
    except requests.exceptions.HTTPError:
        print("Failed:", response.status_code, response.code())
    except requests.exceptions.RequestException as e:
        print("Request failed: ", e)

# Use the pokemon names to get each of their attributes for the site
def getPokemonAttributes(pokemonName):
    url = f"https://pokeapi.co/api/v2/pokemon/{pokemonName}"

    try:
        response = requests.get(url)
        response.raise_for_status
        data = response.json()
        print("Name:", data["name"])
        for t in data["types"]:
            print("Type:", t["type"]["name"])
        print("Height:", data["height"])
        print("Weight:", data["weight"])
        print("Sprite:", data["sprites"]["front_default"])
    except requests.exceptions.HTTPError:
        print("Failed:", response.status_code, response.code())
    except requests.exceptions.RequestException as e:
        print("Request failed: ", e)