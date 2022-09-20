class ErrorMsg:
    json_format = {0: "Wrong Json Format",
                    1: "Should be {'word': 'somthing'}, one word, no spaces",
                    2: "Should be {'sentence': 'somthing'}"}
    value_error = {0: "word should be one word, no spaces!"}


class JsonFormatError(Exception):
    """Raised when the recived Json is in the wrong format"""
    def __init__(self, type = 0) -> None:
        super().__init__()
        self.type = type
    
    def __str__(self) -> str:
        return ErrorMsg.json_format[self.type]

class WordError(Exception):
    """Raised when should get a word but got more then one"""
    def __init__(self, type = 0) -> None:
        super().__init__()
        self.type = type
            
    def __str__(self) -> str:
        return ErrorMsg.value_error[self.type]