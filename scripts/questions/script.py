from os import listdir, system, path
from sys import argv


def find_program(prog_filename, error_on_missing=False):
    bdirs = ['$HOME/Environment/local/bin/',
             '$HOME/bin/',
             '/share/apps/bin/',
             '/usr/local/bin/',
             '/usr/bin/']
    paths_tried = []
    for d in bdirs:
        p = path.expandvars(path.join(d, prog_filename))
        paths_tried.append(p)
        if path.exists(p):
            return p
    if error_on_missing:
        raise Exception("*** Необходимо установить {}".format(prog_filename, "\n  ".join(paths_tried)))
    else:
        return None


def read_command():
    print("Do you want to beautify or minify? [b/m]")
    user_input = input()
    if user_input.startswith("b"):
        command = beautify_command
    elif user_input.startswith("m"):
        command = minify_command
    else:
        raise SystemExit
    return command


def main():
    if len(argv) == 1:
        command = read_command()
    elif argv[1].startswith("m"):
        command = minify_command
    elif argv[1].startswith("b"):
        command = beautify_command
    else:
        command = read_command()
    js_files = [i for i in listdir() if i.endswith(".js")]
    for file in js_files:
        system(command.format(file))


if __name__ == "__main__":
    minify_program = "css-html-js-minify"
    beautify_program = "css-beautify"
    minify_command = "css-html-js-minify {} --overwrite"
    beautify_command = "css-beautify {} --replace"
    find_program(minify_program, True)
   # find_program(beautify_program, True)
    main()
