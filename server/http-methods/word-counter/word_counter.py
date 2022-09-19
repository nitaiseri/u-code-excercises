
class WordCounter:

    def __init__(self) -> None:
        self.words = {}

    def count(self, word):
        return self.words.get(word, 0)
    