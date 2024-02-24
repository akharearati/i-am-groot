import random
#
groot_phrases = [
    "I am Groot!",
    "I am Groot.",
    "I am Groot?",
    "I am Groot...",
    "I am Groot!!",
    "I am Groot..."
]

def generate_groot_phrase():
    return random.choice(groot_phrases)

# Test the function
for _ in range(5):
    print(generate_groot_phrase())
