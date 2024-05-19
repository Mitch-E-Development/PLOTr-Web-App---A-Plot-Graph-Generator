import matplotlib.pyplot as plt
import base64
from io import BytesIO

def bar_plot_generator(title, xLabel, yLabel, xValues, yValues):
    # convert y values to floats
    yValues = list(map(float, yValues.split(',')))

    # Convert x values to strings
    xValues = xValues.split(',')

    # Create the plot
    plt.figure(figsize=(8, 6))
    plt.bar(xValues, yValues)
    plt.xlabel(xLabel)
    plt.ylabel(yLabel)
    plt.title(title)
    plt.xticks(rotation=45, ha='right')
    plt.grid(True)

    # ave the plot to a BytesIO object
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    # convert the plot to a base64 string
    imgStr = base64.b64encode(buffer.getvalue()).decode('utf-8')

    # close the plot to release memory
    plt.close()

    return imgStr