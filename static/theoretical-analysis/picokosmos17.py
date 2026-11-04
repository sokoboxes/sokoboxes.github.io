# ==============================================================================
# Script: picokosmos17.py
# Purpose: Generate solutions for Picokosmos 17
#
# Original author: Jinyou
# Source:
# http://bbs.mf8-china.com/forum.php?mod=viewthread&tid=30733&page=4#pid621511
#
# The original program in FoxPro generated solutions for a horizontally
# flipped version of the Picokosmos 17 puzzle. This version was ported to
# Python and updated by Carlos Montiers Aguilera for the original
# Picokosmos 17, with the additional improvement of generating the full
# sequence of the previous solution at the end of the current solution.

# See: https://sokoboxes.com/articles/fibo-puzzles/
#
# Created: June 12, 2026
# Last update: June 19, 2026
# ==============================================================================
import sys

def fm(fs, fm_count):
    return fs * fm_count if fm_count >= 1 else ""

def print_level(level, boxes, solution, pause, chunk_size):
    divider = '=' * 50
    print(f"{divider}")
    print(f"Level: {level} (Boxes: {boxes}) | Moves: {len(solution)}")
    print(f"Solution:")
    if chunk_size:
        for i in range(0, len(solution), chunk_size):
            print(solution[i:i+chunk_size])
    else:
        print(solution)

    print(f"{divider}")
    if pause:
        input("Press Enter to see the next level...")

def run_solution_builder(max_level, do_chunk):
    chunk_size = 70 if do_chunk else None
    sb, sc, sz = [""]*(max_level+1), [""]*(max_level+1), [""]*(max_level+1)

    # Level 1 (4 Boxes)
    sb[1] = "RUrrdLdlUlluurDuu" + "rr" + "DDLUdddrUruLulllddR"
    sz[1] = "lD" + "" + "lddr" + sb[1] + "UluR"

    print_level(1, 4, sz[1], True, chunk_size)

    for level in range(2, max_level + 1):
        count = level - 1
        boxes = 2*level+2
        sc[level] = (
                "RUdlluurDrddrUruLu" +
                fm("uu", count) + "ll" + fm("DDRUld", count) + "lddR"
        )
        sb[level] = (
                sb[level - 1] +
                "RUrrdLdlUlluurDuu" +
                fm("uu", count) + "rr" + fm("DDLUrd", count) +
                "DDLUdddrUruLulllddR"
        )
        sb[level] += sc[2] + sb[1]
        for j in range(3, level + 1):
            sb[level] += sc[j] + sb[j - 1]

        sz[level] = "lD" + fm("DDRUld", count) + "lddr" + sb[level] + "UluR"

        print_level(level, boxes, sz[level], level < max_level, chunk_size)

if __name__ == "__main__":
    max_level = 8
    do_chunk = (len(sys.argv) > 1 and sys.argv[-1] == "--chunk")
    run_solution_builder(max_level, do_chunk)
