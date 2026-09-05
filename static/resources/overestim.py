import subprocess
import sys

# Config
EXECUTABLE = "RS"
SECONDS = 420

OVERESTIM_START = 5
OVERESTIM_END = 1.0
STEP = -0.1


def format_version(value: float) -> str:
    return f"{value:.1f}"


def generate_versions(start: float, end: float, step: float):

    if step == 0:
        raise ValueError("STEP cannot be 0")

    current = start

    if step > 0:
        condition = lambda c: c <= end + 1e-9
    else:
        condition = lambda c: c >= end - 1e-9

    while condition(current):
        yield format_version(round(current, 1))
        current += step


def run_test(nb: str):

    for oe in generate_versions(OVERESTIM_START, OVERESTIM_END, STEP):

        print(f"Level={nb} with overestimation={oe}")

        commands = "\n".join([
            f"T {SECONDS}",
            "O",
            f"V {oe}",
            "<",
            f"S {nb}",
            ""
        ])

        process = subprocess.Popen(
            EXECUTABLE,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1
        )

        process.stdin.write(commands)
        process.stdin.close()

        try:
            for line in process.stdout:
                line = line.rstrip()

                if "Moves: " in line:
                    if "Moves: 0" not in line:
                        # Green text
                        print(f"\033[92m{line}\033[0m")
                    else:
                        print(line)

        except KeyboardInterrupt:
            print("\nInterrupted by user.")

            process.terminate()

            try:
                process.wait(timeout=2)
            except subprocess.TimeoutExpired:
                process.kill()

            sys.exit(1)

        print(f"Finished overestimation={oe}")
        print("-" * 40)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(f"Usage: python {sys.argv[0]} <number>")
        sys.exit(1)

    try:
        run_test(sys.argv[1])

    except KeyboardInterrupt:
        print("\nInterrupted by user.")
        sys.exit(1)
