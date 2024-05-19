import matplotlib.pyplot as plt
import base64
from io import BytesIO

def line_plot_generator(title, xLabel, yLabel, xValues, yValues):
    # Convert y values to floats
    yValues = list(map(float, yValues.split(',')))

    # Convert x values to strings
    xValues = xValues.split(',')

    # Create the plot
    plt.figure(figsize=(8, 6))
    plt.plot(xValues, yValues)
    plt.xlabel(xLabel)
    plt.ylabel(yLabel)
    plt.title(title)
    plt.xticks(rotation=45, ha='right')
    plt.grid(True)

    # Save the plot to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    # Convert the plot to a base64 string
    imgStr = base64.b64encode(buffer.getvalue()).decode('utf-8')

    # Close the plot to release memory
    plt.close()

    return imgStr
