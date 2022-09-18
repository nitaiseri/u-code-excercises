import numbers
from select import select
import string


class YouTubeLessonManager:

    def __init__(self) -> None:
        self.lessons = {}
        self.counts = {}
        self.prefix = "https://www.youtube.com/watch?v="
    
    def modify_name(self, name):
        return name.lower().replace(" ", "").translate(str.maketrans('', '', string.punctuation))

    def save(self, name, url):
        modified_name = self.modify_name(name)
        self.lessons[modified_name] = url.split("=")[-1]
        self.counts[modified_name] = 0
    
    def get(self, name):
        modified_name = self.modify_name(name)
        self.counts[modified_name] += 1
        return self.prefix + self.lessons[modified_name]
    
    def get_counts(self, name):
        modified_name = self.modify_name(name)
        return self.counts[modified_name]

    def get_most_popular_lesson(self):
        most_times = 0
        popular = ""
        for name, number in self.counts.items():
            if number > most_times:
                most_times = number
                popular = name
        return popular



lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.save("Dictionaries", "https://www.youtube.com/watch?v=OnDr4J2UXSA")

lesson_manager.get("For-Loops") 
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries") 
print(lesson_manager.get_counts('For-Loops')) # outputs: 3
print(lesson_manager.get_counts('Dictionaries')) # outputs: 2

print(lesson_manager.get_most_popular_lesson()) # outputs: 'For-Loops'

lesson_manager.get_most_popular_lesson