import sys
import matplotlib.pyplot as plt
import base64
from io import BytesIO

def line_plot_generator(title, xLabel, yLabel, xValues, yValues):
    # Convert y values to floats
    yValues = list(map(float, yValues.split(',')))

    # Convert x values to strings
    xValues = xValues.split(',')

    # Create the plot
    plt.plot(xValues, yValues)
    plt.xlabel(xLabel)
    plt.ylabel(yLabel)
    plt.title(title)

    # Save the plot to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    # Convert the plot to a base64 string
    img_str = base64.b64encode(buffer.getvalue()).decode('utf-8')

    # Close the plot to release memory
    plt.close()

    return img_str

def main():
    # Extract parameters from command line arguments
    title, xLabel, yLabel, xValues, yValues, plotType = sys.argv[1:]

    # Generate the plot
    plot_base64 = line_plot_generator(title, xLabel, yLabel, xValues, yValues)

    # Return the base64 string
    return plot_base64

if __name__ == "__main__":
    base64_string = main()
    print(base64_string)
