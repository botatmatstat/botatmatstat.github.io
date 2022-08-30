import re


def main():
    result = "questions = ["
    for i in range(1, 31):
        print(i)
        excracted = extract(open(f"exercise{i:0>2}.tex").read())
        result += create_distionary(*excracted)
    result += "]"
    with open("temp.js", "w+") as f:
        f.write(result)


def extract(text):
    dictionary = {
        0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F"
    }
    sub_dict = {
        r"\sim\cN": r"\sim \cN",
        r"\cN": r"N",
        r"\P": r"\operatorname{P}",
        r"\E(": r"\operatorname{E}(",
        r"\Var": r"\operatorname{D}",
        r"\Cov": r"\operatorname{Cov}",
        r"\Corr": r"\operatorname{Corr}",
        r"\ldots": r"...",
        r"\%": "%",
    }
    delimiters = ("\\begin{question}", "\\end{question}",
                  "\\end{solution}", "\\begin{solution}",
                  "\\end{answerlist}", "\\begin{answerlist}",
                  "\\item")
    regex_pattern = '|'.join(map(re.escape, delimiters))

    lst = [i.strip() for i in re.split(regex_pattern, text)]
    for k, v in sub_dict.items():
        for i, x in enumerate(lst):
            lst[i] = x.replace(k, v)
    question = lst[1].strip().replace("\n", " ")
    answers = list(map(lambda x: x.strip(), lst[3:8]))
    counter = 0
    bad_answers = ["bad answer", "не", "ересь"]
    for index, element in enumerate(lst):
        if any(x in element.lower() for x in bad_answers):
            counter += 1
        elif counter:
            break
    right_answer = dictionary.get(counter, "A")
    return question, answers, right_answer


def create_distionary(question, answers, right_answer):
    format_string = "{"
    format_string += f"""
    "question": String.raw`{question}`,"""
    format_string += """
    "answers": {
    """
    for answer, letter in zip(answers, list("ABCDEFGH")):
        format_string += f"""
            "{letter}": String.raw`
                {answer}
            `,"""

    format_string += """},"""
    format_string += """
        "true": "{}",
        "explanation": "",
    """.format(right_answer)
    format_string += """
    }
    ,
    """
    return format_string


if __name__ == '__main__':
    main()
