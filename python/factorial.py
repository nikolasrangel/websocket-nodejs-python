import sys
import json
import math

# Read data from the Writable Stream
def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

# Work work
def factorial(data):
    return math.factorial(data)


def main():
    # Store the data as an array in 'data_input'
    data_input = int(read_in())
    
    # Compute the sum
    sum_result = factorial(data_input)

    # Return the sum
    sys.stdout.write(str(sum_result)) 
    
# Start the process
if __name__ == '__main__':
    main()
