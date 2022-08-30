#!/usr/bin/python

import re
import os
import sys


def main():
    result = "questions = ["
    for file in os.listdir():
        if not file.startswith("exercise") or not file.endswith("tex"): continue
        excracted = extract(open(file).read())
        result += create_distionary(*excracted)
    result += "]"
    args = sys.argv
    if len(args) == 1:
        file = "temp"
    elif len(args) == 2:
        file = args[1]
    else:
        return
    if not file.endswith(".js"):
        file += ".js"
    print("Writing file {}".format(file))
    with open(file, "w+") as f:
        if len(result) > 30:
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
        r"\(": r"\(\,",
        r"\)": r"\,\)",
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
    bad_answers = ["bad answer", "не угадал", "не туда!", "тоже ересь", "неверно"]
    good_answers = ["good answer", "ура", "отлично"]
    for index, element in enumerate(lst):
        if any(element.lower().strip().startswith(x) for x in bad_answers):
            print(element)
            counter += 1
        elif any(element.lower().strip().startswith(x) for x in good_answers):
            print(element)
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
