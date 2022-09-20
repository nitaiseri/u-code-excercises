
class WordCounter:

    def __init__(self) -> None:
        self.words = {}

    def count(self, word):
        return self.words.get(word, 0)
    
    def add_word(self, word):
        self.words[word] = self.words.get(word, 0)
        self.words[word] += 1
        return self.words.get(word)

    def add_sentence(self, sentence):
        words = sentence.split(" ")
        new_words, old_words = 0, 0
        for word in words:
            count = self.add_word(word)
            if count == 1:
                new_words += 1
            else:
                old_words += 1
        return new_words, old_words

    def delete(self, word):
        return self.words.pop(word, 0)

    