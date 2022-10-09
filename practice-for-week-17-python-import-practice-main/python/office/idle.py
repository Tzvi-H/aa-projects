import random

def chat():
  coworkers = ["Jack", "Lenny", "Michelle", "Andrea"]
  chatee = coworkers[random.randint(0, len(coworkers) - 1)]
  print("Chatting with " + chatee + "...")
  print("Done")

def getWater():
  print("Getting water...")
  print("That was refreshing.")

def useSocialMedia():
  socialMedia = ["FaceBook", "Twitter", "YouTube", "Reddit"];
  choice = socialMedia[random.randint(0, len(socialMedia) - 1)]
  print("Using " + choice + "...")
  print("Done")
