import requests

r = requests.get("https://httpbin.org/get")
data = r.json()

print("IP:", data["origin"])
print("Headers:", data["headers"])
print("Args:", data["args"])